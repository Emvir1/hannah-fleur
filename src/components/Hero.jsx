import { motion } from 'framer-motion';
import HeroScene from './HeroScene';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-canvas">
        <HeroScene />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ✿ &nbsp; Handmade · Custom · Budget-Friendly &nbsp; ✿
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          Beautiful Blooms,
          <br />
          <em>Made Just for You</em>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Handcrafted floral bouquets lovingly made by one passionate creator —
          <br className="hide-mobile" /> affordable, personal, and perfect for students &amp; couples.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#how-it-works" className="btn-primary">How to Order</a>
          <a href="#contact" className="btn-outline">Message Us Now</a>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll to discover</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
