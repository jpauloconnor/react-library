//Huge credit necessary here: https://codepen.io/Retzudo/pen/PNKEYv
import React from 'react';
import { Component } from 'react';
import _ from 'lodash';

class NewTodo extends Component {
    create(event) {
        event.preventDefault();
        let text = this.refs.newTodoText.value;
        if (text) {
            this.props.createTask(text);
            console.log(this.props)
            this.refs.newTodoText.value = '';
        }
    }
    
    render() {
        return (
            <form onSubmit={this.create.bind(this)}>
                <label>New TODO:</label> <input type="text" ref="newTodoText"/> <button className="button" type="submit">+</button>
            </form>
        );
    }
}

class TodoList extends Component {
    render() {
        let items = [];
        let todos = _.sortBy(this.props.todos, 'done');
        
        for (let index in todos) {
            items.push(
                <Todo todo={todos[index]} key={index} toggle={this.props.toggle}/>
            );
        }
        
        return (
            <ul>
                {items}
            </ul>
        );
    }
}

class Todo extends Component {
    done(event) {
        event.preventDefault();

        this.props.toggle(this.props.todo);
        console.log(this.props);
    }

    render() {
        let todo = this.props.todo;
        console.log('todo:', todo);
        if (todo.done) {
            return (
                <li>
                    <del>{todo.text}</del> <a href="" onClick={this.done.bind(this)}>✓</a>
                </li>
            );
        } else {
            return (
                <li>
                    {todo.text} <a href="" onClick={this.done.bind(this)}>✓</a>
                </li>
            );
        }
    }
}

export default class TodoApp extends Component {
    constructor() {
        super();
        
        this.state = {
            todos: [
                {
                    text: 'Do stuff',
                    done: false
                },
                {
                    text: 'Done thing',
                    done: true
                },
                {
                    text: 'Other stuff',
                    done: false
                }
            ]
        };
    }
    
    createTask(text) {
        this.state.todos.push({
            text,
            done: false
        });
        
        this.setState({todos: this.state.todos});
    }
    
    toggleTask(todo) {
        let task = _.find(this.state.todos, todo);
        task.done = !task.done;
        this.setState({todos: this.state.todos});
    }
    
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1 className="section-title">React To Do List</h1>

                    <hr className="key-points" />

                    <p>lorem ipsum.</p>
                    <ul>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                    </ul>

                    <hr className="explanation" />

                    <p>lorem ipsum.</p>


                    <hr className="codepen" /> {/*change to something else, like example or project*/}

                    <NewTodo createTask={this.createTask.bind(this)} />
                    <TodoList todos={this.state.todos} toggle={this.toggleTask.bind(this)} />

                    <p>Now, let's see a timer in React.</p>
                    <button id="butn" className="button">Next</button>
                </div>
            </div>
        );
    }
}
