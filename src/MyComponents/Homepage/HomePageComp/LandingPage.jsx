import React from 'react';

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <div class="jumbotron jumbotron-fluid">
          <div class="container text-center">
            <h1 class="text-white mb-5">
              <b>Learn React JS Step By Step</b>
            </h1>
            <div class="mx-auto" style={{ with: '100%', maxWidtth: '200px' }}>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control border-light"
                  placeholder="Search React Topics Here....."
                  style={{ padding: '15px' }}
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-primary px-3"
                    style={{ padding: '15px' }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
