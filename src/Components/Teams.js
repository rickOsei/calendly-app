import React from "react";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Teams() {
  return (
    <>
      <main>
        <Container>
          <Row className=" top">
            <Col className=" top_text">
              <h1>
                <span className="gold">Power up </span> your <br /> teams{" "}
              </h1>
              <p>
                Calendly gives you control over team scheduling with a <br />{" "}
                standardized, scalable process. It’s secure, easy to <br />
                manage, and integrates with your team's <br />
                favorite tools, so you can get everyone working as <br />{" "}
                efficiently and effectively as possible.
              </p>
              <button className="btn_start" value="start">
                Start for free
              </button>
              <button className="btn_sales" value="sales_contact">
                Contact Sales
              </button>
            </Col>

            <Col className=" top_img">
              <img
                src="/teams/images/Calendly-Teams-Hero.png.webp"
                className="img-fluid laptop"
                alt="Rsponsive"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className=" mid_title">
            <Col>
              <h1>
                Streamline tasks, extend team <br /> reach
              </h1>
            </Col>
          </Row>

          <Row className=" middle">
            <Col lg="5">
              <img
                src="/individuals/images/botpic4.png"
                className="img-fluid laptop"
                alt="Rsponsive"
              />
            </Col>

            <Col lg="7" className=" middle_text">
              <p className="caption">AUTOMATED ASSIGNMENT</p>
              <h2>
                Control how your team gets <br />
                booked
              </h2>
              <p>
                With Calendly, you can offer sessions that are a few minutes{" "}
                <br /> or a few hours, for one invitee or a group. Automated
                round- <br /> robin, first-available, or geography-based
                assignments let
                <br /> you easily divvy up meetings in any way that works for
                your <br /> team members.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="card_zone">
          <Row>
            <div className="col-12">
              <p className="caption">SOLUTIONS</p>
            </div>
          </Row>

          <Row>
            <div className="col-12">
              <h2 className="card_title">
                The right Calendly for the work you do
              </h2>
            </div>
          </Row>

          <Row className="main_card">
            <Col lg="3">
              <div
                className="card teams-card teams-one"
                style={{ width: "18rem" }}
              >
                <img
                  className="card-img-top"
                  src="/individuals/images/pexels-buro-millennial-1438081 (3).jpg"
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Sales</h5>
                  <p className="card-text">Get to your best leads faster.</p>
                  <Link to="/">Learn more ></Link>
                </div>
              </div>
            </Col>

            <Col lg="3">
              <div
                className="card teams-card teams-two"
                style={{ width: "18rem" }}
              >
                <img
                  className="card-img-top"
                  src="/individuals/images/021021_Calendly_Lifestyle_Coffee_Shop_Setting-4775 (1).jpg"
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Recruiting</h5>
                  <p className="card-text">Less emailing, more closing</p>
                  <Link to="/">Learn more ></Link>
                </div>
              </div>
            </Col>

            <Col lg="3">
              <div
                className="card teams-card teams-three"
                style={{ width: "18rem" }}
              >
                <img
                  className="card-img-top"
                  src="/individuals/images/jason-goodman-bzqU01v-G54-unsplash.jpg"
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Customer success</h5>
                  <p className="card-text">
                    Connect with customers when it matters
                  </p>
                  <Link to="/">Learn more ></Link>
                </div>
              </div>
            </Col>

            <Col lg="3">
              <div
                className="card teams-card teams-four"
                style={{ width: "18rem" }}
              >
                <img
                  className="card-img-top"
                  src="/individuals/images/pexels-andrea-piacquadio-3769021 (2).jpg"
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Education</h5>
                  <p className="card-text">Boost student success</p>
                  <Link to="/">Learn more ></Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Teams;
