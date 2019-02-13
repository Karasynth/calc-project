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
            <h2>Shayne Thomson's Calculator</h2>
            <Calculator/>
            <button 
              className='calculator-button'
              style={{width: 'auto', marginTop: 50}}
              onClick={() => window.open('mailto:thomsos.prod@gmail.com?subject=You Are Hired!')}
            >
              Hire Shayne
            </button>
          </Provider>
        </header>
      </div>
    );
  }
}

export default App;
