import React, { Component } from 'react'
import Consumer from '../store'
import Line from './Line'

export default class Field extends Component {

  constructor(props) {
    super(props)

    let Lines = []
    let lines = new Array(200)
    lines = lines.fill(0)
    lines[100] = 1
    this.state = {lines: [lines], Lines}
  }

  nextLine () {
    if (this.state.lines.length === this.props.totalLines) {
      clearInterval(this.interval);
      return
    }
    const prevLine = this.state.lines.slice(-1)[0]
    const currentLine = prevLine.map((cell, i) => {
      let pattern
      if (i === 0) {
        pattern = [prevLine.slice(-1)[0], cell, prevLine[1]]
      }
      else if (i + 1 === prevLine.length) {
        pattern = [prevLine[i - 1], cell, prevLine[0]]
      }
      else {
        pattern = [prevLine[i - 1], cell, prevLine[i + 1]]
      }
      return this.evalPattern(pattern)
    })
    const Lines = this.state.Lines.concat([<Line key={this.state.lines.length} line={currentLine} />])
    const lines = this.state.lines.concat([currentLine])
    this.setState({ Lines, lines })
    window.scrollTo(0,document.body.scrollHeight)
  }

  evalPattern (neighbours) {
    const n_pattern = neighbours.join(' ')
    const filtered = this.props.pattern.filter(pat => pat.pattern === n_pattern)[0]
    return filtered.state
  }

  componentDidMount () {
    this.interval = setInterval(this.nextLine.bind(this), 0);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  render () {
    return (
      <div>
        {this.state.Lines}
      </div>
    )
  }
}