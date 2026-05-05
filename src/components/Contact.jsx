import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import "./Contact.css";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [form, setForm] = useState({
    name: "",
    occasion: "",
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-inner">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow light">Let's Connect</p>
          <h2 className="section-title light">
            Ready to Order Your Custom Bouquet?
          </h2>
          <p className="contact-desc">
            Every bouquet starts with a conversation. Reach out through Facebook,
            Instagram, or send a text — tell me your occasion, your idea, and
            your budget, and I'll take care of the rest.
          </p>

          <div className="contact-details">
            <a
              className="contact-item contact-link"
              href="https://www.facebook.com/people/Hannah-Fleur/61588988883986/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ci-icon"><FacebookIcon size={26} /></span>
              <div>
                <strong>Facebook Page</strong>
                <span>Hannah Fleur — Message us here!</span>
              </div>
            </a>

            <a
              className="contact-item contact-link"
              href="https://www.instagram.com/hannah.fleur_/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ci-icon"><InstagramIcon size={26} /></span>
              <div>
                <strong>Instagram</strong>
                <span>@hannah.fleur_</span>
              </div>
            </a>

            <a className="contact-item contact-link" href="tel:+639155378044">
              <span className="ci-icon">📱</span>
              <div>
                <strong>Mobile / SMS / WhatsApp</strong>
                <span>0915 537 8044</span>
              </div>
            </a>

            <div className="contact-item">
              <span className="ci-icon">🕐</span>
              <div>
                <strong>Response Time</strong>
                <span>Usually within a few hours</span>
              </div>
            </div>

            <div className="contact-item">
              <span className="ci-icon">💸</span>
              <div>
                <strong>Budget-Friendly</strong>
                <span>Just tell me your budget — I'll work with it!</span>
              </div>
            </div>
          </div>

          <div className="contact-flowers">
            {"🌸🌺🌹💐🌻🌷".split("").map((f, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {f}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {sent ? (
            <div className="form-success">
              <span className="success-icon">🌸</span>
              <h3>Thank You!</h3>
              <p>
                Your message has been received! I'll get back to you as soon as
                possible.
              </p>
              <a
                href="https://www.facebook.com/people/Hannah-Fleur/61588988883986/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Also Message on Facebook
              </a>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Tell Me About Your Order ✿</h3>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Maria Santos"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="occasion">What's the Occasion?</label>
                <select
                  id="occasion"
                  name="occasion"
                  value={form.occasion}
                  onChange={handleChange}
                >
                  <option value="">Select an occasion...</option>
                  <option>Birthday</option>
                  <option>Anniversary / Monthsary</option>
                  <option>Valentine's Day</option>
                  <option>Graduation</option>
                  <option>Proposal</option>
                  <option>Surprise / Just Because</option>
                  <option>Thank You Gift</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Your Budget (optional)</label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  placeholder="e.g. ₱300, ₱500, ₱1000 — any amount is okay!"
                  value={form.budget}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Describe Your Dream Bouquet</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Colors, style, flowers you love, who it's for — any details help! Feel free to attach a photo via Facebook too."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary form-submit">
                Send My Order Details 🌸
              </button>

              <p className="form-note">
                Or reach me directly on{" "}
                <a
                  href="https://www.facebook.com/people/Hannah-Fleur/61588988883986/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                {", "}
                <a
                  href="https://www.instagram.com/hannah.fleur_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                {", or text "}
                <a href="tel:+639155378044">0915 537 8044</a>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
