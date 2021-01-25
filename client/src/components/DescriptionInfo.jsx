import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class DescriptionInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // this component has multiple parts. The description div, the icon div, and the button div
    return (
      <StyledContainer>
        <div>Product Description Goes Here</div>
        <div>Icon and Icon Description Goes Here</div>
        <div>Specs Button and View Impact Goes Here</div>
      </StyledContainer>
    );
  }
}

export default DescriptionInfo;
