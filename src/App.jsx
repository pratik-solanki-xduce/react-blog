import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Cards } from "./Cards";
import { FooterSection } from "./FooterSection";
import { HeaderSection } from "./HeaderSection";
import { ProductItems } from "./ProductItems";
import { posts } from "./Data/constants";

function App() {
  return (
    <div>
      <HeaderSection />
      <h1>Hello</h1>
      <Container fluid>
        <Container>
          <Row>
            {posts.map((data, index) => {
              return <ProductItems items={data} key={index} />
            })}
          </Row>
        </Container>
      </Container>
      <FooterSection />
    </div>
  );
}

export default App;
