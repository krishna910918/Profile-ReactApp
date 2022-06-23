

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/team-1-800x800.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Sai Krishna</h1>
              <p className="text-white mt-0 mb-5">
                This is the profile page. You can see the profile data 
                 and other required details
              </p>
              <Container>
                
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
