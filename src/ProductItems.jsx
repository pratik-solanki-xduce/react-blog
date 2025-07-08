import { Col } from "react-bootstrap";
import { Cards } from "./Cards";

export const ProductItems = ({items}) => {
  return (
    <Col lg="3" md="6" className="mb-4">
      <Cards items={items} />
    </Col>
  );
};
