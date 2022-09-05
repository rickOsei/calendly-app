import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";

function Enterprises() {
  return (
    <>
      <main>
        <Container className="ent-one">
          <Row className="ent-top">
            <Col className=" ent-top_text">
              <h1>
                <span className="gold">Way more</span> than a <br /> scheduling
                link
              </h1>
              <p>
                Standardize on the #1 scheduling platform and <br /> deliver the
                power of Calendly across your entire <br /> organization.
              </p>
              <button className="btn" value="Sales">
                Contact Sales
              </button>
            </Col>
          </Row>
        </Container>
      </main>
      <section>
        <Container fluid className=" banner_brands">
          <Row>
            <Col className=" banner">
              <p>
                Trusted by more than 50,000 of the <br /> world’s leading
                organizations
              </p>
            </Col>
          </Row>

          <Row className=" brands">
            <Col lg="2">
              <img
                src="/images/banner/dropbox-logo1.png"
                alt="dropbox"
                className="dropbox"
              />
            </Col>

            <Col lg="2">
              <img src="/images/banner/ebay1.png" alt="ebay" className="ebay" />
            </Col>

            <Col lg="2">
              <img
                src="/enterprise/images/visa copy.png"
                alt="visa"
                className="visa"
              />
            </Col>

            <Col lg="2">
              <img
                src="/enterprise/images/Lyft-Logo.wine copy.png"
                alt="lyft"
                className="lyft"
              />
            </Col>

            <Col lg="2">
              <img
                src="/enterprise/images/loreal.png"
                alt="l'oreal"
                className="loreal"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ent-card_zone">
        <Container>
          <Row>
            <Col lg="3">
              <div className="ent-card ent-one" style={{ width: "17rem" }}>
                <h5 className="card-title">Sales</h5>
                <img
                  className="card-img-top"
                  src="/enterprise/images/card1.png"
                  alt="Card cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Convert more leads and prospects into meetings and revenue.
                    Easily book demos and customer calls without the back and
                    forth.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="3">
              <div className="ent-card ent-two" style={{ width: "17rem" }}>
                <h5 className="card-title">Costumer Service</h5>
                <img
                  className="card-img-top"
                  src="/enterprise/images/card2.png"
                  alt="Card cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Deliver better support interactions and customer
                    consultations. Stay connected with automated reminders and
                    follow-ups.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="3">
              <div className="ent-card ent-three" style={{ width: "17rem" }}>
                <h5 className="card-title">Recruiting</h5>
                <img
                  className="card-img-top"
                  src="/enterprise/images/card3.png"
                  alt="Card cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Fill your candidate pipeline and book more interviews and
                    recruiter screens with easy, standardized scheduling.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="card_button">
              <button className="btn_card" value="Learn">
                Learn more
              </button>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Enterprises;
