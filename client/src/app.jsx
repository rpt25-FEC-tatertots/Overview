import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componenentDidMount() {
    axios.get('/overview/icons/')
      .then((response) => {
        this.setState()
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