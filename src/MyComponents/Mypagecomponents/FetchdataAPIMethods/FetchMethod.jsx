import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Fetchmethod() {
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
    <Container fluid>
      <Row className="pt-2 pb-2">
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>{}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export function Fetchcoviddata() {
  const [mycoviddata, setmycoviddata] = useState([]);

  async function funGetMydata() {
    try {
      const result = await fetch('https://data.covid19india.org/data.json');
      //console.log(result);
      const Coviddata = await result.json();
      //console.log(Coviddata);
      //console.log(typeof Coviddata);
      //console.log(Coviddata.statewise);
      //console.log(Coviddata.statewise[1]);
      //console.log(Coviddata.statewise[1].state);
      setmycoviddata(Coviddata.statewise[1]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    funGetMydata();
  }, []);

  //console.log(mycoviddata);

  return (
    <Container fluid>
      <Row className="pt-2 pb-2">
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>{mycoviddata.state}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.text>Active Case : {mycoviddata.active}</Card.text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
