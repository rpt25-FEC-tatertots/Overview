import React from 'react';
import { FaEnvira, FaRecycle } from 'react-icons/fa';
import styled from 'styled-components';

const StyledIconContainer = styled.div`
  display: flex;
`;

const StyledIconButton = styled.button`
  display: flex;
  padding: 0;
  align-items: center;
  background-color: black;
  border-style: normal;
  border-radius: 50%;
  align-self: center;
`;

class IconComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.updateSelectedIcon = this.updateSelectedIcon.bind(this);
  }

  updateSelectedIcon(i) {
    console.log('CLICKED', i);
    this.setState({ currentIndex: i });
  }

  render() {
    const { icons } = this.props;
    console.log(icons)
    if (icons && icons.length > 0) {
      const displayIcons = icons.map((icon, index) => {
        return (
            <StyledIconButton key={icon.icon_title} onClick={() => this.updateSelectedIcon(index)}>
              <svg fill="white" width="50" height="50" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <path d={icon.icon_svg} />
              </svg>
            </StyledIconButton>
        );
      });

      return (
        <>
          <StyledIconContainer>
            {displayIcons}
          </StyledIconContainer>
          <div>{icons[this.state.currentIndex].icon_title}</div>
          <div>{icons[this.state.currentIndex].icon_description}</div>
        </>
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
