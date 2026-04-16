import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Linkedin } from 'lucide-react';

const committee = {
  patron: [
    { name: "PROF. DR. E.N. GANESH", role: "PRINCIPAL , SVCE", org: "SVCE", color: "var(--neon-purple)", initials: "EG", image: "/staffs/E.N. GANESH.png" }
  ],
  chiefPatrons: [
    { name: "DR. A. C. MUTHIAH", role: "CHAIRMAN, GOVERNING COUNCIL, SVCE", org: "SVCE", color: "var(--neon-pink)", initials: "AM", image: "/staffs/a c muthaiah.png" },
    { name: "SHRI. ASHWIN C. MUTHIAH", role: "CHAIRMAN, SPIC LTD / VICE CHAIRMAN, GOVERNING COUNCIL, SVCE", org: "SVCE", color: "var(--neon-blue)", initials: "ACM", image: "/staffs/ASHWIN C. MUTHIAH.png" }
  ],
  convenors: [
    { name: "DR. R. ANITHA", role: "CONVENOR", dept: "HOD/CSE", org: "SVCE", color: "var(--neon-lime)", initials: "RA", image: "/staffs/Anitha.png", linkedin: "https://www.linkedin.com/in/anithabalajim/" }
  ],
  coConvenors: [
    { name: "DR. N. RAJGANESH", role: "CO-CONVENOR", dept: "AHOD/CSE", org: "SVCE", color: "var(--neon-lime)", initials: "NR", image: "/staffs/Rajganesh.png", linkedin: "https://www.linkedin.com/in/dr-rajganesh-n-77b00a224/" }
  ],
  coordinators: [
    { name: "MS. R. K. KAPILA VANI", role: "ASST. PROFESSOR/CSE", org: "SVCE", color: "var(--neon-blue)", initials: "KV", image: "/staffs/Kapila Vani.png", linkedin: "https://www.linkedin.com/in/r-k-kapila-vani-b751b492/" },
    { name: "MR. P. SELVAMANI", role: "ASST. PROFESSOR/CSE", org: "SVCE", color: "var(--neon-pink)", initials: "PS", image: "/staffs/Selvamani.png", linkedin: "https://www.linkedin.com/in/selvamani-p-22051a1bb/" }
  ],
  coCoordinators: [
    { name: "MS. V. RADHA", role: "ASST. PROFESSOR/CSE", org: "SVCE", color: "var(--neon-purple)", initials: "VR", image: "/staffs/radha.webp", linkedin: "https://www.linkedin.com/in/radha-v-3186a8214/" },
    { name: "MR. V. KRISHNAMOORTHY", role: "ASST. PROFESSOR/CSE", org: "SVCE", color: "var(--neon-lime)", initials: "VK", image: "/staffs/Krishnamoorthy.png", linkedin: "https://www.linkedin.com/in/krishnamoorthy-v-1bb90a118/" }
  ],
  studentCoordinators: [
    { name: "ARUNIMA MURALITHARAN", role: "B.Tech. AD / IV YEAR", org: "SVCE", color: "var(--neon-blue)", initials: "AM", image: "/students/arunima.jpeg", linkedin: "https://www.linkedin.com/in/aru04/" },
    { name: "ADITHI KALYANARAMAN", role: "B.E CS / III YEAR", org: "SVCE", color: "var(--neon-pink)", initials: "AK", image: "/students/adithi.jpeg", linkedin: "https://www.linkedin.com/in/adithikalyanaraman/" },
    { name: "CLARINDA SUSAN", role: "B.Tech. AD / IV YEAR", org: "SVCE", color: "var(--neon-lime)", initials: "CS", image: "/students/susan.jpeg", linkedin: "https://www.linkedin.com/in/clarinda-susan-158898259/" },
    { name: "DEVANANTH V", role: "B.Tech. AD / III YEAR", org: "SVCE", color: "var(--neon-blue)", initials: "DV", image: "/students/deva.jpeg", linkedin: "https://www.linkedin.com/in/devananth-v-a231802bb/" },
    { name: "KEERTHANA G", role: "B.E. CS / III YEAR", org: "SVCE", color: "var(--neon-purple)", initials: "KG", image: "/students/keerthana.jpeg" },
    { name: "MADHUSHREE S N", role: "B.E. CS / III YEAR", org: "SVCE", color: "var(--neon-pink)", initials: "MN", image: "/students/madhu.jpeg", linkedin: "https://www.linkedin.com/in/madhushree-naga/" }
  ]
};

const MemberCard = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="member-card glass-panel"
    style={{ '--member-color': member.color }}
  >
    <div className="member-visual">
      <div className="avatar-frame">
        {member.image ? (
          <div className="avatar-image-container">
            <img src={member.image} alt={member.name} className="member-photo" />
          </div>
        ) : (
          <div className="avatar-initials" style={{ background: `linear-gradient(135deg, ${member.color}, #000)` }}>
            {member.initials}
          </div>
        )}
        <div className="avatar-ring" style={{ borderColor: member.color }}></div>
      </div>
    </div>

    <div className="member-details">
      <h3 className="member-name">{member.name}</h3>
      <div className="member-role-tag" style={{ background: `${member.color}15`, color: member.color, marginTop: '0.8rem' }}>
        {member.dept && <div className="member-dept-title">{member.dept}</div>}
        <div className="member-role-title">{member.role}</div>
      </div>
      {member.linkedin && (
        <div className="member-social pt-4">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" style={{ color: member.color }}>
            <Linkedin size={20} />
          </a>
        </div>
      )}
    </div>

    <div className="card-decor"></div>
  </motion.div>
);

const Committee = () => {
  return (
    <section id="committee" className="section-padding committee-viewport">
      <div className="container">
        <div className="committee-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="title-huge">
              ORGANIZING <span className="gradient-text">COMMITTEE</span>
            </h2>
            <p className="section-intro">
              The visionaries and academic leaders steering ICICRCET'26 towards global impact.
            </p>
          </motion.div>
        </div>

        <div className="committee-hierarchy">
          {/* Chief Patrons */}
          <div className="hierarchy-row">
            <div className="row-label">CHIEF PATRONS</div>
            <div className="members-grid triple">
              {committee.chiefPatrons.map((m, i) => <MemberCard key={i} member={m} />)}
            </div>
          </div>

          {/* Patron */}
          <div className="hierarchy-row">
            <div className="row-label">PATRON</div>
            <div className="members-grid single">
              {committee.patron.map((m, i) => <MemberCard key={i} member={m} />)}
            </div>
          </div>

          {/* Convenors */}
          <div className="hierarchy-row">
            <div className="row-label">CONVENOR</div>
            <div className="members-grid single">
              {committee.convenors.map((m, i) => <MemberCard key={i} member={m} />)}
            </div>
          </div>

          {/* Co-Convenors */}
          <div className="hierarchy-row">
            <div className="row-label">CO-CONVENOR</div>
            <div className="members-grid single">
              {committee.coConvenors.map((m, i) => <MemberCard key={i} member={m} />)}
            </div>
          </div>

          {/* Coordinators */}
          <div className="hierarchy-row">
            <div className="row-label">COORDINATORS</div>
            <div className="members-grid dual">
              {committee.coordinators.map((m, i) => <MemberCard key={i} member={m} />)}
            </div>
          </div>

          {/* Co-Coordinators */}
          <div className="hierarchy-row">
            <div className="row-label">CO-COORDINATORS</div>
            <div className="members-grid dual">
              {committee.coCoordinators.map((m, i) => <MemberCard key={i} member={m} />)}
            </div>
          </div>

          {/* Student Coordinators */}
          <div className="hierarchy-row">
            <div className="row-label">STUDENT COORDINATORS </div>
            <div className="members-grid quad">
              {committee.studentCoordinators.map((m, i) => <MemberCard key={i} member={m} />)}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .committee-viewport {
          background: radial-gradient(circle at 10% 90%, rgba(255, 0, 128, 0.05) 0%, transparent 40%);
        }

        .committee-header {
          text-align: center;
          margin-bottom: 8rem;
        }

        .section-intro {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-top: 2rem;
          font-weight: 500;
        }

        .committee-hierarchy {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        .row-label {
          font-weight: 900;
          letter-spacing: 0.6em;
          color: white;
          font-size: 1.6rem;
          text-align: center;
          margin-bottom: 5rem;
          position: relative;
          text-shadow: 0 0 25px rgba(0, 234, 255, 0.6);
        }

        .row-label::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: var(--glass-border);
        }

        .members-grid {
          display: grid;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .dual { grid-template-columns: repeat(2, 1fr); max-width: 1000px; }
        .triple { grid-template-columns: repeat(2, 1fr); max-width: 1000px; place-items: center; }
        .single { grid-template-columns: 1fr; max-width: 500px; }
        .quad { grid-template-columns: repeat(2, 1fr); }

        @media (min-width: 900px) {
          .quad { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1200px) {
          .quad { grid-template-columns: repeat(4, 1fr); }
        }

        .member-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          transition: all 0.5s var(--ease-expo);
          overflow: hidden;
        }

        .member-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--member-color);
        }

        .member-visual {
          margin-bottom: 2rem;
        }

        .avatar-frame {
          position: relative;
          width: 130px;
          height: 130px;
        }

        .avatar-initials {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 2rem;
          color: white;
          position: relative;
          z-index: 2;
        }

        .avatar-image-container {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          z-index: 2;
          background: #111;
        }

        .member-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.5s ease;
        }

        .member-card:hover .member-photo {
          transform: scale(1.1);
        }

        .avatar-ring {
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          border: 1px solid;
          border-radius: 50%;
          opacity: 0.3;
          transition: all 0.3s ease;
        }

        .member-card:hover .avatar-ring {
          transform: scale(1.1);
          opacity: 1;
        }

        .verified-badge {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 24px;
          height: 24px;
          background: white;
          color: black;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          border: 2px solid var(--dark-bg);
        }

        .member-role-tag {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 0.6rem 1.4rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 1.2;
          text-align: center;
        }

        .member-dept-title {
          font-size: 0.85rem;
          font-weight: 900;
          color: white;
        }

        .member-role-title {
          font-size: 0.7rem;
          opacity: 0.9;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .member-name {
          font-size: clamp(0.9rem, 1.4vw, 1.15rem);
          font-weight: 800;
          margin-bottom: 0.8rem;
          line-height: 1.2;
          white-space: nowrap;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: -0.02em;
        }

        .member-org-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .sep-dot {
          width: 3px;
          height: 3px;
          background: var(--glass-border);
          border-radius: 50%;
        }

        .member-actions {
          display: flex;
          gap: 1.2rem;
        }

        .social-icon-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .social-icon-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
          filter: brightness(1.2);
        }

        .action-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          color: white;
          background: var(--member-color);
          transform: scale(1.1);
        }

        .card-decor {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 60px;
          height: 60px;
          background: var(--member-color);
          filter: blur(40px);
          opacity: 0.05;
          pointer-events: none;
        }

        @media (max-width: 968px) {
          .dual, .quad, .triple { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 600px) {
          .dual, .quad, .single { grid-template-columns: 1fr; }
          .member-card { padding: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Committee;
