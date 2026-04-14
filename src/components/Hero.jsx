import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Download, Laptop, User, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-viewport">
      <div className="hero-geometric-decor">
        <div className="shape circle-1"></div>
        <div className="shape circle-2"></div>
      </div>

      <div className="container hero-inner">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="hero-badge"
        >
          <span>MAY 5, 2026 • HYBRID MODE</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-main-title">
            <span className="title-top">SRI VENKATESWARA COLLEGE OF ENGINEERING</span>
            <span className="gradient-text title-focus">ICICRCET'26</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-tagline"
        >
          2<sup>nd</sup> International Conference on Innovative Computing, Research and Cutting Edge Technologies in Computer Science and Engineering
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-subline-vibrant"
          style={{ lineHeight: 1.3, display: 'block' }}
        >
          <div style={{ fontWeight: 400, fontSize: '1rem', textTransform: 'none', opacity: 0.8 }}>in association with</div>
          <div style={{ height: '0.7em' }}></div>
          <div style={{ fontWeight: 800, fontSize: '2.1rem', letterSpacing: 0.5 }}>AIMST UNIVERSITY, MALAYSIA</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-actions"
        >
          <a href="/ICICRCET'26  Brochure.pdf" download className="brochure-btn-vibrant">
            <div className="brochure-icon-vibrant">
              <Download size={20} />
            </div>
            <span>DOWNLOAD BROCHURE</span>
          </a>
        </motion.div>

      </div>

      <style jsx>{`
        .hero-viewport {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 200px;
          overflow: hidden;
        }

        .hero-geometric-decor {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          filter: blur(100px);
          opacity: 0.4;
        }

        .circle-1 {
          top: -10%;
          right: -5%;
          width: 600px;
          height: 600px;
          background: var(--neon-purple);
          border-radius: 50%;
        }

        .circle-2 {
          bottom: -20%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: var(--neon-pink);
          border-radius: 50%;
        }

        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-badge {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.6rem 1.5rem;
          border-radius: 100px;
          border: 1px solid var(--glass-border);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          margin-bottom: 2.5rem;
          color: var(--neon-blue);
        }

        .hero-main-title {
          font-family: var(--font-heading);
          line-height: 0.9;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title-top {
          display: block;
          font-size: clamp(1rem, 2.5vw, 2.2rem);
          font-weight: 300;
          letter-spacing: 0.2rem;
          color: var(--text-secondary);
          white-space: nowrap;
          text-align: center;
        }

        .title-focus {
          display: block;
          font-size: clamp(4rem, 15vw, 10rem);
          font-weight: 900;
          letter-spacing: -5px;
        }

        .hero-tagline {
          max-width: 800px;
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.8;
          font-weight: 500;
        }

        .hero-subline-vibrant {
          max-width: 900px;
          font-size: clamp(1.1rem, 2.2vw, 1.6rem);
          color: white;
          margin-bottom: 4.5rem;
          line-height: 1.8;
          font-weight: 900;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-shadow: 0 0 30px rgba(0, 234, 255, 0.6);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 3rem;
          margin-bottom: 6rem;
        }

        .brochure-btn-vibrant {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          background: var(--neon-pink);
          padding: 0.8rem 2rem;
          border-radius: 100px;
          color: white;
          box-shadow: 0 10px 25px rgba(255, 0, 128, 0.3);
        }

        .brochure-btn-vibrant:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(255, 0, 128, 0.5);
        }

        .brochure-icon-vibrant {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.2);
        }

        .brochure-btn-vibrant span {
          font-weight: 800;
          letter-spacing: 0.1em;
          font-size: 0.85rem;
        }

        .partner-strip {
          padding: 1.5rem 3rem;
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .partner-label {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: var(--text-secondary);
        }

        .logos-wrap {
          display: flex;
          align-items: center;
          gap: 3rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.2rem;
        }

        .partner-logo-img {
          height: 45px;
          width: auto;
          opacity: 1;
        }

        .know-i {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: white;
        }

        @media (max-width: 1024px) {
          .title-focus { font-size: 4.5rem; letter-spacing: -2px; }
          .hero-badge { font-size: 0.7rem; padding: 0.5rem 1.2rem; margin-bottom: 2rem; }
          .hero-tagline { margin-bottom: 3rem; }
          .hero-actions {
            flex-direction: column;
            gap: 2rem;
          }
          .partner-strip {
            flex-direction: column;
            gap: 1.5rem;
            padding: 2.5rem 1.5rem;
          }
          .logos-wrap {
            gap: 2rem;
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .title-focus { font-size: 3.2rem; }
          .hero-main-title { margin-bottom: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
