// import React from 'react'
import "./About.css";
import x_dark from "../../assets/xdark.png";
import phone_dark from "../../assets/phonedark.png";
import email_dark from "../../assets/emaildark.png";
import linkedin_dark from "../../assets/linkedindark.png";
import SaraLogo from "../../assets/SaraLogo.png";
import java from "../../assets/java.png";
import c from "../../assets/c.png";
import python from "../../assets/py.png";
import htmlcss from "../../assets/htmlcss.png";
import dart from "../../assets/dart.png";
import javascript from "../../assets/js.png";
import linux from "../../assets/pngimg.com - linux_PNG29 1.png";
import PT from "../../assets/pt.png";
import MOS from "../../assets/ms.png";
import software from "../../assets/software.png";
import soft1 from "../../assets/soft1.png";
import soft2 from "../../assets/soft2.png";
import edu from "../../assets/edu.png";
import stc from "../../assets/stc.png";
import efhamni from "../../assets/efhamni.png";
import stcmisk from "../../assets/stcmisk.png";
import cisco from "../../assets/Cisco.png";
import gdsc from "../../assets/GDSC.png";
import udemy from "../../assets/udemy.png";

const About = () => {
  return (
    <div className={`body`}>
      <div className={`sara`}>
        <div className="typing">
          <p className="typing1">Hi, I'm Sara.</p>
          <p className="typing2">Penetration Tester</p>
        </div>
        <div className="saralogo">
          <img src={SaraLogo} />
        </div>
      </div>

      <div className="contact">
        <div className={`resumesquare`}>
          <a
            className="CV"
            href="https://drive.google.com/file/d/10tJ6LLArQy0KEfig2nI6JXCIb8W8L7uB/view?usp=sharing"
            target="_blank"
          >
            View Resume
          </a>
        </div>

        <div className={`contactsquare`}>
          <table className="contacttable">
            <tbody>
              <tr>
                <th>
                  <a href="tel:+966506220509">
                    <img src={phone_dark} alt="" />
                  </a>
                </th>
                <th>
                  <a href="mailto:sheariyasara@gmail.com">
                    <img src={email_dark} alt="" />
                  </a>
                </th>
                <th>
                  <a href="https://x.com/sarasheariya/" target="_blank">
                    <img src={x_dark} alt="" />
                  </a>
                </th>
                <th>
                  <a
                    href="https://www.linkedin.com/in/sara-sheariya-623b39221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                  >
                    <img src={linkedin_dark} alt="" />
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="custom-shape-divider-top-1753192864">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#637d64" />
              <stop offset="0%" stop-color="#374638ff" />
              <stop offset="50%" stop-color="#232c24ff" />
              <stop offset="100%" stop-color="#060E0D" />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#gradient)"
          ></path>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#gradient)"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="url(#gradient)"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            opacity=".5"
            fill="url(#gradient)"
          ></path>
        </svg>
      </div>

      <h1 className={`Title`}>About me</h1>
      <div className={`aboutsquare`}>
        A computer science graduate, I have experience in software development,
        software engineering, interface design, programming, I have a good
        background on cybersecurity, Penetration testing, and networking, but I
        look forward to gaining more experience and adding talent other than
        problem solving, working under pressure, and fast learning that I have.
      </div>

      <h1 className={`Title`}>Skills</h1>
      <div className={`Skillsquare`}>
        <div className="row">
          <div className="column">
            <div className="skills">
              <img src={java} className="skillimg" />
              <p className="skillname">Java</p>
            </div>
            <div className="skills">
              <img src={c} className="skillimg" />
              <p className="skillname">C++</p>
            </div>
            <div className="skills">
              <img src={python} className="skillimg" />
              <p className="skillname">Python</p>
            </div>
          </div>
          <div className="column">
            <div className="skills">
              <img src={htmlcss} className="skillimg" />
              <p className="skillname">HTML, Css</p>
            </div>
            <div className="skills">
              <img src={dart} className="skillimg" />
              <p className="skillname">Dart</p>
            </div>
            <div className="skills">
              <img src={javascript} className="skillimg" />
              <p className="skillname">JavaScript</p>
            </div>
          </div>
          <div className="column">
            <div className="skills">
              <img src={linux} className="skillimg" />
              <p className="skillname">Linux</p>
            </div>
            <div className="skills">
              <img src={PT} className="skillimg" />
              <p className="skillname">Penetration Testing</p>
            </div>
            <div className="skills">
              <img src={MOS} className="skillimg" />
              <p className="skillname">Dealing with Microsoft Office</p>
            </div>
          </div>
          <div className="column">
            <div className="skills">
              <img src={software} className="skillimg" />
              <p className="skillname">Software Engineers</p>
            </div>
            <div className="skills">
              <img src={soft1} className="skillimg" />
              <p className="skillname">Leadership, Problem solving </p>
            </div>
            <div className="skills">
              <img src={soft2} className="skillimg" />
              <p className="skillname"> Hard working, and Fast learning</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className={`Title`}>Education</h1>
      <div className={`edu`}>
        <div className="edu2">
          <div className="eduname">
            Bachelor's degree in Computer Science
            <br />
            GPA : 3.85 out of 4.
          </div>
          <div>
            <img className="eduimg" src={edu} />
          </div>
        </div>
      </div>

      <h1 className={`Title`}>Experiences</h1>
      <div className={`expsquare`}>
        <div className="row">
          <div className="column">
            <div className="exp">
              <p className="expname">
                <br />
                Cooperative Training
              </p>
              <img src={stc} className="expimg" />
              <p className="expname">
                Creating Database by ( Access ), developed a web application by
                ( HTML | CSS | PHP ) and link it with the database in the cloud.
              </p>
            </div>
            <div className="exp">
              <p className="expname">
                <br />
                Front-End Developer
              </p>
              <img src={efhamni} className="expimg" />
              <p className="expname">
                Developed an application by Flutter ( DART language ) for
                autistic children to help them to communicate with other.
              </p>
            </div>
            <div className="exp">
              <p className="expname">
                Cybersecurity incident response analysis
              </p>
              <img src={stcmisk} className="expimg" />
              <p className="expname">
                Dealing with security threats and issuing cyber accident
                reports, and applying appropriate procedures to respond to cyber
                incidents.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className={`Title`}>Courses</h1>
      <div className={`cousquare`}>
        <div className="row">
          <div className="column">
            <div className="exp">
              <p className="couname">Network Support and Security</p>
              <img src={cisco} className="couimg" />
              <p className="couname">CISCO Networking Academy</p>
            </div>
            <div className="exp">
              <p className="couname">Networking Basics</p>
              <img src={cisco} className="couimg" />
              <p className="couname">CISCO Networking Academy</p>
            </div>
          </div>
          <div className="column">
            <div className="exp">
              <p className="couname">AI Bootcamp</p>
              <img src={gdsc} className="couimg" />
              <p className="couname">GOOGLE DEVELOPER STUDENT CLUB</p>
            </div>
            <div className="exp">
              <p className="couname">Introduction to Cybersecurity</p>
              <img src={cisco} className="couimg" />
              <p className="couname">CISCO Networking Academy</p>
            </div>
          </div>
          <div className="column">
            <div className="exp">
              <p className="couname">Learn ethical hacking from scratch</p>
              <img src={udemy} className="couimg" />
              <p className="couname">Udemy</p>
            </div>
            <div className="exp">
              <p className="couname">Cyber security bootcamp</p>
              <img src={gdsc} className="couimg" />
              <p className="couname">GOOGLE DEVELOPER STUDENT CLUB</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className={`Title`}>Languages</h1>
      <div className={`edu`}>
        <div className="languagessquare">
          <table className="table">
            <tbody>
              <tr>
                <th>Arabic</th>
                <th>English</th>
              </tr>
            </tbody>
          </table>
          <a
            className="STEP"
            href="https://drive.google.com/file/d/1ua6uQUy5pVo5dU-WXxgl_PUI1Y3GjXde/view?usp=sharing"
            target="_blank"
          >
            Click to see STEP test result
          </a>
        </div>
      </div>

      <div className={`footer`}>
        <h1>
          This page is made by Sara Sheariya, using Vite & React JS.
          <br /> Copyright &copy; Sara Sheariya
        </h1>
      </div>
    </div>
  );
};

export default About;
