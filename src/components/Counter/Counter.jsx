import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  subtractFromCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  addToCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <br />
        <button onClick={this.subtractFromCount}>-</button>
        <button onClick={this.addToCount}>+</button>
      </div>
    )
  }
}

export default Counter
