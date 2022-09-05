import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container className="footer">
        <Row>
          <Col lg="4" className="first">
            <h1>
              Easy <br /> <span className="gold">ahead</span>
            </h1>
            <p>
              We take the work out of connecting with others <br /> so you can
              accomplish more.
            </p>
            <select id="select-lang">
              <option value="english">English</option>
              <option value="français">Français</option>
              <option value="español">Español</option>
              <option value="deutsch">Deutsch</option>
              <option value="português">Português</option>
            </select>
            <img
              src="/individuals/images/app-store-white.png"
              id="appstore"
              style={{ width: "150px", height: "80px" }}
              alt="app-store"
            />
            <img
              src="/individuals/images/google-white.png"
              id="google"
              style={{ width: "150px", height: "80px" }}
              alt="play-store"
            />

            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </Col>

          <Col lg="2" className="second">
            <div className="about">
              {/* <h2>About</h2> */}
              <ul>
                <h2>About</h2>
                <li>About Calendly</li>
                <li>Contact Sales</li>
                <li>Newsroom</li>
                <li>Careers</li>
                <li>Security</li>
              </ul>
            </div>

            <div className="support">
              {/* <h2>Support</h2> */}
              <ul>
                <h2>Support</h2>
                <li>Help Centers</li>
                <li>Video Tutorials</li>
                <li>Cookie Settings</li>
              </ul>
            </div>
          </Col>

          <Col lg="2" className="third">
            <div className="solutions">
              {/* <h2>Solutions</h2> */}
              <ul>
                <h2>Solutions</h2>
                <li>Customer Success</li>
                <li>Sales</li>
                <li>Recruiting</li>
                <li>Education</li>
                <li>Marketing</li>
              </ul>
            </div>

            <div className="add-ons">
              {/* <h2>Add-ons</h2> */}
              <ul>
                <h2>Add-ons</h2>
                <li>Download for Chrome</li>
                <li>Download for Firefox</li>
              </ul>
            </div>
          </Col>

          <Col lg="3" className="fourth">
            <div className="popular features">
              {/* <h2>Popular Features</h2> */}
              <ul>
                <h2>Popular Features</h2>
                <li>Embed Calendly</li>
                <li>Availability</li>
                <li>Sending Notifications</li>
                <li>Using Calendly Mobile</li>
              </ul>
            </div>

            <div className="developers">
              {/* <h2>Developers</h2> */}
              <ul>
                <h2>Developers</h2>
                <li>Developers Tools</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
