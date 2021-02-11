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

function MaterialsDetails({ materialsInfo }) {
  if (materialsInfo && materialsInfo.length > 0) {
    const materialNames = materialsInfo.map((material) => material.mat_name);
    return (
      <>
        <FeatureHeader>Materials</FeatureHeader>
        <DetailsContainer>
          <DetailsRow>
            <TitleFeatureComponent description={materialNames[0]} />
            <TitleFeatureComponent description={materialNames[1]} />
          </DetailsRow>
          <DetailsRow>
            <TitleFeatureComponent description={materialNames[2]} />
            <TitleFeatureComponent description={materialNames[3]} />
          </DetailsRow>
          <DetailsRow>
            <TitleFeatureComponent description={materialNames[4]} />
            <TitleFeatureComponent description={materialNames[5]} />
          </DetailsRow>
        </DetailsContainer>
      </>
    );
  }
  return (
    <>
      <FeatureHeader>Materials</FeatureHeader>
      <DetailsContainer>
        <DetailsRow>
          <TitleFeatureComponent description="100% vegan, free-range rubber duck" />
        </DetailsRow>
      </DetailsContainer>
    </>
  );
}

export default MaterialsDetails;
