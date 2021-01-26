import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import DescriptionComponent from './components/DescriptionComponent.jsx';
import IconComponent from './components/IconComponent.jsx';
import ButtonComponent from './components/ButtonComponent.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import { randomNumberGenerator } from '../../database/fakeData/overviewDummyData';

const StyledApp = styled.div`
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overviewInfo: {},
      buttonClicked: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    const randomId = randomNumberGenerator(100);
    axios.get(`/overview/icons?product_id=${randomId}`)
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
    return (
      <div>
        <StyledApp>
          <StyledHeader>Overview</StyledHeader>
          <InfoContainer>
            <DescriptionComponent overviewInfo={this.state.overviewInfo} />
            <IconComponent icons={this.state.overviewInfo.icons} />
            <ButtonComponent handleButtonClick={this.handleButtonClick} />
          </InfoContainer>
        </StyledApp>
        <StyledApp>
          {this.state.buttonClicked ? <ProductDetails /> : <div></div>}
        </StyledApp>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
