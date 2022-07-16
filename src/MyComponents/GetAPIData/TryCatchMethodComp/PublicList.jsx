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

  return (
    <Row className="pt-2 pb-2">
      {getpersondata.slice(0, 5).map((value, key) => {
        return (
          <Col className="col-lg-3 mt-4 ">
            <Card>
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
      })}
    </Row>
  );
}
