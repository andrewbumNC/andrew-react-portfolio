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
                <a href="https://www.linkedin.com/in/andrew-bumgarner-6b204b90/">LinkedIn</a>
              </li>
              <li className="list-unstyled footer-li">
                <a href="https://github.com/andrewbumNC">GitHub</a>
              </li>
              <li className="list-unstyled footer-li">
                <a href="https://docs.google.com/document/d/0B9S8lMbbBhFPczByeWJVOW5aYWl0UllIVV9ZdmExVXBsR2pr/edit?usp=sharing&ouid=101143160745006770620&resourcekey=0-UYUeNybpvg1wKtuH4xmfWQ&rtpof=true&sd=true">Resume</a>
              </li>
            </ul>
           
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
      <div className="text-center">
        <MDBContainer fluid className="footer-copyright-container">
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.linkedin.com/in/andrew-bumgarner-6b204b90/">Andrew Bumgarner </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;