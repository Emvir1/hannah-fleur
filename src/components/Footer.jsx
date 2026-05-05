import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/logo.png" alt="Hannah Fleur" className="footer-logo-img" />
          <p>
            Handmade floral bouquets crafted with love — custom, personal, and
            budget-friendly for everyone.
          </p>
          <div className="footer-contact-chips">
            <a
              href="https://www.facebook.com/people/Hannah-Fleur/61588988883986/"
              target="_blank"
              rel="noreferrer"
              className="footer-chip"
            >
              <FacebookIcon size={17} /> Facebook
            </a>
            <a
              href="https://www.instagram.com/hannah.fleur_/"
              target="_blank"
              rel="noreferrer"
              className="footer-chip"
            >
              <InstagramIcon size={17} /> Instagram
            </a>
            <a href="tel:+639155378044" className="footer-chip">
              📱 0915 537 8044
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "How to Order", href: "#how-it-works" },
                { label: "What I Offer", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Bouquets For</h4>
            <ul>
              {[
                "Students",
                "Couples",
                "Graduations",
                "Anniversaries",
                "Birthdays",
                "Surprise Gifts",
              ].map((s) => (
                <li key={s}>
                  <a href="#how-it-works">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/people/Hannah-Fleur/61588988883986/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link"
                >
                  <FacebookIcon size={15} /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hannah.fleur_/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link"
                >
                  <InstagramIcon size={15} /> Instagram
                </a>
              </li>
              <li>
                <a href="tel:+639155378044">0915 537 8044</a>
              </li>
            </ul>
            <div className="footer-petals">🌸 🌺 💐 🌹 🌻</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Hannah Fleur. Handmade with 🌸 — Custom
          bouquets for every budget. Emvir©
        </p>
      </div>
    </footer>
  );
}
