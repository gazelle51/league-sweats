import React, { Component } from 'react';
import { LoadingSpinner } from './components/LoadingSpinner';
import './App.css';

import { trackPromise } from 'react-promise-tracker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };

    this.callAPI = this.callAPI.bind(this);
  }

  async callAPI() {
    const res = await trackPromise(
      fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users`, {
        method: 'GET',
      }),
      'apiResponse-area'
    );

    this.setState({ apiResponse: JSON.stringify(await res.json()) });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>This is the League Sweats page</p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>

          <div>
            The response from the API is: <LoadingSpinner area='apiResponse-area' />
            <code>{this.state.apiResponse}</code>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
