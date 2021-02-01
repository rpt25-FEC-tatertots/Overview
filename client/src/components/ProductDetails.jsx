/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';

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

function ProductDetails({ details }) {
  const { feature1_title, feature1_description } = details;
  return (
    <>
      <FeatureHeader>Features</FeatureHeader>
      <DetailsContainer>
        <DetailsRow>
          <div>
            <div>{ feature1_title }</div>
            <div>{ feature1_description }</div>
          </div>
          <div>
            <div>Feature Title</div>
            <div>Feature Description</div>
          </div>
        </DetailsRow>
      </DetailsContainer>
    </>
  );
}

export default ProductDetails;
