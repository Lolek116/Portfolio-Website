import "./styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills-section section-container">
      <div className="skills-container">
        <h2>
          Technical <span>Skills</span>
        </h2>
        
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <div className="skills-grid">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">C</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">SQL</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>Web Technologies</h3>
          <div className="skills-grid">
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">Bootstrap</span>
            <span className="skill-tag">React</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>Frameworks</h3>
          <div className="skills-grid">
            <span className="skill-tag">Django</span>
            <span className="skill-tag">Flask</span>
            <span className="skill-tag">Spring Boot</span>
            <span className="skill-tag">MERN Stack</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>Cloud & DevOps</h3>
          <div className="skills-grid">
            <span className="skill-tag">AWS Data Engineering</span>
            <span className="skill-tag">AWS Generative AI</span>
            <span className="skill-tag">AWS Cloud Practitioner</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>Databases</h3>
          <div className="skills-grid">
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">SQLite</span>
            <span className="skill-tag">MongoDB</span>
          </div>
        </div>

        <div className="certifications-section">
          <h2>
            <span>Certifications</span>
          </h2>
          
          <div className="cert-category">
            <h3>AWS Certifications</h3>
            <ul className="cert-list">
              <li>AWS Academy Graduate – Data Engineering – AWS Academy (Dec 2025)</li>
              <li>AWS Academy Graduate – Generative AI Foundations – AWS Academy (Feb 2026)</li>
              <li>AWS Cloud Practitioner Essentials – AWS Training & Certification (Jun 2025)</li>
            </ul>
          </div>

          <div className="cert-category">
            <h3>NPTEL Elite Certifications (IIT Kharagpur)</h3>
            <ul className="cert-list">
              <li>Cloud Computing – Elite – NPTEL / IIT Kharagpur (Score: 60%) (Jul–Oct 2025)</li>
            </ul>
          </div>

          <div className="cert-category">
            <h3>Hackerrank Certifications</h3>
            <ul className="cert-list">
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="cert-category">
            <h3>Skill India / BDPS Certifications</h3>
            <ul className="cert-list">
              <li>Programming with C and Data Structures (Grade B+) – BDPS / Skill India – NSDC (Jul 2025)</li>
              <li>Programming with Python (Grade B+) – BDPS / Skill India – NSDC (Jun 2025)</li>
            </ul>
          </div>

          <div className="cert-category">
            <h3>Additional Certifications</h3>
            <ul className="cert-list">
              <li>Blockchain Technology Virtual Internship – EduSkills Academy</li>
              <li>UiPath Automation Implementation Methodology Fundamentals – UiPath</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
