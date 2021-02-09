import React from 'react';
import styled from 'styled-components';

const ListStyle = styled.li`
  list-style-type: none;
  margin-bottom: 6.5rem;
  flex-basis: calc(50% - 2rem);
  font-size: 1.25rem;
  line-height: 1.25rem;
`;

const TitleBold = styled.div`
  font-family: Nunito Sans;
  font-weight: bold;
  margin-bottom: 1.4rem;
`;

const DescriptionStyle = styled.div`
  font-family: Nunito Sans;
`;

function TitleFeatureComponent({ title, description }) {
  return (
    <ListStyle>
      <TitleBold> { title } </TitleBold>
      <DescriptionStyle> { description }</DescriptionStyle>
    </ListStyle>
  );
}

export default TitleFeatureComponent;