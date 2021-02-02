import React from 'react';
import styled from 'styled-components';

const TitleBold = styled.div`
  font-family: Nunito Sans;
  font-weight: bold;
`;

const DescriptionStyle = styled.div`
  font-family: Nunito Sans;
`;

function TitleFeatureComponent({title, description}) {
  return (
    <div>
      <TitleBold> { title } </TitleBold>
      <DescriptionStyle> { description }</DescriptionStyle>
    </div>
  );
}

export default TitleFeatureComponent;