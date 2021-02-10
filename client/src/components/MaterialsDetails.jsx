import React from 'react';
import styled from 'styled-components';
import TitleFeatureComponent from './TitleFeatureComponent.jsx';

const FeatureHeader = styled.h2`
  font-family: Nunito Sans;
  font-weight: bold;
  flex-basis: 25.390625%;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`;

const DetailsRow = styled.div`
  display: flex;
`;

class MaterialsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <FeatureHeader>Materials</FeatureHeader>
        <DetailsContainer>
          <DetailsRow>
            <TitleFeatureComponent description="Description of Materials goes here" />
          </DetailsRow>
        </DetailsContainer>
      </>
    );
  }
}

export default MaterialsDetails;
