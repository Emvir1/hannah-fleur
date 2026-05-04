import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Collections.css';

const steps = [
  {
    step: '01',
    icon: '💬',
    title: 'Tell Me Your Vision',
    desc: 'Message me on Facebook or send a text. Share your idea — occasion, color preference, vibe, or even a photo for inspiration.',
  },
  {
    step: '02',
    icon: '💸',
    title: 'Set Your Budget',
    desc: "No fixed prices here — I work around what you can afford. Whether it's ₱200 or ₱2,000, I'll make something beautiful within your budget.",
  },
  {
    step: '03',
    icon: '🌸',
    title: 'I Handcraft It for You',
    desc: 'Every bouquet is made fresh and by hand just for you. No templates, no shortcuts — pure love in every stem.',
  },
  {
    step: '04',
    icon: '🎁',
    title: 'Pick Up or Deliver',
    desc: 'Coordinate pick-up or delivery directly through our chat. We make sure your flowers arrive fresh and ready to wow.',
  },
];

const occasions = [
  { emoji: '🎓', label: 'Graduation' },
  { emoji: '💑', label: 'Anniversaries' },
  { emoji: '💝', label: "Valentine's" },
  { emoji: '🎂', label: 'Birthdays' },
  { emoji: '💍', label: 'Proposals' },
  { emoji: '🤍', label: 'Just Because' },
  { emoji: '🙏', label: 'Thank You' },
  { emoji: '🌟', label: 'Any Occasion' },
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="step-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <div className="step-number">{step.step}</div>
      <div className="step-icon">{step.icon}</div>
      <h3 className="step-title">{step.title}</h3>
      <p className="step-desc">{step.desc}</p>
      {index < steps.length - 1 && <div className="step-connector" />}
    </motion.div>
  );
}

export default function Collections() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });
  const occRef = useRef(null);
  const occInView = useInView(occRef, { once: true });

  return (
    <section id="how-it-works" className="collections">
      <div className="collections-header" ref={headRef}>
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Simple Custom Process
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          How to Order Your Bouquet
        </motion.h2>
        <motion.p
          className="collections-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          No catalog, no set menu — just your ideas brought to life. Here's how it works:
        </motion.p>
      </div>

      <div className="steps-grid">
        {steps.map((s, i) => (
          <StepCard key={i} step={s} index={i} />
        ))}
      </div>

      <div className="occasions-section" ref={occRef}>
        <motion.h3
          className="occasions-title"
          initial={{ opacity: 0 }}
          animate={occInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Perfect For Any Occasion 🌸
        </motion.h3>
        <div className="occasions-grid">
          {occasions.map((o, i) => (
            <motion.div
              key={i}
              className="occasion-chip"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={occInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
            >
              <span className="occasion-emoji">{o.emoji}</span>
              <span>{o.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="collections-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <p>Ready to order something unique and made just for you?</p>
        <a href="#contact" className="btn-primary">Start Your Custom Order</a>
      </motion.div>
    </section>
  );
}
