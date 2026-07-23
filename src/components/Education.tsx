import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section section-container">
      <div className="education-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="education-info">
          <div className="education-timeline">
            <div className="education-dot"></div>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>B.Tech – Computer Science Engineering</h4>
                <h5>DVR & Dr. HS MIC College of Technology, Kanchikacherla</h5>
              </div>
              <h3>2023 – 2027</h3>
            </div>
            <p>
              CGPA: 7.8 | Jawaharlal Nehru Technological University (JNTU)
            </p>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>Intermediate (MPC)</h4>
                <h5>Narayana Junior College, Vijayawada</h5>
              </div>
              <h3>2021 – 2023</h3>
            </div>
            <p>
              Board of Intermediate Education, Andhra Pradesh | Percentage: 80%
            </p>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>SSC</h4>
                <h5>Bhashyam Public School, Vijayawada</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Board of Secondary Education, Andhra Pradesh | Aggregate: 99%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
