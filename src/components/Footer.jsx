import React from 'react';
import { Globe } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-hub">
            <h3 className="footer-title-text">ICICRCET'26</h3>
            <p className="footer-tagline">
              2<sup>nd</sup> International Conference on Innovative Computing, Research and Cutting Edge Technologies in Computer Science and Engineering.
            </p>
          </div>

          <div className="footer-info-rack">
            <div className="info-col">
              <h5>NAVIGATION</h5>
              <Link to="about" smooth={true}>About Us</Link>
              <Link to="tracks" smooth={true}>Tracks</Link>
              <Link to="timeline" smooth={true}>Timeline</Link>
              <Link to="committee" smooth={true}>Committee</Link>
              <Link to="contact" smooth={true}>Contact</Link>
            </div>

            <a 
              href="https://maps.app.goo.gl/HTRYcR8ztLW7QQnU8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="info-col address-col"
              style={{ display: 'block', textDecoration: 'none' }}
            >
              <h5>VENUE</h5>
              <p>SRI VENKATESWARA COLLEGE OF ENGINEERING (AUTONOMOUS)</p>
              <p>POST BAG NO. 1, PENNALUR VILLAGE,</p>
              <p>CHENNAI - BENGALURU HIGHWAY,</p>
              <p>SRIPERUMBUDUR - 602117, TAMIL NADU, INDIA</p>
            </a>
          </div>
        </div>


      </div>

      <style jsx>{`
        .footer-wrap {
          padding: 100px 0 50px;
          border-top: 1px solid var(--glass-border);
          position: relative;
          background: #000;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.5fr 2.5fr;
          gap: 6rem;
          margin-bottom: 8rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 2.5rem;
          cursor: pointer;
        }

        .footer-logos-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .footer-title-text {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 2rem;
          background: linear-gradient(to right, var(--neon-blue), var(--neon-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 2rem;
          letter-spacing: -1px;
        }

        .footer-tagline {
          color: var(--text-secondary);
          font-weight: 500;
          line-height: 1.8;
          max-width: 350px;
          margin-bottom: 3rem;
        }

        .social-rack {
          display: flex;
          gap: 1rem;
        }

        .soc-link {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .soc-link.pink:hover { background: var(--neon-pink); box-shadow: 0 0 20px rgba(255, 0, 128, 0.4); border-color: transparent; }
        .soc-link.blue:hover { background: var(--neon-blue); box-shadow: 0 0 20px rgba(0, 234, 255, 0.4); border-color: transparent; }
        .soc-link.purple:hover { background: var(--neon-purple); box-shadow: 0 0 20px rgba(122, 0, 255, 0.4); border-color: transparent; }
        .soc-link.lime:hover { background: var(--neon-lime); box-shadow: 0 0 20px rgba(179, 255, 0, 0.4); color: black; border-color: transparent; }

        .footer-info-rack {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4rem;
        }

        .info-col h5 {
          font-weight: 800;
          letter-spacing: 0.2em;
          font-size: 0.8rem;
          margin-bottom: 2rem;
          color: white;
        }

        .info-col a, .info-col p {
          display: block;
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1.2rem;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .info-col a:hover { color: var(--neon-blue); }

        .address-col p {
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
        }

        .footer-bottom-bar {
          padding-top: 3rem;
          border-top: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-secondary);
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }

        .svce-tag {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--neon-blue);
        }

        @media (max-width: 1024px) {
          .footer-main { grid-template-columns: 1fr; gap: 4rem; }
          .footer-info-rack { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .footer-info-rack { grid-template-columns: 1fr; }
          .footer-bottom-bar { flex-direction: column; gap: 2rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
