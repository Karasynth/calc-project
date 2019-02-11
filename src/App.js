import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Calculator from './components/calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Provider store={store}>
            <Calculator/>
          </Provider>
        </header>
      </div>
    );
  }
}

export default App;
