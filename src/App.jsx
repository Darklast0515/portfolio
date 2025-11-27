import React from "react";
import { useEffect, useRef } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa"; 
import { SiVite } from "react-icons/si"; 



const projects = [
  {
    title: "Court Booking Management System",
    bg:"#2c3e50",
    desc: "A full-stack court reservation system developed individually during my university studies. It allows users to book courts, manage reservations, and check real-time availability.\nThe system also includes secure user authentication, email verification, and a user-friendly dashboard.",
    images: ["/court1.png", "/court2.png","/court3.png","/court4.png"],
  },
  {
    title: "CRM Mobile-based Software System",
    bg:"#1f2d3a",
    desc: "A final year project where I contribute and coordinated the development based on a real client's requirements. The CRM system helps a fertilizer company manage large-scale customer and sales data.\nFeatures include data creation and management, sales trend visualization, forecasting and database import.\n(Some screenshots are censored due to client data privacy.)",
    images: ["/crm1.png","/crm2.png"],
  },
  {
    title: "IoT Project - Individual",
    bg:"#2d2d2d",
    desc: "An individual IoT system built from scratch to automatically control a fan based on temperature readings.Sensor data is stored locally and displayed through a Raspberry Pi virtual machine. When the temperature exceeds the threshold, the fan activates automatically.\nComponents: Arduino Uno, Raspberry Pi VM, DHT11, L298N, DC motor, LCD I2C, potentiometer.",
    images: ["/iot_indi.jpg","/iot_indi2.jpg"],
  },
  {
    title: "IoT Project - Group",
     bg:"#111827",
    desc: "As the team leader, I guided the development of a fully functional smart home prototype. Each section of the house reacts automatically based on sensor inputs and user actions.\nAll collected data is stored in PostgreSQL and displayed on ThingsBoard via MQTT. Users can also remotely control sensors and devices using RPC commands.",
    images: ["/iot_grp.jpg","/iot_grp2.jpg"],
  },
   {
    title: "Anime Finder - Custom",
     bg:"#1a1a1a",
    desc: "Developed a custom application with API connecting to capable of retrieving anime titles and related information from pasted images.\nThis implementation was designed to experiment with API integration and functionality.",
    images: ["/anime_find.png"],
  }
];

function App() {
  const sectionRefs = useRef([]);

    useEffect(() => {
    document.body.style.backgroundColor = projects[0].bg;
    document.body.style.transition = "background 1s ease";

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      sectionRefs.current.forEach((ref, i) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const offsetTop = rect.top;

        if (offsetTop <= windowHeight * 0.4 && offsetTop >= -windowHeight * 0.4) {
          document.body.style.backgroundColor = projects[i].bg;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="main-bg text-white min-vh-100">
    <section className="py-5">
      <Container className="px-4 intro-box">
        <h2 className="fw-bold mb-3">About Me</h2>
        <p style={{ whiteSpace: "pre-line" }}>
          My name is Daglas, currently living in Subang Jaya area. Im proficient 
          in English, Chinese and Malay. I finished my study at November 2025 so my internship should able to start at December 
          2025 or January 2026 until for minimum of 3 month(14 weeks).
          
          However, I am full stack developer and currently seeking an internship for web
          development, mobile-based web development, software application,
          or IT support. have a strong interest in modern web applications and am eager to contribute to meaningful projects in this field.
          Furthermore,  I also possess a fundamental knowledge in networking as my extra/elective coursework.
        </p>
        <div className="intro-icons mt-3 d-flex justify-content-center">
        <a href="http://www.linkedin.com/in/daglas-walter-1a1550388" target="_blank" rel="noopener noreferrer" style={{ marginRight: "20px", color: "white" }}>
          <FaLinkedin size={36} />
        </a>
       
</div>
      </Container>
    </section>

      {/* Header */}
      <header className="text-center py-5">
        <h1 className="fw-bold">My Projects</h1>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <Container className="px-4 project-container">

          {projects.map((p, i) => (
            <Row
              key={i}
              ref={el => (sectionRefs.current[i] = el)}
              className="align-items-center project-row project-box"
              style={{ minHeight: "100vh" }}
            >


              {/* Left: Carousel */}
              <Col md={6} className="mb-4 mb-md-0">
                <Carousel className="shadow-lg rounded overflow-hidden">
                  {p.images.map((img, idx) => (
                    <Carousel.Item key={idx}>
                      <img
                        src={img}
                        className="d-block w-100 project-img"
                        alt={`${p.title} ${idx + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>

              {/* Right: Description */}
              <Col md={6}>
                <h2 className="fw-bold">{p.title}</h2>
                <p
                  className="project-desc"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {p.desc}
                </p>
              </Col>

            </Row>
          ))}

        </Container>
      </section>

      <div className="footer text-center py-3 mt-5">
      <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>
        Made by React, JSX, Vite, CSS, React-Bootstrap, Hooks.
      </p>
       <div className="footer-logos mt-2 d-flex justify-content-center align-items-center gap-3">
      <FaReact size={36} color="#61dafb" />  
      <SiVite size={36} color="#646cff" />   
    </div>
    </div>

    </div>
  );
}

export default App;
