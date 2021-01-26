import React from 'react';
import styled from 'styled-components';
import ProductDetails from './ProductDetails.jsx';

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

class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return (
        <div>
          <TextStyle>View Impact</TextStyle>
          <ProductDetails productDetails={this.props.productDetails} />
        </div>
      );
    }
    return (
      <StyledButtonContainer>
        <StyledButton onClick={this.updateState}> Specs And Features </StyledButton>
        <TextStyle>View Impact</TextStyle>
      </StyledButtonContainer>
    );
  }
}

export default ButtonContainer;
