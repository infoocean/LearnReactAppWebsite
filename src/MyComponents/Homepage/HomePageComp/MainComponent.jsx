import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Mainpage extends React.Component {
  render() {
    return (
      <>
        <div className="text-center">
          <h2>
            <b>Show All React Topics Below</b>
          </h2>
        </div>
        <div class="container-fluid text-center mt-5 mb-5">
          <div class="row row-cols-4">
            <div class="col">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Most Important React Topics
                  </Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div class="col">
              {' '}
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>React Topics For Beginner</Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div class="col">
              {' '}
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Advanced React Topics</Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div class="col">
              {' '}
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>React Hooks Topics</Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Mainpage;
