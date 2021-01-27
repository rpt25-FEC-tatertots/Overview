import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.div`
  font-family: 'Nunito Sans';
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.8rem;
  letter-spacing: -.32px;
`;

function DescriptionInfo(props) {
  return (
    <StyledDescription>
      { props.description }
    </StyledDescription>
  );
}

export default DescriptionInfo;
