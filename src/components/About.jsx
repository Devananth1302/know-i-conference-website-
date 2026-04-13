import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Zap, Cpu, Globe, Award, ShieldCheck, School, Users, Presentation, Download } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('college');

  const content = {
    college: {
      title: "ABOUT THE COLLEGE",
      text: "Sri Venkateswara College of Engineering (Autonomous), a premier self-financing engineering college, was established in 1985 and is managed by the Sri Venkateswara Educational and Health Trust. The college offers 12 undergraduate programs and 7 postgraduate programs in Engineering and Technology. These programs are approved by AICTE and affiliated with Anna University, Chennai. The college attained autonomous status in 2016 and was accredited by the National Assessment and Accreditation Council (NAAC) with an A+ Grade in 2022. The National Board of Accreditation has accredited many of the eligible programs. The college is an ISO 21001:2018 certified institution.",
      icon: <School size={24} />
    },
    department: {
      title: "ABOUT THE DEPARTMENT",
      text: "The Department of Computer Science and Engineering, established in 1985, has earned distinguished national and international recognition through the collective efforts of its dedicated faculty, committed support staff, and talented students. The department is equipped with state-of-the-art computing infrastructure and a team of highly qualified faculty specializing in cutting-edge domains such as Artificial Intelligence, Augmented Reality and Virtual Reality, Cloud Computing and Data Analytics.The department fosters a vibrant culture of research and innovation, actively organizing national and international conferences, workshops, technical seminars, and symposia. Through strong global academic collaborations and industry partnerships, it ensures students are exposed to a truly international learning experience. The department takes pride in a distinguished alumni network, including Padma Shri Prof. V. Kamakoti, Director of IIT Madras and Vishisht Seva Medal Awardee Sri R Guruhari-Air Vice Marshal, Indian Air Force, a reflection of its enduring tradition of nurturing exceptional talent. The department proudly offers B.E. in Computer Science and Engineering, B.Tech. in Artificial Intelligence and Data Science, M.E. in Computer Science and Engineering, and Ph.D. programs - all committed to shaping technically excellent, ethically grounded, and socially responsible engineers for a rapidly evolving world.",
      icon: <Users size={24} />
    },
    conference: {
      title: "ABOUT CONFERENCE",
      text: (
        <>
          The 2<sup>nd</sup> International Conference on Innovative Computing Research and Cutting Edge Technologies in Computer Science and Engineering (ICICRCET'26) is an annual event that brings together researchers, scholars, and industry experts in Computer Science and Engineering. Organized by the Department of Computer Science and Engineering, Sri Venkateswara College of Engineering, in association with AIMST University Malaysia, the conference provides a platform for presenting innovative research, fostering industry-academia collaboration, and enhancing skill development among students and faculty. What began as a national conference has grown steadily in stature; over the past two years, it has evolved into a prestigious international platform, attracting contributions from researchers and institutions across the globe. The conference also facilitates the formal publication of selected works, with accepted papers placed in peer-reviewed proceedings, ensuring that the research presented reaches a wider academic audience and contributes meaningfully to the global body of knowledge.
        </>
      ),
      icon: <Presentation size={24} />
    },
  };

  return (
    <section id="about" className="section-padding about-viewport">
      <div className="container">
        <div className="about-main-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-header text-center"
          >
            <h4 className="vibrant-label">ESTABLISHED INNOVATION</h4>
            <h2 className="title-huge">
              ABOUT <span className="gradient-text">US</span>
            </h2>
          </motion.div>

          <div className="about-tabs centered-tabs">
            {Object.keys(content).map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {content[tab].icon}
                <span>{content[tab].title.split(' ').pop()}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="about-description-box glass-panel limit-width-center"
          >
            <h3 className="tab-title text-center mb-10">{content[activeTab].title}</h3>
            <p className="tab-text" style={{ whiteSpace: 'pre-line' }}>{content[activeTab].text}</p>
            {content[activeTab].link && (
              <div className="tab-action mt-8 text-center">
                <a href="/ICICRCET'26  Brochure.pdf" download className="btn-modern btn-primary inline-flex">
                  DOWNLOAD FORMAT <Download size={20} className="ml-2" />
                </a>
              </div>
            )}
          </motion.div>
        </div>

        <div className="vision-mission-row">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="floating-card-alt glass-panel"
          >
            <div className="box-icon-wrap bg-pink pulse-slow">
              <Target size={32} />
            </div>
            <div className="box-content">
              <h3>VISION</h3>
              <p>To gain national and global recognition as a leader in computer science and engineering driven by innovative research, outstanding education, and the accomplishments of our learners, supported by state-of-the-art resources and a collaborative environment.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="floating-card-alt glass-panel"
          >
            <div className="box-icon-wrap bg-blue pulse-slow">
              <Zap size={32} />
            </div>
            <div className="box-content">
              <h3>MISSION</h3>
              <ul className="mission-list-alt">
                <li>By providing a supportive ecosystem to our learners that fosters continuous learning, education, research, and innovation in computer science and engineering.</li>
                <li>By enhancing the skills and virtues of our learners, enabling them to understand and address societal needs through advanced technological solutions.</li>
                <li>By leveraging the experiential learning in the field of computer science and engineering and cutting-edge research to develop innovative solutions for complex engineering and technological challenges at both national and global levels.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about-viewport {
          position: relative;
          background: radial-gradient(circle at 100% 50%, rgba(122, 0, 255, 0.05) 0%, transparent 50%);
        }

        .about-main-full {
          margin-bottom: 6rem;
        }

        .about-header.text-center {
          text-align: center;
          margin-bottom: 4rem;
        }

        .vibrant-label {
          font-weight: 800;
          letter-spacing: 0.4em;
          color: var(--neon-pink);
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .title-huge {
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -2px;
          margin-bottom: 1rem;
        }

        .centered-tabs {
          justify-content: center !important;
          margin-bottom: 3.5rem !important;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .about-tabs {
          display: flex;
          gap: 1rem;
        }

        .tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1.2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: var(--text-secondary);
          font-weight: 700;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tab-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .tab-btn.active {
          background: var(--neon-blue);
          border-color: transparent;
          color: black;
          box-shadow: 0 10px 25px rgba(0, 234, 255, 0.25);
        }

        .limit-width-center {
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          padding: 3rem;
        }

        .tab-title {
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--neon-pink);
          margin-bottom: 2.5rem;
        }
        
        .mb-10 { margin-bottom: 2.5rem; }

        .tab-text {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.9;
          font-weight: 500;
          text-align: justify;
        }

        .vision-mission-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .floating-card-alt {
          padding: 3rem;
          display: flex;
          gap: 2.5rem;
          align-items: flex-start;
          transition: all 0.4s var(--ease-expo);
        }

        .floating-card-alt:hover {
          transform: translateY(-8px);
          border-color: var(--glass-border);
          background: rgba(255, 255, 255, 0.04);
        }

        .box-icon-wrap {
          width: 75px;
          height: 75px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .bg-pink { background: var(--neon-pink); box-shadow: 0 10px 25px rgba(255, 0, 128, 0.25); }
        .bg-blue { background: var(--neon-blue); box-shadow: 0 10px 25px rgba(0, 234, 255, 0.25); }

        .box-content h3 {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 1.2rem;
          letter-spacing: 0.1em;
        }

        .box-content p {
          color: var(--text-secondary);
          line-height: 1.8;
          font-weight: 500;
          font-size: 1rem;
        }

        .mission-list-alt {
          list-style: none;
          padding: 0;
        }

        .mission-list-alt li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.7;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .mission-list-alt li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--neon-blue);
          font-weight: 900;
        }

        @media (max-width: 968px) {
          .vision-mission-row { grid-template-columns: 1fr; }
          .limit-width-center { padding: 3rem 2rem; }
          .tab-btn span { font-size: 0.75rem; }
        }

        @media (max-width: 600px) {
          .about-tabs { flex-direction: column; }
          .floating-card-alt { flex-direction: column; text-align: center; align-items: center; gap: 1.5rem; }
          .mission-list-alt li { text-align: left; }
        }
      `}</style>
    </section>
  );
};

export default About;
