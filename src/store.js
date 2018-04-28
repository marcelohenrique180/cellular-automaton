import React, { Component } from 'react'
import { getPattern } from './automaton/automaton'

const AppContext = React.createContext()

export class AppProvider extends Component {
  state = {
    onMenu: true,
    totalLines: 50,
    update: (number, t_lines) => {
      this.setState({
        pattern: getPattern(number),
        totalLines: t_lines,
        onMenu: false
      })
    },
    goToMenu: () => this.setState({onMenu: true})
  }

  render () {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppContext.Consumer
