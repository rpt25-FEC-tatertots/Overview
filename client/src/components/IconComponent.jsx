import React from 'react';
import styled from 'styled-components';

const StyledIconContainer = styled.div`
  display: flex;
`;

const StyledIconButton = styled.div`
  display: flex;
  padding: 0;
  align-items: center;
  background-color: ${(props) => props.isSelected ? 'black' : 'white'};
  border-style: solid;
  border-width: 3px;
  border-color: black;
  border-radius: 50%;
  align-self: center;
  margin-right: 5px;
  :hover {
    background-color: black;
    transition: background-color .4s ease-in-out;
  }
`;

const StyledIconSVG = styled.svg`
  fill: ${(props) => props.isSelected ? 'white' : 'black'};
  :hover {
    fill: white;
    transition: fill .4s ease-in-out;
  }
`;

const IconHeader = styled.h2`
  font-family: Nunito Sans;
  font-weight: bold;
  flex-basis: 25.390625%;
  font-size: 1.25rem;
`;

const IconDescription = styled.div`
  font-family: Nunito Sans;
  font-weight: 400;
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
    this.setState({ currentIndex: i });
  }

  render() {
    const { icons } = this.props;
    const { currentIndex } = this.state;
    if (icons && icons.length > 0) {
      const displayIcons = icons.map((icon, index) => {
        return (
          <StyledIconButton
            key={icon.icon_title}
            onClick={() => this.updateSelectedIcon(index)}
            isSelected={currentIndex === index}
          >
            <StyledIconSVG
              isSelected={currentIndex === index}
              width="50"
              height="50"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d={icon.icon_svg} />
            </StyledIconSVG>
          </StyledIconButton>
        );
      });

      return (
        <>
          <StyledIconContainer>
            {displayIcons}
          </StyledIconContainer>
          <IconHeader>{icons[currentIndex].icon_title}</IconHeader>
          <IconDescription>{icons[currentIndex].icon_description}</IconDescription>
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
