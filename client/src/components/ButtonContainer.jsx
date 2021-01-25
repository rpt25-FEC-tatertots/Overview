import React from 'react';
import styled from 'styled-components';

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledButtonContainer>
        <button> Specs And Features </button>
        <div>VIEW IMPACT</div>
      </StyledButtonContainer>
    );
  }
}

export default ButtonContainer;
