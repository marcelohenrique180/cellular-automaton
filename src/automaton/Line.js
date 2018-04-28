import React, { Component } from 'react'
import Consumer from '../store'
import Cell from './Cell'

import './Line.css'

export default class Line extends Component {
  render () {
    return (
      <div className="line">
        {this.props.line.map((cell, i) => <Cell key={i} active={cell === 1} />)}
        <Consumer>
          {(context) => context.test}
        </Consumer>
      </div>
    )
  }
}