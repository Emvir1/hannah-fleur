import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const reviews = [
  {
    name: 'Axl Aquino',
    role: 'Verified Facebook Review',
    text: 'Ang ganda po ng flowers :))) nagustuhan sobra ng gf ko hehe. Sa uulitin po tnx <|||3',
    stars: 5,
    avatar: '🌹',
  },
  {
    name: 'Joseph Benjamin Aranda',
    role: 'Verified Facebook Review',
    text: 'We really love the arrangement/s. Well done, Hannah. Will order more soon!',
    stars: 5,
    avatar: '💐',
  },
  {
    name: 'Ronalyn Rascano',
    role: 'Verified Facebook Review',
    text: 'Obsessed with the flowers, so pretty! Thank you so much!',
    stars: 5,
    avatar: '🌸',
  },
  {
    name: 'Emvir Rivera',
    role: 'Verified Facebook Review',
    text: '10/10 flowers. 11/10 florist 😂🌹',
    stars: 5,
    avatar: '🌺',
  },
  {
    name: 'Jude Sap',
    role: 'Verified Facebook Review',
    text: 'Very affordable flowers, fresh and beautiful! Highly recommended.',
    stars: 5,
    avatar: '🌼',
  },
  {
    name: 'Roxy Concepcion Mdlbyn',
    role: 'Verified Facebook Review',
    text: 'The color combination of flower and arrangement is so beautiful with super affordable price. The seller is accommodating.',
    stars: 5,
    avatar: '🌷',
  },
  {
    name: 'Angel Pagkatipunan Domingo',
    role: 'Verified Facebook Review',
    text: 'Very legit and fast transactions 🤝 Thank you so much!!',
    stars: 5,
    avatar: '✨',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const next = () => setActive((p) => (p + 1) % reviews.length);
  const prev = () => setActive((p) => (p - 1 + reviews.length) % reviews.length);

  return (
    <section className="testimonials" ref={ref}>
      <motion.div
        className="testimonials-inner"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="section-eyebrow">Kind Words</p>
        <h2 className="section-title">What Our Clients Say</h2>

        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={prev} aria-label="Previous">‹</button>

          <div className="carousel-track">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="testimonial-card"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <div className="t-stars">
                  {'★'.repeat(reviews[active].stars)}
                </div>
                <p className="t-text">"{reviews[active].text}"</p>
                <div className="t-author">
                  <span className="t-avatar">{reviews[active].avatar}</span>
                  <div>
                    <strong className="t-name">{reviews[active].name}</strong>
                    <span className="t-role">{reviews[active].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-btn next" onClick={next} aria-label="Next">›</button>
        </div>

        <div className="carousel-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
