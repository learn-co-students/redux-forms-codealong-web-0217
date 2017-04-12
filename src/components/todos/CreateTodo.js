import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor() {
  	super()
  	this.state = {
  		text: ' ',
  	}
  }

   handleChange(event) {
  	this.setState({
  		text: event.target.value
  	})
  }

   handleSubmit(event) {
   	event.preventDefualt()
   	this.props.store.dispatch({
   		type: 'ADD_TODO',
   		todo: this.state,
   	})
   	this.setState({
   		text: '',
   	})
  }
  render() {
    return(
      <div>
      	<form onSubmit={(event) => this.handleSubmit(event)}>
      		<p>
      			<label>Add Your To Do: </label>
      			<input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
      		</p>
      		<input type="submit" />
      	</form>
      	{this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
