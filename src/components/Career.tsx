import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Fullstack Developer Virtual Internship</h4>
                <h5>EduSkills Academy (Supported by AICTE, Ministry of Education)</h5>
              </div>
              <h3>Jan 2026 - Mar 2026</h3>
            </div>
            <p>
              Demonstrated proficiency in HTML, CSS & Bootstrap, JavaScript, jQuery, Python, Django Framework, MySQL, and Git & Version Control. Developed 3 full-stack web applications using Django framework with MySQL database integration. Implemented responsive user interfaces using Bootstrap and JavaScript for enhanced user experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineering Virtual Internship</h4>
                <h5>EduSkills Academy (Curriculum by AWS Academy, Supported by AICTE)</h5>
              </div>
              <h3>Oct 2025 - Dec 2025</h3>
            </div>
            <p>
              Achieved Outstanding grade (Grade O: 90-100) demonstrating exceptional performance throughout the program. Worked with AWS data engineering tools and services including S3, Redshift, and Glue. Designed and implemented data pipelines for processing and analyzing large datasets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Full Stack Virtual Internship</h4>
                <h5>EduSkills Academy</h5>
              </div>
              <h3>Aug 2025</h3>
            </div>
            <p>
              Gained hands-on experience with core Java, Spring Boot, RESTful APIs, HTML5, CSS3, JavaScript, and MySQL database integration. Built RESTful APIs using Spring Boot framework following industry best practices. Developed 2 web applications with Java backend and responsive frontend interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
