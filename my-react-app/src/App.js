import React from "react";
import product from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const firstName = "hamza";

const App = () => {
  return (
    <div>
      <h1 className="tt">Hello, {firstName ? firstName : "there!"}</h1>
      {firstName && <Image image={product.image} />}
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;
