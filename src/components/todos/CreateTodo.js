import React, { Component } from 'react'


class CreateTodo extends Component {

  constructor() {
    super()
    this.state = {
      text: '',
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
    event.target.children[0].children[1].value = ''
    this.setState({
      text: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text"
              onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
        <br/>
        Text: {this.state.text}
        <br/>
        TODOs:
        <ul>
        {this.props.store.getState().todos.map( (todo, index) => {
          return <li id={index}>{todo}</li>
        })}
        </ul>
      </div>
    )
  }
}

export default CreateTodo
