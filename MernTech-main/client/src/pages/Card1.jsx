import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard className='text-center'>
      <MDBCardHeader>
        <MDBTabs className='card-header-tabs'>
          <MDBTabsItem>
            <MDBTabsLink active>
              Active
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink>
              Link
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink className='enbled'>
              Disabled
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
      </MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Digitalization Containers</MDBCardTitle>
        <MDBCardText>
          With Enterprise Resource Planning Management System is base of IT Sector.
        </MDBCardText>
        <MDBBtn>Marketting</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}