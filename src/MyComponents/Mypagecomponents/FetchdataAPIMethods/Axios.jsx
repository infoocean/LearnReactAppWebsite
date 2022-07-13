import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function GetAPIdata() {
  const [mydata, setmydata] = useState([]);
  const axios = require('axios');

  useEffect(() => {
    Mydata();
  }, []);

  function Mydata() {
    var config = {
      method: 'get',
      url: 'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setmydata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  console.log(mydata.data);
  console.log(mydata.data);

  return (
    <Container fluid>
      <Row className="pt-2 pb-2">
        <div className="heading">
          <div className="title">
            <h2 className="text-center">Get Data From API In ReactJs</h2>
          </div>
          <div className="subtop">
            <h4>1) Get Data From API Using Fetch() Methods</h4>
            <div className="getchdata"></div>
          </div>
        </div>
        {/*
        {mydata.map((index) => {
          return (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="holder.js/100px180?text=Image cap"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      */}
      </Row>
    </Container>
  );
}
