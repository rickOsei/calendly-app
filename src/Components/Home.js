import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Home() {
  return (
    <>
      <main>
        <Container>
          <Row className="main">
            <Col className="content">
              <h1>
                Easy <br /> scheduling <br /> <span class="gold">ahead</span>
              </h1>
              <p class="maintext">
                Hmm is your hub for scheduling meetings,
                <br />
                professionally and efficiently, eliminatng the <br /> hassle of
                emails so you can get back to your work.
              </p>
              <input type="text" for="signup" placeholder="Enter your email" />
              <label id="signup">
                <button value="signup">Sign Up</button>
              </label>
              <p className="caption">
                Create your free account. No credit card required{" "}
              </p>
            </Col>

            <Col className="images">
              <img
                src="/images/calendly11 copy.png"
                class="img-fluid laptop"
                alt="Laptop with Calendar"
              />
              <img
                src="/images/download5.jpg"
                class="img-fluid dog"
                alt="Black beutiful dog"
              />
            </Col>
          </Row>
        </Container>
      </main>

      <section>
        <Container fluid>
          <div className="home-banner_brands">
            <Row>
              <Col>
                <div className="home-banner">
                  <p>
                    Simplified scheduling for more than <br />
                    <span className="gold">10,000,000</span> users worldwide
                  </p>
                </div>
              </Col>
            </Row>
            <div className="row home-brands">
              <Col>
                <img
                  src="/images/banner/compass-logo-vector1.png"
                  alt="compass"
                  className="compass"
                />
              </Col>

              <Col>
                <img
                  src="/images/banner/dropbox-logo1.png"
                  alt="dropbox"
                  className="dropbox"
                />
              </Col>

              <Col>
                <img
                  src="/images/banner/ebay1.png"
                  alt="ebay"
                  className="ebay"
                />
              </Col>

              <Col>
                <img
                  src="/images/banner/laz2.png"
                  alt="lazboy"
                  className="lazboy"
                />
              </Col>

              <Col>
                <img
                  src="/images/banner/twilio.png"
                  alt="twilio"
                  className="twilio"
                />
              </Col>
            </div>
          </div>
        </Container>
      </section>

      <section className="bottom">
        <Container className="card_zone">
          <h1>We make it easy to get started</h1>
          <Row>
            <Col>
              <Card className="card one" style={{ width: "18rem" }}>
                <Card.Body className="card-body">
                  <Card.Img
                    variant="top"
                    src="/images/checked1.png"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Card.Title className="card-title">
                    Create simple rules
                  </Card.Title>

                  <Card.Text className="card-text">
                    Let Calendly know your availability preferences and it’ll do
                    the work for you.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card two" style={{ width: "18rem" }}>
                <Card.Body className="card-body">
                  <Card.Img
                    variant="top"
                    src="/images/checked1.png"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Card.Title className="card-title">
                    Share your link
                  </Card.Title>

                  <Card.Text className="card-text">
                    Send guests your Calendly link or embed it on your website.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="card three" style={{ width: "18rem" }}>
                <Card.Body className="card-body">
                  <Card.Img
                    variant="top"
                    src="/images/checked1.png"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Card.Title className="card-title">Get booked</Card.Title>

                  <Card.Text className="card-text">
                    They pick a time and the event is added to your calendar.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
