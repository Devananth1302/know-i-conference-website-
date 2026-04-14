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
    { name: 'About Us', to: 'about' },
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
              <img src="/logo.png" alt="ICICRCET'26" className="nav-logo-main" style={{ height: '88px' }} />
            </Link>
            <img src="/logo2.png" alt="AIMST" className="nav-logo-partner" />
            <img src="/logo1.png" alt="SVCE" className="nav-logo-partner" />
            <img src="/know i.jpg" alt="KNOW-I" className="nav-logo-partner" style={{ height: '90px' }} />
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
            className="btn-modern nav-btn btn-black"
            style={{ whiteSpace: 'nowrap' }}
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
                className="btn-modern btn-black w-full mt-4 text-center"
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
          padding: 0;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .fixed-nav.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 0;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .nav-container {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          max-width: 100%;
          width: 100%;
          padding-left: 1rem;
          padding-right: 1.5rem;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          margin-right: 3rem;
        }

        .nav-desktop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1;
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
          height: 75px;
          border-radius: 4px;
          padding: 2px;
          background: transparent;
          border: none;
          box-shadow: none;
          opacity: 1;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .nav-logo-main:hover, .nav-logo-partner:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }



        .sep-line-v {
          width: 1px;
          height: 30px;
          background: var(--glass-border);
        }

        .nav-links-wrap {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .nav-link {
          position: relative;
          color: #333333;
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--neon-blue);
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
          padding: 0.35rem 0.9rem;
          font-size: 0.7rem;
          text-decoration: none;
          flex-shrink: 0;
          font-weight: 800;
        }

        .btn-black {
          background: #000;
          color: #fff;
          border: 1.5px solid #000;
          transition: all 0.3s ease;
          border-radius: 6px;
        }

        .btn-black:hover {
          background: #333;
          border-color: #333;
          color: white;
          transform: translateY(-2px);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: #333333;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .mobile-toggle { display: block; }
          .nav-logo-main { height: 55px; }
          .nav-logo-partner { height: 45px; }
          .nav-logos-group { gap: 0.4rem; }
          .nav-container { justify-content: space-between; padding-left: 1.5rem; padding-right: 1.5rem; }
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
