import React from 'react';
import styled from 'styled-components';
import IconContainer from './IconContainer.jsx';
import ButtonContainer from './ButtonContainer.jsx';

const StyledContainer = styled.div`
display: flex;
flex-basis: 50%;
flex-direction: column;
`;

const StyledDiv = styled.div`

  font-family: 'Nunito Sans';
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.8rem;
  letter-spacing: -.32px;
`;

class DescriptionInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // this component has multiple parts. The description div, the icon div, and the button div
    const {product_description, icons} = this.props.overviewInfo;
    return (
      <StyledContainer>
        <StyledDiv>
          { product_description }
        </StyledDiv>
        <IconContainer iconInfo={icons} />
        <ButtonContainer />
      </StyledContainer>
    );
  }
}

export default DescriptionInfo;
