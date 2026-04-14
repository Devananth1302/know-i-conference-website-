import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
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
      
      {/* Top Row: Full Width White Strip for Logos */}
      <div className="nav-logos-strip">
        <div className="nav-logos-top">
          <Link to="hero" smooth={true} className="main-nav-logo">
            <img src="/logo.png" alt="ICICRCET'26" className="nav-logo-uniform" />
          </Link>
          <img src="/logo2.png" alt="AIMST" className="nav-logo-uniform" />
          <img src="/logo1.png" alt="SVCE" className="nav-logo-uniform" />
          <img src="/know i.jpg" alt="KNOW-I" className="nav-logo-uniform" />
          
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={32} color="#002244" /> : <Menu size={32} color="#002244" />}
          </button>
        </div>
      </div>

      <div className="nav-container-vertical">
        {/* Bottom Row: Centered Navigation & Button */}
        <div className="nav-desktop-bottom">
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
            className="btn-modern nav-btn btn-color-matching"
            style={{ whiteSpace: 'nowrap' }}
          >
            REGISTER NOW
          </a>
        </div>
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
               <span className="mobile-header-text">ICICRCET'26 MENU</span>
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
                className="btn-modern btn-color-matching w-full mt-4 text-center"
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
          /* Match main page color / transparent at top for immersion */
          background: transparent;
          box-shadow: none; 
          border-bottom: 1px solid transparent;
        }

        .fixed-nav.scrolled {
          background: rgba(2, 2, 5, 0.90);
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5); 
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-logos-strip {
          background: #ffffff;
          width: 100%;
          border-bottom: 2px solid rgba(0, 50, 100, 0.05); /* Subtle frame */
        }

        .nav-container-vertical {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0.8rem 2rem;
          gap: 0;
        }

        .nav-logos-top {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          position: relative;
          padding: 0.6rem 2rem;
        }

        .main-nav-logo {
          cursor: pointer;
        }

        .nav-logo-uniform {
          height: 100px;
          object-fit: contain;
          transition: transform 0.3s ease;
          border-radius: 4px;
          mix-blend-mode: multiply; /* Works perfectly on the white strip */
        }

        .nav-logo-uniform:hover {
          transform: scale(1.05);
        }

        .nav-desktop-bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3.5rem;
          width: 100%;
        }

        .nav-links-wrap {
          display: flex;
          gap: 3rem;
          align-items: center;
        }

        .nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.85); /* Light text against dark bg */
          font-weight: 800;
          font-size: 0.95rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        .nav-link:hover, .nav-link.active {
          color: #00eaff; /* Neon tech blue */
        }

        .underline {
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0;
          height: 2px;
          background: #00eaff;
          transition: width 0.3s ease;
        }

        .nav-link:hover .underline, .nav-link.active .underline {
          width: 100%;
        }

        .nav-btn {
          padding: 0.6rem 1.6rem;
          font-size: 0.8rem;
          text-decoration: none;
          flex-shrink: 0;
          font-weight: 900;
          letter-spacing: 0.05em;
        }

        /* Color matching button utilizing glass-neon core colors */
        .btn-color-matching {
          background: rgba(255, 255, 255, 0.1); 
          color: #ffffff !important; 
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          border-radius: 6px;
        }

        .btn-color-matching:hover {
          background: #00eaff; /* Bright neon blue hover */
          border-color: #00eaff;
          color: #000000 !important; /* Invert text to punchy black */
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 234, 255, 0.3);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .nav-container-vertical {
            padding: 1rem 1.5rem;
            gap: 1rem;
          }
          
          .nav-logos-top {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
            padding-right: 4rem; /* Buffer for absolute toggle icon */
            padding-left: 1.5rem;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          .nav-logo-uniform { 
            height: 60px; /* appropriately scaled for mobile vertical layout */
          }

          .nav-desktop-bottom {
            display: none;
          }

          .mobile-toggle { 
            display: block; 
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 300px;
          height: 100vh;
          background: rgba(2, 2, 5, 0.98); /* Deep dark theme matched */
          z-index: 1001;
          padding: 6rem 2rem;
          box-shadow: -5px 0 30px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(20px);
        }

        .mobile-menu-header {
          margin-bottom: 3.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-header-text {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          color: #00eaff;
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mobile-link {
          font-size: 1.4rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .mobile-link:hover {
          color: #00eaff; 
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
