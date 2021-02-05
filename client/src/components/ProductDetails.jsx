/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import TitleFeatureComponent from './TitleFeatureComponent.jsx';

// create style that can be applied to feature title text
const FeatureHeader = styled.h2`
  font-family: Nunito Sans;
  font-weight: bold;
  flex-basis: 25.390625%;
  font-size: 1.25rem;
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
  const {
    feature1_title,
    feature1_description,
    feature2_title,
    feature2_description,
    feature3_title,
    feature3_description,
    feature4_title,
    feature4_description,
    feature5_title,
    feature5_description,
    feature6_title,
    feature6_description,
    weight,
  } = details;

  return (
    <>
      <FeatureHeader>Features</FeatureHeader>
      <DetailsContainer>
        <DetailsRow>
          <TitleFeatureComponent title={feature1_title} description={feature1_description} />
          <TitleFeatureComponent title={feature2_title} description={feature2_description} />
        </DetailsRow>
        <DetailsRow>
          <TitleFeatureComponent title={feature3_title} description={feature3_description} />
          <TitleFeatureComponent title={feature4_title} description={feature4_description} />
        </DetailsRow>
        <DetailsRow>
          <TitleFeatureComponent title={feature5_title} description={feature5_description} />
          <TitleFeatureComponent title={feature6_title} description={feature6_description} />
        </DetailsRow>
        <DetailsRow>
          <TitleFeatureComponent title="weight" description={weight} />
        </DetailsRow>
      </DetailsContainer>
    </>
  );
}

export default ProductDetails;
