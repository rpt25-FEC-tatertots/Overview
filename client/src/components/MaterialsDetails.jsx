import React from 'react';
import styled from 'styled-components';
import TitleFeatureComponent from './TitleFeatureComponent.jsx';

// create style that can be applied to feature title text
const FeatureHeader = styled.h2`
  font-family: Nunito Sans;
  font-weight: bold;
  flex-basis: 25.390625%;
`;

// create style that can be applies to feature description text
const FeatureDescription = styled.div`
  font-family: Nunito Sans;
  font-weight: 400;
`;

// create container with flexbox to hold everything
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`;

// for each row, create a container with two columns
const DetailsRow = styled.div`
  display: flex;
`;

// display all rows in a column

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
