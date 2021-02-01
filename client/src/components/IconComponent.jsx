import React from 'react';
import { FaEnvira, FaRecycle } from 'react-icons/fa';
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
    if (this.props.icons && this.props.icons.length > 0) {
      return (
        <div>
          <FaEnvira />
          <FaRecycle />
        </div>
      );
    }
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
