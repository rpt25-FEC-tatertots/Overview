import React from 'react';
import styled from 'styled-components';

const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class IconComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledIconContainer>
        <div>ICON GOES HERE</div>
        <div>ICON Title</div>
        <div>ICON description</div>
      </StyledIconContainer>
    );
  }
}

export default IconComponent;
