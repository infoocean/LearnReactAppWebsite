import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function FetcPopulationdata() {
  const [mypopulationdata, setmypopulationdata] = useState([]);

  useEffect(() => {
    GetMyPopulationdata();
  }, []);

  async function GetMyPopulationdata() {
    const myapi =
      'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
    try {
      const res = await fetch(myapi);
      //console.log(res);
      const Nationdata = await res.json();
      //console.log(Nationdata);
      //console.log(typeof Nationdata);
      //console.log(Nationdata.data);
      setmypopulationdata(Nationdata.data);
    } catch (err) {
      console.log(err);
    }
  }
  console.log(mypopulationdata);
  //console.log(typeof mypopulationdata);

  {
    /*
  const dt = mypopulationdata.map(myfun);
  function myfun(value, key) {
    return key;
  }
  console.log(dt);
*/
  }
  return (
    <Row className="pt-2 pb-2">
      {mypopulationdata.map((item, key) => {
        return (
          <Col className="col-lg-3 mt-4">
            <Card>
              <Card.Body>
                <Card.Title>Nation : {item.Nation}</Card.Title>
                <Card.Text>Population : {item.Population}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Text>Year : {item.Year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
