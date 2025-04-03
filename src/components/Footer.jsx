function Footer() {
  return (
    <>
      <footer>
        <div className="footer-box">
          <p>©2025 Jaime Ramis. All rights reserved</p>
          <nav className="footer__nav">
            <a className="footer__nav--item" href="#about" rel="noopener noreferrer">
              <h4>About</h4>
            </a>
            <a className="footer__nav--item" href="#projects" rel="noopener noreferrer">
              <h4>Projects</h4>
            </a>
            <a className="footer__nav--item" href="#technologies" rel="noopener noreferrer">
              <h4>Technologies</h4>
            </a>
            <a className="footer__nav--item" href="#clients" rel="noopener noreferrer">
              <h4>Clients</h4>
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
