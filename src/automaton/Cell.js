import React, { Component } from 'react'

import './Cell.css'

export default class Cell extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={this.props.active ? 'cell cell-active' : 'cell'}>
      </div>
    )
  }
}