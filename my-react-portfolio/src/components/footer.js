import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="footer-top-el font-small">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12">
            <ul className="footer-ul">
              <li className="list-unstyled footer-li">
                <a href="#!">LinkedIn</a>
              </li>
              <li className="list-unstyled footer-li">
                <a href="#!">GitHub</a>
              </li>
              <li className="list-unstyled footer-li">
                <a href="#!">Resume</a>
              </li>
            </ul>
           
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="text-center">
        <MDBContainer fluid className="footer-copyright-container">
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.linkedin.com/in/andrew-bumgarner-6b204b90/"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;