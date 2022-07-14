import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function Fetchcoviddata() {
  const [mycoviddata, setmycoviddata] = useState([]);
  const [mystatecoviddata, setmystatecoviddata] = useState([]);
  const [Delhistatecoviddata, setDelhistatecoviddata] = useState([]);
  const [Mumbaistatecoviddata, setMumbaistatecoviddata] = useState([]);

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
      setmystatecoviddata(Coviddata.statewise[20]); //Get MP covid data
      setDelhistatecoviddata(Coviddata.statewise[9]); // get delhi covid data
      setMumbaistatecoviddata(Coviddata.statewise[21]); // get mumbai state covid data
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
  //console.log(mystatecoviddata);
  //console.log(Delhistatecoviddata);
  //console.log(Mumbaistatecoviddata);

  return (
    <>
      <Row className="pt-2 pb-2">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>State Name: {mystatecoviddata.state}</Card.Title>
              <Card.Text>state Code : {mystatecoviddata.statecode}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text>Active case : {mystatecoviddata.active}</Card.Text>
              <Card.Text> Confirmed : {mystatecoviddata.confirmed}</Card.Text>
              <Card.Text> Recorved : {mystatecoviddata.recovered}</Card.Text>
              <Card.Text> Deaths : {mystatecoviddata.deaths}</Card.Text>
              <Card.Text>
                {' '}
                Updated Date : {mystatecoviddata.lastupdatedtime}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>State Name: {Delhistatecoviddata.state}</Card.Title>
              <Card.Text>
                state Code : {Delhistatecoviddata.statecode}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text>Active case : {Delhistatecoviddata.active}</Card.Text>
              <Card.Text>
                {' '}
                Confirmed : {Delhistatecoviddata.confirmed}
              </Card.Text>
              <Card.Text> Recorved : {Delhistatecoviddata.recovered}</Card.Text>
              <Card.Text> Deaths : {Delhistatecoviddata.deaths}</Card.Text>
              <Card.Text>
                {' '}
                Updated Date : {Delhistatecoviddata.lastupdatedtime}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>State Name: {Mumbaistatecoviddata.state}</Card.Title>
              <Card.Text>
                state Code : {Mumbaistatecoviddata.statecode}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text>Active case : {Mumbaistatecoviddata.active}</Card.Text>
              <Card.Text>
                {' '}
                Confirmed : {Mumbaistatecoviddata.confirmed}
              </Card.Text>
              <Card.Text>
                {' '}
                Recorved : {Mumbaistatecoviddata.recovered}
              </Card.Text>
              <Card.Text> Deaths : {Mumbaistatecoviddata.deaths}</Card.Text>
              <Card.Text>
                {' '}
                Updated Date : {Mumbaistatecoviddata.lastupdatedtime}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default Fetchcoviddata;

function FetchAllstatecoviddata() {
  const [statecoviddata, setstatecoviddata] = useState([]);

  useEffect(() => {
    funstatecoviddata();
  }, []);

  async function funstatecoviddata() {
    try {
      const myresult = await fetch('https://data.covid19india.org/data.json');
      //console.log(myresult);
      const stateCoviddata = await myresult.json();
      //console.log(stateCoviddata);
      //console.log(typeof stateCoviddata);
      setstatecoviddata(stateCoviddata.statewise);
    } catch (error) {
      console.log(error);
    }
  }

  //console.log(statecoviddata);
  //console.log(typeof statecoviddata);

  return (
    <>
      <Row className="pt-2 pb-2">
        <h4 className="pt-2 pb-2"> Get All State Covid19 Data</h4>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text></Card.Text>
              <Card.Text> </Card.Text>
              <Card.Text> </Card.Text>
              <Card.Text> </Card.Text>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export { FetchAllstatecoviddata };
