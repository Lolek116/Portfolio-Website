import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Face Recognition Attendance System</h4>
                  <p>Computer Vision & Machine Learning</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, OpenCV, dlib, Tkinter, LBPH Algorithm, CSV Reports</p>
              <p className="work-description">Built a real-time attendance system with face dataset collection, LBPH-based model training, and automated CSV attendance reports.</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Face Recognition Attendance System" />
          </div>
          
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>CPU Job Scheduling Simulator</h4>
                  <p>Algorithm Visualization</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Algorithm Implementation, Data Visualization</p>
              <p className="work-description">Developed a Python simulator implementing multiple CPU job scheduling algorithms with visualization of scheduling outcomes.</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="CPU Job Scheduling Simulator" />
          </div>
          
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Portfolio Website</h4>
                  <p>Web Development & 3D Interactions</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, Three.js, GSAP, TypeScript, 3D Animations</p>
              <p className="work-description">Designed and built a personal portfolio site featuring 3D interactions to showcase projects and technical work.</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Portfolio Website" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
