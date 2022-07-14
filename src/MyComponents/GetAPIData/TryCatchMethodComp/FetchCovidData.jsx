import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function Fetchcoviddata() {
  const [mycoviddata, setmycoviddata] = useState([]);

  useEffect(() => {
    funGetMycoviddata();
  }, []);

  async function funGetMycoviddata() {
    try {
      const result = await fetch('https://data.covid19india.org/data.json');
      //console.log(result);
      const Coviddata = await result.json();
      //console.log(Coviddata);
      //console.log(typeof Coviddata);
      {
        /*get state wise covid data*/
        //console.log(Coviddata.statewise);
        //console.log(Coviddata.statewise[1]);
        //console.log(Coviddata.statewise[1].state);
      }
      setmycoviddata(Coviddata);
    } catch (error) {
      console.log(error);
    }
  }

  //console.log(mycoviddata);
  //console.log(typeof mycoviddata);
  //console.log(mycoviddata.statewise);
  const statewisedata = mycoviddata.statewise;
  //console.log(statewisedata);
  //console.log(typeof statewisedata);

  return (
    <>
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
    </>
  );
}

export default Fetchcoviddata;
