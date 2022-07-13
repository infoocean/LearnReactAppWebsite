import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function FetcPopulationdata() {
  const [mydata, setmydata] = useState([]);

  useEffect(() => {
    GetMydata();
  }, []);

  async function GetMydata() {
    const myapi =
      'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
    try {
      const res = await fetch(myapi);
      //console.log(res);
      const Nationdata = await res.json();
      //console.log(Nationdata);
      //console.log(typeof Nationdata);
      setmydata(Nationdata);
    } catch (err) {
      console.log(err);
    }
  }

  console.log(mydata);
  console.log(mydata.data);
  //console.log(typeof mydata);

  return (
    <Row className="pt-2 pb-2">
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>{}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

