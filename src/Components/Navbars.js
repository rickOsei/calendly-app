import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

function Navbars() {
  return (
    <Navbar className="navbar">
      <Container>
        <Row>
          <Col>
            <Nav className="me-auto">
              <Navbar.Brand className="navbar-brand">
                <Link to="/">
                  <img
                    src="/images/logo/calendly-logo777.png"
                    width="150"
                    height="150"
                    alt="logo"
                    target="_blank"
                  />
                </Link>
              </Navbar.Brand>

              <Link className="nav-item" to="/individuals">
                Individuals
              </Link>
              <Link className="nav-item" to="/teams">
                Teams
              </Link>
              <Link className="nav-item" to="/enterprises">
                Enterprises
              </Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>

    // <Container fluid>
    //   <Row>
    //     <Col>
    //       <nav className="navbar navbar-expand-lg">
    //         <Link to="/" className="navbar-brand">
    //           <img
    //             src="/images/logo/calendly-logo777.png"
    //             width="150"
    //             height="150"
    //             alt="logo"
    //             target="_blank"
    //           />
    //         </Link>
    //         <button
    //           className="navbar-toggler"
    //           type="button"
    //           data-toggle="collapse"
    //           data-target="#navbarNav"
    //           aria-controls="navbarNav"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarNav">
    //           <ul className="navbar-nav mx-auto">
    //             <li className="nav-item active">
    //               <Link to="/individuals" className="nav-link">
    //                 Individuals
    //               </Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link to="/teams" className="nav-link">
    //                 Teams
    //               </Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link to="/enterprises" className="nav-link">
    //                 Enterprise
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </nav>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default Navbars;
