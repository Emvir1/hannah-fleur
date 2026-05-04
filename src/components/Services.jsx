import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Services.css';

const services = [
  {
    icon: '💐',
    title: 'Custom Bouquets',
    desc: 'Tell me your color, vibe, or occasion — I\'ll create a one-of-a-kind bouquet made personally for you.',
  },
  {
    icon: '🎁',
    title: 'Surprise Gifts',
    desc: 'Make someone\'s day with a handmade flower arrangement — perfect for saying "I love you," "I\'m sorry," or just "I\'m thinking of you."',
  },
  {
    icon: '💑',
    title: 'Couple Arrangements',
    desc: 'Sweet and romantic bouquets for dates, monthsaries, anniversaries, or any milestone you want to celebrate together.',
  },
  {
    icon: '🎓',
    title: 'Graduation Bouquets',
    desc: 'Celebrate your grad with a fresh, beautiful bouquet that\'s picture-perfect for that big moment.',
  },
  {
    icon: '💸',
    title: 'Budget-Friendly Options',
    desc: 'Student budget? No problem. I work with what you can afford to make sure nobody misses out on beautiful flowers.',
  },
  {
    icon: '✏️',
    title: 'Consult & Plan',
    desc: 'Not sure what you want yet? Let\'s chat! I\'ll help you figure out the perfect arrangement for your vision and budget.',
  },
];

function ServiceCard({ s, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      className="service-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
    >
      <div className="service-icon">{s.icon}</div>
      <h3 className="service-title">{s.title}</h3>
      <p className="service-desc">{s.desc}</p>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section id="services" className="services">
      <div className="services-inner">
        <div className="services-header" ref={ref}>
          <motion.p
            className="section-eyebrow light"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            What I Offer
          </motion.p>
          <motion.h2
            className="section-title light"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Handmade, Just for You
          </motion.h2>
          <motion.p
            className="services-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything is made to order — no two bouquets are the same.
          </motion.p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
