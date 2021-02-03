import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import DescriptionComponent from './components/DescriptionComponent.jsx';
import IconComponent from './components/IconComponent.jsx';
import ButtonComponent from './components/ButtonComponent.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import MaterialsDetails from './components/MaterialsDetails.jsx';

const StyledParent = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled.h2`
  flex-basis: 25.390625%;
  display: block;
  margin-bottom: 3.2rem;
  font-size: 1.6rem;
  letter-spacing: -.16px;
  line-height: 2rem;
  margin-top: .8rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
`;

const InfoContainer = styled.div`
display: flex;
flex-basis: 50%;
flex-direction: column;
`;

class OverviewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overviewInfo: {},
      buttonClicked: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname;
    axios.get(`/overview${id}`)
      .then((response) => {
        this.setState({
          overviewInfo: response.data,
        });
      })
      .catch((error) => console.log('FAILED ON CLIENT SIDE: ', error));
  }

  handleButtonClick() {
    this.setState({ buttonClicked: true });
  }

  render() {
    const { buttonClicked, overviewInfo } = this.state;
    return (
      <div>
        <StyledParent>
          <StyledHeader>Overview</StyledHeader>
          <InfoContainer>
            <DescriptionComponent description={overviewInfo.product_description} />
            <IconComponent icons={overviewInfo.icons} />
            <ButtonComponent handleButtonClick={this.handleButtonClick} clicked={buttonClicked} />
          </InfoContainer>
        </StyledParent>
        <StyledParent>
          {buttonClicked ? <ProductDetails details={overviewInfo} /> : <div />}
        </StyledParent>
        <StyledParent>
          {buttonClicked ? <MaterialsDetails details={overviewInfo} /> : <div />}
        </StyledParent>
      </div>
    );
  }
}

ReactDOM.render(<OverviewComponent />, document.getElementById('overviewService'));
