import { useState } from "react";
import content from "../data/content.json";
import type { HeaderContent, NavItem } from "../types";

const { brand, menuAriaLabel, navAriaLabel } = content.header as HeaderContent;
const nav = content.nav as NavItem[];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header>
        <div className="header-box desktop">
          <span className="header--title">{brand}</span>
          <nav className="header__nav__desktop" aria-label={navAriaLabel}>
            {nav.map(({ label, href }) => (
              <a key={href} className="header__nav--item" href={href} rel="noopener noreferrer">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="header-box mobile">
          <div className="header__icons--mobile">
            <span className="header--title">{brand}</span>
            <button className="header--icon" onClick={toggleMenu} aria-label={menuAriaLabel}>
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M5 5 L35 35" stroke="black" strokeWidth="2"></path>
                  <path d="M35 5 L5 35" stroke="black" strokeWidth="2"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M0 3h40v2H0V3z"></path>
                  <path d="M0 9h40v2H0V9z"></path>
                  <path d="M0 15h40v2H0v-2z"></path>
                </svg>
              )}
            </button>
          </div>
          <nav className={`header__nav__mobile ${menuOpen ? "open" : ""}`} aria-label={navAriaLabel}>
            {nav.map(({ label, href }) => (
              <a key={href} className="header__nav--item" href={href} rel="noopener noreferrer">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
