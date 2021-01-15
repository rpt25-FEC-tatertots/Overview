import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    axios.get('/overview/icons/')
      .then((response) => {
        console.log(response)
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