import { useState } from "react";
import { withNamespaces } from "react-i18next";

function Form({ t }) {
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // List of Values
  const [formData, setFormData] = useState(initialFormData);

  // Error Messages
  const [error, setError] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Success Message
  const [successMessage, setSuccessMessage] = useState("");

  // Handle Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {
      name: formData.name === "" ? t("formNameRequired") : "",
      email: formData.email === "" ? t("formEmailRequired") : /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(formData.email) ? "" : t("formInvalidEmail"),
      subject: formData.subject === "" ? t("formSubjectRequired") : "",
      message: formData.message === "" ? t("formMessageRequired") : "",
    };

    setError(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((errMsg) => errMsg !== "");

    if (!hasErrors) {
      // Form submission logic
      setSuccessMessage("Form submitted successfully!");
      setFormData(initialFormData); // Reset form data
    }
  };

  return (
    <section id="brand" className="section-container">
      <h2 class="section-title">{t("formTitle")}</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit} noValidate>
          {/* Success Message */}
          {successMessage && <div className="form-success">{successMessage}</div>}
          {/* Name */}
          <div className="form-item">
            <div className="form-error">{error.name}</div>
            <input type="text" id="name" name="name" placeholder={t("formName")} value={formData.name} onChange={handleChange} required />
          </div>

          {/* Email */}
          <div className="form-item">
            <div className="form-error">{error.email}</div>
            <input type="email" id="email" name="email" placeholder={t("formEmail")} value={formData.email} onChange={handleChange} required />
          </div>

          {/* Subject */}
          <div className="form-item">
            <div className="form-error">{error.subject}</div>
            <input type="text" id="subject" name="subject" placeholder={t("formSubject")} value={formData.subject} onChange={handleChange} required />
          </div>

          {/* Message */}
          <div className="form-item">
            <div className="form-error">{error.message}</div>
            <textarea id="message" name="message" placeholder={t("formMessage")} value={formData.message} onChange={handleChange} required></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-submit">
            <button type="submit" value="Submit">
              {t("formSubmit")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default withNamespaces()(Form);
