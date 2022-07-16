import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Fetchcoviddata from '../../MyComponents/GetAPIData/TryCatchMethodComp/FetchCovidData';
import { FetchAllstatecoviddata } from '../../MyComponents/GetAPIData/TryCatchMethodComp/FetchCovidData';
import FetchMekupBrandData from '../../MyComponents/GetAPIData/TryCatchMethodComp/FetchMekupBrandData';
import FetcPopulationdata from '../../MyComponents/GetAPIData/TryCatchMethodComp/FetchPopulationdata';

export default function TryCatchMethod() {
  return (
    <Container fluid>
      <Row className="pt-2 pb-2">
        <div className="heading">
          <div className="title">
            <h2 className="text-center">
              Get Data From API Using Fetch Method with Try Catch statement In
              ReactJs
            </h2>
          </div>
          <div className="subtop mt-4">
            <h4>1) Get Covid19 Data</h4>
            <div className="getchdata">
              {/* render component */}
              <Fetchcoviddata />
              <FetchAllstatecoviddata />
            </div>
          </div>
          <div className="subtop mt-4">
            <h4>2) Get Population Data </h4>
            <div className="getchdata">
              {/* render component */}
              <FetcPopulationdata />
            </div>
          </div>
          <div className="subtop mt-4">
            <h4>3) Get Top 10 Mekup Brand Product </h4>
            <div className="getchdata">
              {/* render component */}
              <FetchMekupBrandData />
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}
