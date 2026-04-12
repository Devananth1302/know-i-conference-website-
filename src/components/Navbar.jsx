import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Tracks', to: 'tracks' },
    { name: 'Timeline', to: 'dates' },
    { name: 'Committee', to: 'committee' },
    { name: 'Contact', to: 'contact' },
  ];

  const REG_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSco5TtEb430BAfDCEh9kOXTKZiqmcAjEeBOoe8zd3fbT9vU0w/viewform";

  return (
    <nav className={`fixed-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-brand">
          <div className="nav-logos-group">
            <Link to="hero" smooth={true} className="main-nav-logo">
              <img src="/logo.png" alt="ICICRCET'26" className="nav-logo-main" />
            </Link>
            <div className="sep-line-v"></div>
            <img src="/logo1.png" alt="SVCE" className="nav-logo-partner" />
            <img src="/logo2.png" alt="AIMST" className="nav-logo-partner" />
            <img src="/know i.jpg" alt="KNOW-I" className="nav-logo-partner" />
          </div>
        </div>

        <div className="nav-desktop">
          <div className="nav-links-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={800}
                offset={-100}
                className="nav-link"
                activeClass="active"
                spy={true}
              >
                {link.name}
                <div className="underline"></div>
              </Link>
            ))}
          </div>

          <a 
            href={REG_LINK}
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-modern btn-primary nav-btn"
          >
            REGISTER NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-menu"
          >
            <div className="mobile-menu-header">
               <span className="mobile-header-text">CONFERENCE PAPER PRESENTATION</span>
            </div>
            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-link"
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href={REG_LINK}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-modern btn-primary w-full mt-4 text-center"
              >
                REGISTER NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .fixed-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s var(--ease-expo);
          padding: 2rem 0;
        }

        .fixed-nav.scrolled {
          background: rgba(2, 2, 5, 0.85);
          backdrop-filter: blur(20px);
          padding: 1.2rem 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-brand {
          display: flex;
          align-items: center;
        }

        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        @media (max-width: 1024px) {
          .nav-desktop { display: none; }
          .fixed-nav { padding: 1.5rem 0; }
        }

        .nav-logos-group {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .main-nav-logo {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .nav-logo-main, .nav-logo-partner {
          height: 40px;
          width: auto;
          transition: all 0.4s var(--ease-expo);
          border-radius: 6px;
          padding: 4px;
          background: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          opacity: 0.92;
        }

        .nav-logo-main:hover, .nav-logo-partner:hover {
          transform: translateY(-2px);
          opacity: 1;
          box-shadow: 0 8px 25px rgba(0, 234, 255, 0.4);
          border-color: var(--neon-blue);
        }

        .nav-logo-main {
          height: 48px;
        }

        .sep-line-v {
          width: 1px;
          height: 30px;
          background: var(--glass-border);
        }

        .nav-links-wrap {
          display: flex;
          gap: 2.5rem;
        }

        .nav-link {
          position: relative;
          color: var(--text-secondary);
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .nav-link:hover, .nav-link.active {
          color: white;
        }

        .underline {
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--neon-blue);
          transition: width 0.3s ease;
        }

        .nav-link:hover .underline, .nav-link.active .underline {
          width: 100%;
        }

        .nav-btn {
          padding: 0.7rem 1.8rem;
          font-size: 0.8rem;
          text-decoration: none;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .mobile-toggle { display: block; }
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 300px;
          height: 100vh;
          background: rgba(2, 2, 5, 0.95);
          backdrop-filter: blur(40px);
          z-index: 1001;
          padding: 6rem 2rem;
          border-left: 1px solid var(--glass-border);
        }

        .mobile-menu-header {
          margin-bottom: 3.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .mobile-header-text {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          color: var(--neon-blue);
          text-transform: uppercase;
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mobile-link {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .mobile-link:hover {
          color: var(--neon-blue);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
