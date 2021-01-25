import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import DescriptionInfo from './components/DescriptionInfo.jsx';
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
  font-weight: 400;
`;

const StyledDiv = styled.div`
  flex-basis: 50%;
  font-family: 'Nunito Sans';
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.8rem;
  letter-spacing: -.32px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overviewInfo: {},
    };
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

  render() {
    return (
      <StyledApp>
        <StyledHeader>Overview</StyledHeader>
        <StyledDiv>
          <DescriptionInfo overviewInfo={this.state.overviewInfo} />
        </StyledDiv>
      </StyledApp>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
