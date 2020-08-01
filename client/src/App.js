import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  async callAPI() {
    const res = await fetch('http://localhost:4000/', {
      method: 'GET',
    });

    this.setState({ apiResponse: JSON.stringify(await res.json()) });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>This is the League Sweats page.</p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <p>
            The response from the API is: <code>{this.state.apiResponse}</code>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
