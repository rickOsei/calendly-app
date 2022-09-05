import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";

function Individuals() {
  return (
    <>
      <main>
        <Container className="one">
          <Row className="top">
            <Col>
              <h1>
                The genius way <br /> to work{" "}
                <span className="gold">better</span>
              </h1>
              <p>
                Calendly makes it easy to work smarter when you’re <br />{" "}
                working solo. Meetings, sessions, and appointments <br /> become
                more efficient ways to achieve success and <br /> accomplish
                goals.
              </p>
              <button className="btn" value="signup">
                Sign up for free
              </button>
            </Col>

            <Col className="top_img">
              <img
                src="/individuals/images/Calendly-Individuals-Hero.png.webp"
                className="img-fluid laptop"
                alt="individual"
              />
            </Col>
          </Row>
        </Container>

        <Container className=" two middle">
          <Row>
            <Col>
              <img
                src="/individuals/images/botpic4.png"
                className="img-fluid laptop"
                alt="botpic"
              />
            </Col>

            <Col>
              <p className="caption">A CURATED CALENDAR</p>
              <h2>Book up efficiently</h2>
              <p>
                When invitees select a meeting slot from your schedule, they{" "}
                <br />
                only see the times you’re available, and only the length and{" "}
                <br /> type of meeting you want to have. Your schedule fills up
                <br /> efficiently, and everyone avoids excess email exchanges.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="three bottom">
          <Row>
            <Col className="bottom_text">
              <p className="caption">AUTOMATED NOTIFICATIONS N FOLLOW-UPS</p>
              <h2>
                Work like you have a <br /> personal assistant
              </h2>
              <p>
                Because Calendly automates administrative tasks like <br />{" "}
                sending reminder emails and follow-ups, you can focus on <br />{" "}
                the work that builds your business and brings customers <br />{" "}
                back for more.
              </p>
            </Col>

            <Col>
              <img
                src="/individuals/images/midpic.png"
                className="img-fluid laptop"
                alt="midpic"
              />
            </Col>
          </Row>
        </Container>
      </main>

      <section className="banners">
        <Container fluid>
          <Row className=" banner">
            <Col>
              <p>
                Find just-right plans <br /> for individuals and <br /> small
                teams
              </p>
              <button className="btn_banner" value="plans">
                See our plans
              </button>
            </Col>

            <Col></Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Individuals;
