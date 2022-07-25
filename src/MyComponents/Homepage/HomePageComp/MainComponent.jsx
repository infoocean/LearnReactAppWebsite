import React from 'react';
import { Accordion, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    View
  </Tooltip>
);

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
                    <b>React Topics For Beginner</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li as={Link} to="/" style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>React Introduction</div>
                          <div>
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 250, hide: 400 }}
                              overlay={renderTooltip}
                            >
                              <button
                                type="button"
                                class="btns btn-primary"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample"
                              >
                                <i class="fa-solid fa-eye"></i>
                              </button>
                            </OverlayTrigger>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li as={Link} to="/" style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>React Installation</div>
                          <div>
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 250, hide: 400 }}
                              overlay={renderTooltip}
                            >
                              <button
                                type="button"
                                class="btns btn-primary"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample"
                              >
                                <i class="fa-solid fa-eye"></i>
                              </button>
                            </OverlayTrigger>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li as={Link} to="/" style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>Environment Setup</div>
                          <div>
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 250, hide: 400 }}
                              overlay={renderTooltip}
                            >
                              <button
                                type="button"
                                class="btns btn-primary"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample"
                              >
                                <i class="fa-solid fa-eye"></i>
                              </button>
                            </OverlayTrigger>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>React Babel</div>
                          <div>
                            <button
                              type="button"
                              class="btns btn-primary"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasExample"
                              aria-controls="offcanvasExample"
                            >
                              <i class="fa-solid fa-eye"></i>
                            </button>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>React Webpack</div>
                          <div>
                            <button
                              type="button"
                              class="btns btn-primary"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasExample"
                              aria-controls="offcanvasExample"
                            >
                              <i class="fa-solid fa-eye"></i>
                            </button>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>React Fragment</div>
                          <div>
                            <button
                              type="button"
                              class="btns btn-primary"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasExample"
                              aria-controls="offcanvasExample"
                            >
                              <i class="fa-solid fa-eye"></i>
                            </button>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li style={{ textAlign: 'left' }}>React NPM </li>
                      <li style={{ textAlign: 'left' }}>React NPX </li>
                      <li style={{ textAlign: 'left' }}>React YARN </li>
                      <li style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>React JSX </div>
                          <div>
                            <button
                              type="button"
                              class="btns btn-primary"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasExample"
                              aria-controls="offcanvasExample"
                            >
                              <i class="fa-solid fa-eye"></i>
                            </button>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>React JSX Attribute </div>
                          <div>
                            <button
                              type="button"
                              class="btns btn-primary"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasExample"
                              aria-controls="offcanvasExample"
                            >
                              <i class="fa-solid fa-eye"></i>
                            </button>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>React Props </div>
                          <div>
                            <button
                              type="button"
                              class="btns btn-primary"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasExample"
                              aria-controls="offcanvasExample"
                            >
                              <i class="fa-solid fa-eye"></i>
                            </button>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li style={{ textAlign: 'left' }}>React States </li>
                      <li style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>React Components </div>
                          <div>
                            <button
                              type="button"
                              class="btns btn-primary"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasExample"
                              aria-controls="offcanvasExample"
                            >
                              <i class="fa-solid fa-eye"></i>
                            </button>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div class="col">
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
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <b>React Hooks Topics</b>
                  </Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div class="col">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <b>Most Important React Topics</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li as={Link} to="/" style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>React Hooks</div>
                          <div>
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 250, hide: 400 }}
                              overlay={renderTooltip}
                            >
                              <button
                                type="button"
                                class="btns btn-primary"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample"
                              >
                                <i class="fa-solid fa-eye"></i>
                              </button>
                            </OverlayTrigger>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li as={Link} to="/" style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>React State</div>
                          <div>
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 250, hide: 400 }}
                              overlay={renderTooltip}
                            >
                              <button
                                type="button"
                                class="btns btn-primary"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample"
                              >
                                <i class="fa-solid fa-eye"></i>
                              </button>
                            </OverlayTrigger>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li as={Link} to="/" style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>Props</div>
                          <div>
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 250, hide: 400 }}
                              overlay={renderTooltip}
                            >
                              <button
                                type="button"
                                class="btns btn-primary"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample"
                              >
                                <i class="fa-solid fa-eye"></i>
                              </button>
                            </OverlayTrigger>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2>
            <b>Show All Javascript ES5,6 and Latest Version Topics</b>
          </h2>
        </div>
        <div class="container-fluid text-center mt-5 mb-5">
          <div class="row row-cols-4">
            <div class="col">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <b>Modern JS ES5,6 Avobe Version Topics</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li as={Link} to="/" style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>Template Literals</div>
                          <div>
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 250, hide: 400 }}
                              overlay={renderTooltip}
                            >
                              <button
                                type="button"
                                class="btns btn-primary"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample"
                              >
                                <i class="fa-solid fa-eye"></i>
                              </button>
                            </OverlayTrigger>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li as={Link} to="/" style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>Import, Export Modules</div>
                          <div>
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 250, hide: 400 }}
                              overlay={renderTooltip}
                            >
                              <button
                                type="button"
                                class="btns btn-primary"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample"
                              >
                                <i class="fa-solid fa-eye"></i>
                              </button>
                            </OverlayTrigger>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li as={Link} to="/" style={{ textAlign: 'left' }}>
                        <div className="d-flex justify-content-between">
                          <div>Arrow Functions</div>
                          <div>
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 250, hide: 400 }}
                              overlay={renderTooltip}
                            >
                              <button
                                type="button"
                                class="btns btn-primary"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample"
                              >
                                <i class="fa-solid fa-eye"></i>
                              </button>
                            </OverlayTrigger>
                            <button type="button" class="btns btn-primary">
                              <i class="fa-solid fa-check"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        {/* off canvas comp*/}
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              Offcanvas
            </h5>
          </div>
          <div class="offcanvas-body"></div>
        </div>
      </>
    );
  }
}

export default Mainpage;
