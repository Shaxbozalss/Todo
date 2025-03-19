import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
export class TodoForm extends Component {
    render() {
        const { todo, handleTodo } = this.props
        const submit = (e) => {
            e.preventDefault()
        }
        console.log(todo);
        
        
        return (
            <Form noValidate className='w-50 m-auto'  onSubmit={submit}>
                <Form.Group controlId="name">
                    <Form.Label>Todo Name</Form.Label>
                    <Form.Control
                        onChange={handleTodo}
                        defaultValue={todo.name}
                        required
                        type="text"
                    />
                    <Form.Control.Feedback type='invalid'>Please !</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="date">
                    <Form.Label>Todo Date</Form.Label>
                    <Form.Control
                        onChange={handleTodo}
                        defaultValue={todo.date}
                        required
                        type="date"
                    />
                    <Form.Control.Feedback type='invalid'>Please !</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="importance">
                    <Form.Label> Importance</Form.Label>
                    <Form.Select onChange={handleTodo} defaultValue={todo.importance}>
                        <option value="high">High</option>
                        <option value="middle">Middle</option>
                        <option value="low">Low</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>Please !</Form.Control.Feedback>
                </Form.Group>
                <Button className='w-100 mt-3' type='submit'>Add Todo</Button>
            </Form>
        )
    }
}

export default TodoForm