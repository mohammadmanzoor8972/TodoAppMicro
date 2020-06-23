import React, { Component } from 'react';
import './App.css';
import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo } from './lib/todoHelpers';
import { pipe, partial } from './lib/utils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UpcomingTask from './pages/UpcomingTask';
import CompletedTask from './pages/CompletedTask';

class App extends Component {

  state = {
    currentTodo: "",
    errorMessage: "",
    isComplete: false,
    todos: [
      { id: 1, name: 'Capita', isComplete: true },
      { id: 2, name: 'Microlise', isComplete: false },
      { id: 3, name: 'Wipro', isComplete: true }
    ]
  }

  handleToggle = (todoId) => { 

    const pipeline = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    const updatedTodos = pipeline(todoId, this.state.todos)

    this.setState({todos: updatedTodos})
  }

  handleOnchangeInput= (event)=> {
    this.setState({currentTodo: event.target.value, errorMessage: ""})
  }

  handleSubmit = (event) => { 
    event.preventDefault()

    const newTodo = { id: generateId(), name: this.state.currentTodo, isComplete: false }

    const updatedTodos = addTodo(this.state.todos, newTodo)
    
    this.setState({ todos: updatedTodos, currentTodo: '' })
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()

    this.setState({ errorMessage: "Please add a todo name" })
  }

  handleRemove = (id, event) => {
    event.preventDefault()

    const updatedTodos = removeTodo(this.state.todos, id)

    this.setState({todos: updatedTodos})
  }

  handleUpcoming=(param)=>{
      this.setState({isComplete: param})
  }

  render() {

    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit

    return (
      <div className="App">
        <Router>
          <nav>
            <Link to="/upcoming">Upcomming Task</Link>
            <Link to="/completed">Completed Tasking</Link>
          </nav>
          <div className="todoWrapper">
        <Switch>
          <Route exact path="/upcoming">
                <UpcomingTask 
                state={this.state.errorMessage}
                todos={this.state.todos}
                handleToggle={ this.handleToggle }
                handleOnchangeCheckbox={this.handleOnchangeCheckbox}
                handleRemove = {this.handleRemove}
                currentTodo={this.state.currentTodo}
                handleOnchangeInput={this.handleOnchangeInput}
                submitHandler={submitHandler}/>
          </Route>
          <Route exact path="/completed">
            <CompletedTask todos={this.state.todos}/>
          </Route>
        </Switch>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
