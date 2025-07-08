import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Cards = ({items}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{items.title}</Card.Title>
        <Card.Text>
          {items.body}
        </Card.Text>
        <Button variant="primary"><FontAwesomeIcon icon={faEye} /></Button>
      </Card.Body>
    </Card>
  );
};
