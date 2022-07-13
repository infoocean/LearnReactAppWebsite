import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Fetchcoviddata from '../../MyComponents/Mypagecomponents/FetchdataAPIMethods/FetchMethod';

export default function GetAPIdata() {
  return (
    <Container fluid>
      <Row className="pt-2 pb-2">
        <div className="heading">
          <div className="title">
            <h2 className="text-center">Get Data From API In ReactJs</h2>
          </div>
          <div className="subtop mt-4">
            <h4>1) Get Data From API Using Fetch() Methods</h4>
            <div className="getchdata">
              {/* render component */}
              <Fetchcoviddata />
            </div>
          </div>
          <div className="subtop mt-4">
            <h4>2) Get Data From API Using Axios() Methods</h4>
            <div className="getchdata"></div>
          </div>
        </div>
      </Row>
    </Container>
  );
}
