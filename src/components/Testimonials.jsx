import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const reviews = [
  {
    name: 'Maria Santos',
    role: 'Bride',
    text: 'Hannah Fleur made our wedding day absolutely magical. The flowers were breathtakingly beautiful — even more stunning than I imagined. Every guest was asking who did our florals!',
    stars: 5,
    avatar: '👰',
  },
  {
    name: 'Jose Reyes',
    role: 'Anniversary Surprise',
    text: 'I ordered a surprise bouquet for my wife and the flowers arrived fresh, beautifully arranged, and ahead of schedule. She was in tears — the good kind! Will definitely order again.',
    stars: 5,
    avatar: '💑',
  },
  {
    name: 'Ana Dela Cruz',
    role: 'Corporate Client',
    text: 'We use Hannah Fleur for all our office events and they never disappoint. The arrangements are always fresh, elegant, and professionally done. Highly recommend!',
    stars: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Carlo Mendoza',
    role: 'Birthday Surprise',
    text: 'Ordered a sunflower arrangement for my mom\'s birthday. She absolutely loved it! The flowers stayed fresh for over a week. Great quality and great service.',
    stars: 5,
    avatar: '🎂',
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
