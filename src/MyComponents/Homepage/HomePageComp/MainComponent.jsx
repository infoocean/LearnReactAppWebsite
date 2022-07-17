import React from 'react';
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
                    <b>Most Important React Topics</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li as={Link} to="/" style={{ textAlign: 'left' }}>
                        React Introduction{' '}
                      </li>
                      <li style={{ textAlign: 'left' }}>React Babel</li>
                      <li style={{ textAlign: 'left' }}>React Webpack </li>
                      <li style={{ textAlign: 'left' }}>React NPM </li>
                      <li style={{ textAlign: 'left' }}>React NPX </li>
                      <li style={{ textAlign: 'left' }}>React YARN </li>
                      <li style={{ textAlign: 'left' }}>React JSX </li>
                      <li style={{ textAlign: 'left' }}>React Props </li>
                      <li style={{ textAlign: 'left' }}>React States </li>
                      <li style={{ textAlign: 'left' }}>React Components </li>
                      <li style={{ textAlign: 'left' }}>React Fragment </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div class="col">
              {' '}
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <b>React Topics For Beginner</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li style={{ textAlign: 'left' }}>React Introduction </li>
                      <li style={{ textAlign: 'left' }}>React JSX </li>
                      <li style={{ textAlign: 'left' }}>React Props </li>
                      <li style={{ textAlign: 'left' }}>React States </li>
                      <li style={{ textAlign: 'left' }}>React Components </li>
                      <li style={{ textAlign: 'left' }}>React Fragment </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div class="col">
              {' '}
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <b>Advanced React Topics</b>
                  </Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div class="col">
              {' '}
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <b>React Hooks Topics</b>
                  </Accordion.Header>
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
