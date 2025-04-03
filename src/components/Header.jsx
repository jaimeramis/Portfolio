import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {/*HEADER*/}
      <header>
        {/*DESKTOP VERSION*/}
        <div className="header-box desktop">
          <h4 className="header--title">Jaime</h4>
          <nav className="header__nav__desktop">
            <a className="header__nav--item" href="#about" rel="noopener noreferrer">
              <h4>About</h4>
            </a>
            <a className="header__nav--item" href="#projects" rel="noopener noreferrer">
              <h4>Projects</h4>
            </a>
            <a className="header__nav--item" href="#technologies" rel="noopener noreferrer">
              <h4>Technologies</h4>
            </a>
            <a className="header__nav--item" href="#clients" rel="noopener noreferrer">
              <h4>Clients</h4>
            </a>
          </nav>
          {/*BTN
          <a class="header__contact btn" href="#" rel="noopener noreferrer">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            <h4>Contact</h4>
          </a>
           */}
        </div>
        {/*END DESKTOP VERSION*/}
        {/* MOBILE VERSION */}
        <div className="header-box mobile">
          <div className="header__icons--mobile">
            <h2 className="header--title">Jaime</h2>
            {/* Botón de menú con icono dinámico */}
            <button className="header--icon" onClick={toggleMenu}>
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 5 L35 35" stroke="black" strokeWidth="2"></path>
                  <path d="M35 5 L5 35" stroke="black" strokeWidth="2"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3h40v2H0V3z"></path>
                  <path d="M0 9h40v2H0V9z"></path>
                  <path d="M0 15h40v2H0v-2z"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Menú móvil */}
          <nav className={`header__nav__mobile ${menuOpen ? "open" : ""}`}>
            <a className="header__nav--item" href="#about" rel="noopener noreferrer">
              <h4>About</h4>
            </a>
            <a className="header__nav--item" href="#projects" rel="noopener noreferrer">
              <h4>Projects</h4>
            </a>
            <a className="header__nav--item" href="#technologies" rel="noopener noreferrer">
              <h4>Technologies</h4>
            </a>
            <a className="header__nav--item" href="#clients" rel="noopener noreferrer">
              <h4>Clients</h4>
            </a>
            {/*BTN
            <a className="header__contact--mobile" href="#" rel="noopener noreferrer">
              <h4>Contact</h4>
            </a>
            */}
          </nav>
        </div>
        {/* END MOBILE VERSION */}
      </header>
      {/*END HEADER*/}
    </>
  );
}

export default Header;
