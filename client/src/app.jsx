import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
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
  font-family: Nunito Sans
`;

const StyledDiv = styled.div`
flex-basis: 50%
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDescription: '',
      weight: '',
    };
  }

  componentDidMount() {
    const randomId = randomNumberGenerator(100);
    axios.get(`/overview/icons?product_id=${randomId}`)
      .then((response) => {
        console.log(response.data);
        // set the state with this product info, render it to the dom
        this.setState({
          productDescription: response.data.product_description,
          weight: response.data.weight,
        });
      })
      .catch((error) => console.log('FAILED ON CLIENT SIDE: ', error));
  }

  render() {
    return (
      <StyledApp>
        <StyledHeader>Overview</StyledHeader>
        <StyledDiv>{ this.state.productDescription }</StyledDiv>
      </StyledApp>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
