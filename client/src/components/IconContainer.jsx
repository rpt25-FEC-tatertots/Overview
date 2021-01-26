import React from 'react';
import styled from 'styled-components';

const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class IconContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // NOTE: Likely need to do conditional rendering to get this to render properly
    return (
      <StyledIconContainer>
        <div>ICON GOES HERE</div>
        <div>ICON Title</div>
        <div>ICON description</div>
      </StyledIconContainer>
    );
  }
}

export default IconContainer;
