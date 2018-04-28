import React, { Component } from 'react';
import Consumer, { AppProvider } from './store'
import Field from './automaton/Field'
import Menu from './Menu'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
  }

  render () {
    return (
      <AppProvider>
        <Consumer>
          {(context) =>
            <div className="App">
              <header className="App-header">
                <button className="Back-button" onClick={context.goToMenu}>Back</button>
                <h1 className="App-title">Cellular Automaton</h1>
              </header>
              <div className="App-intro">
                {context.onMenu ?
                  <Menu />
                  :
                  <Field pattern={context.pattern} totalLines={context.totalLines} />
                }
              </div>
            </div>
          }
          </Consumer>
      </AppProvider>
        );
      }
    }
    
    export default App;
