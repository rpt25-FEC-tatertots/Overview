import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { randomNumberGenerator } from '../../database/fakeData/overviewDummyData.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    let randomId = randomNumberGenerator(100);
    axios.get('/overview/icons/', {params: {product_id: randomId}})
      .then((response) => {
        console.log(response.data)
        //set the state with this product info, render it to the dom
      })
      .catch((error) => console.log('FAILED ON CLIENT SIDE: ', error))
  }

  render() {
    return (
      <div>hello world</div>
    )
  }
};


ReactDOM.render(<App />, document.getElementById('app'));