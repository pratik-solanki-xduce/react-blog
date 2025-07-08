import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Cards } from "./Cards";
import { FooterSection } from "./FooterSection";
import { HeaderSection } from "./HeaderSection";

function App() {
  return (
    <div>
      <HeaderSection />
      <h1>Hello</h1>
      <Container fluid>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <Cards />
            </Col>
            <Col lg="3" md="6">
              <Cards />
            </Col>
            <Col lg="3" md="6">
              <Cards />
            </Col>
            <Col lg="3" md="6">
              <Cards />
            </Col>
          </Row>
        </Container>
      </Container>
      <FooterSection />
    </div>
  );
}

export default App;
