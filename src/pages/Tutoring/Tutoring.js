import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Tutoring1 from "../../assets/Tutoring.svg";
import discordIcon from "../../assets/discordIcon.svg";
import tutors from "../../tutors";
import Tutor from "../../components/Tutors/Tutor";
import { Col, Container, Row } from "react-bootstrap";
import "./Tutoring.css";
import Carousel, {
  slidesToShowPlugin,
  slidesToScrollPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Tutoring = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      <section className="container-left">
        <Row>
          <Col md="6" className="order-md-2">
            <img src={Tutoring1} alt="Tutoring 2 svg" className="img-fluid" />
          </Col>
          <Col md="6">
            <div className="tutoring-info-group">
              <div className="order-md-0" className="tutoring">
                <h1 className="tutoring-title">Tutoring at CougarCS</h1>
                <p className="tutoring-description">
                  CougarCS offers weekly tutoring time slots for many of our
                  degree's toughest classes. If you need help in your
                  coursework, please do not hesitate to reach out to our
                  tutoring team! Email{" "}
                  <a href="mailto:tutoring@CougarCS.com?subject=CougarCS Tutor Application">
                    tutoring@CougarCS.com
                  </a>{" "}
                  with your course code (COSC XXXX) in the subject line and our
                  tutors will contact you within 24 - 48 hours.
                </p>
              </div>
              <div className="tutor-buttons">
                <div>
                  <Button
                    variant=""
                    target="_blank"
                    className="discord-button  "
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://discord.gg/eXMqUz", "_blank");
                    }}
                  >
                    <img src={discordIcon} className="discord-icon mr-2" />
                    Join Discord
                  </Button>
                  <p className="tutoring-discord-description">
                    Tutoring is provided via discord
                  </p>
                </div>
                <Button
                  variant="outline-danger"
                  className="tutor-button"
                  href="mailto:tutoring@CougarCS.com?subject=CougarCS Tutor Application"
                >
                  Become a Tutor
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <Container fluid>
        <div className="tutoring-title-middle">
          <h3>Tutoring Available For</h3>
        </div>
        <div className="course-list">
          <div className="course">COSC 1360</div>
          <div className="course">COSC 1430</div>
          <div className="course">COSC 2430</div>
          <div className="course">COSC 2440</div>
          <div className="course">COSC 3380</div>
        </div>

        <h3 className="tutoring-title-middle">
          Tutoring is Possible Because of
        </h3>
        <Row>
          {isDesktop ? (
            <div className="tutoring-grid">
              {tutors.map((tutor) => (
                <Tutor tutors={tutor} key={tutor.id} />
              ))}
            </div>
          ) : (
            <Carousel>
              {tutors.map((tutor) => (
                <div className="carousel-card">
                  <Tutor tutors={tutor} key={tutor.id} />
                </div>
              ))}
            </Carousel>
          )}
        </Row>
        <div className="text-center">
          <h2 className="tutor-join-title">
            Are you interested in tutoring for CougarCS?
          </h2>
          <Button
            variant="outline-danger"
            className="tutor-join-button-bottom"
            href="mailto:tutoring@CougarCS.com?subject=CougarCS Tutor Application"
          >
            Become a Tutor
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Tutoring;
