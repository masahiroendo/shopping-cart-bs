import { Col, Row } from "react-bootstrap";
import StoreItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-3">
        {StoreItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
