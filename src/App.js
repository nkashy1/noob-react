import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import 'bulma/css/bulma.css';


// The following code allows simulation of asynchronous operations.
// asyncOperation(5000) produces an async operation which takes 5 seconds to complete.
// Each operation returns the same output -- ASYNC_RESULT (available in global scope)
const ASYNC_RESULT = 'ASYNC_RESULT';

function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

function asyncOperation(duration) {
  async function op() {
    await wait(duration);
    return ASYNC_RESULT;
  }

  return op;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Dawg',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, {this.state.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <div class="field is-horizontal" id="name">
            <label class="label">Name:</label>
            <div class="control">
              < input class="input" type="text" placeholder={this.state.name}
                onChange={(event) => {this.setState({name: event.target.value})}}
              />
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
