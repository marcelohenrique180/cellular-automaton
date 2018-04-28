import React, { Component } from 'react'
import Consumer, { AppProvider } from './store'

import './Menu.css'

export default class Menu extends Component {
  state = {
    number: '',
    maxr: 50
  }

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: parseInt(event.target.value)});
  }

  render () {
    return <div>
      <Consumer>
        {(context) => {
          return (
            <div className="Menu">
              <input name="number" placeholder="Cellular Number" type="number" value={this.state.number} onChange={this.handleChange}/>
              <input name="maxr" placeholder="Max Rows" type="number" value={this.state.maxr} onChange={this.handleChange}/>
              <button onClick={() => context.update(this.state.number, this.state.maxr)}>GO!</button>
            </div>
          )
        }}
      </Consumer>
    </div>
  }
}