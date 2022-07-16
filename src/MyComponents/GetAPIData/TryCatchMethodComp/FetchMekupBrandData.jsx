import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function FetchMekupBrandData() {
  const [getmekupbrand, setgetmekupbrand] = useState([]);

  useEffect(() => {
    Getmekupbrand();
  }, []);

  async function Getmekupbrand() {
    const myapi =
      'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
    try {
      const res = await fetch(myapi);
      //console.log(res);
      const mymekupbranddata = await res.json();
      setgetmekupbrand(mymekupbranddata);
    } catch (err) {
      console.log(err);
    }
  }
  //console.log(getmekupbrand);
  //console.log(typeof getmekupbrand);

  {
    function myfunction(value, key) {
      return key;
    }
    const mydt = getmekupbrand.map(myfunction);
    //console.log(mydt);
    const dt = getmekupbrand.slice(0, 10).map(myfunction);
    //console.log(dt);
  }

  return (
    <Row className="pt-2 pb-2">
      {getmekupbrand.slice(0, 10).map((item, key) => {
        return (
          <Col className="col-lg-3 mt-4 ">
            <Card>
              <Card.Img
                style={{ width: '10rem', height: '10rem' }}
                variant="top"
                src={item.image_link}
              />
              <Card.Body>
                <Card.Title>Brand Name : {item.brand}</Card.Title>
                <Card.Text>Product Type : {item.product_type}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Text>Price : {item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
