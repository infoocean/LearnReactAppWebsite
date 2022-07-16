import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function FetchPersonData() {
  const [getpersondata, setgetpersondata] = useState([]);

  useEffect(() => {
    Getgetpersondata();
  }, []);

  async function Getgetpersondata() {
    const myapi = 'https://api.publicapis.org/entries';
    try {
      const res = await fetch(myapi);
      //console.log(res);
      const mypersondata = await res.json();
      setgetpersondata(mypersondata.entries);
    } catch (err) {
      console.log(err);
    }
  }
  //console.log(getpersondata);
  //console.log(typeof getpersondata);

  const dt = getpersondata.slice(0, 5).map((value, key) => {
    if (key == 3) {
      return 'poster';
    } else {
      return key;
    }
  });

  console.log(dt);

  return (
    <Row className="pt-2 pb-2">
      {getpersondata.slice(0, 5).map((value, key) => {
        if (key === 3) {
          return (
            <Col className="col-lg-3 mt-4 ">
              <Card id={key}>Addvertisement Poster</Card>
            </Col>
          );
        } else {
          return (
            <Col className="col-lg-3 mt-4 ">
              <Card id={key}>
                <Card.Body>
                  <Card.Title>API : {value.API} </Card.Title>
                  <Card.Text>Category: {value.Category}</Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Text>Cors : {value.Cors}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        }
      })}
    </Row>
  );
}
