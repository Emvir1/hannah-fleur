import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

function Stat({ number, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-visual" ref={ref}>
          <motion.div
            className="about-img-wrapper"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="about-img-placeholder">
              <div className="flower-art">
                <div className="fa-center" />
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="fa-petal"
                    style={{ '--angle': `${(i / 12) * 360}deg` }}
                  />
                ))}
                <div className="fa-leaf fa-leaf-1" />
                <div className="fa-leaf fa-leaf-2" />
                <div className="fa-stem" />
              </div>
            </div>
            <div className="about-badge">
              <span>🌸</span>
              <p>Handmade<br />with Love</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="section-eyebrow">The Person Behind the Petals</p>
          <h2 className="section-title">One Creator, One Bouquet at a Time</h2>
          <p className="about-desc">
            Hannah Fleur is a one-person passion project — every bouquet is personally handcrafted
            from start to finish. No mass production, no shortcuts. Just genuine love poured into
            every arrangement made specifically for you.
          </p>
          <p className="about-desc">
            Built for students and couples who deserve something beautiful without breaking the bank.
            Each order is custom made — you tell me your idea, your budget, and I'll bring it to life.
          </p>

          <div className="about-features">
            {[
              { icon: '🌸', text: 'Every bouquet is personally handmade' },
              { icon: '✏️', text: 'Fully custom — you design, I create' },
              { icon: '💸', text: 'Budget-friendly prices for students & couples' },
              { icon: '💚', text: 'Made with fresh, quality flowers' },
            ].map((f, i) => (
              <motion.div
                key={i}
                className="feature-item"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <span className="feature-icon">{f.icon}</span>
                <span>{f.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="stats-row">
        <Stat number="100%" label="Handmade" delay={0} />
        <Stat number="Custom" label="Every Order" delay={0.1} />
        <Stat number="₱ ♡" label="Budget-Friendly" delay={0.2} />
        <Stat number="5★" label="Happy Customers" delay={0.3} />
      </div>
    </section>
  );
}
