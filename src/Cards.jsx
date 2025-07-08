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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
