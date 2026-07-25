import content from "../data/content.json";
import type { FooterContent, NavItem } from "../types";

const { copyright, navAriaLabel } = content.footer as FooterContent;
const nav = content.nav as NavItem[];

function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <p>{copyright}</p>
        <nav className="footer__nav" aria-label={navAriaLabel}>
          {nav.map(({ label, href }) => (
            <a key={href} className="footer__nav--item" href={href} rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;