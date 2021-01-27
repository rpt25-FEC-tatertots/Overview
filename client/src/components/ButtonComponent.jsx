import React from 'react';
import styled from 'styled-components';

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 3.575rem
`;

const StyledButton = styled.button`
  background-color: black;
  min-width: 14rem;
  border-color: transparent;
  border-radius: 3rem;
  font-family: 'Nunito Sans';
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  line-height: 3.6rem;
`;

const TextStyle = styled.span`
  margin: 0px 0px 0px 32px;
  border-color: transparent;
  border-radius: 3rem;
  font-family: 'Nunito Sans';
  font-size: 1.25rem;
  font-weight: bold;
  color: black;
  line-height: 3.6rem;
  `;

function ButtonComponent(props) {
  const { clicked, handleButtonClick } = props;
  if (clicked) {
    return (
      <StyledButtonContainer>
        <TextStyle>View Impact</TextStyle>
      </StyledButtonContainer>
    );
  }
  return (
    <StyledButtonContainer>
      <StyledButton onClick={handleButtonClick}> Specs And Features </StyledButton>
      <TextStyle>View Impact</TextStyle>
    </StyledButtonContainer>
  );
}

export default ButtonComponent;
