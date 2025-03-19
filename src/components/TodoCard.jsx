import React, { Component } from 'react'
import { Alert, Button } from 'react-bootstrap'

export class TodoCard extends Component {
    render() {
        const colors = {
            high: "secondary",
            middle: "danger",
            low: "info"
        }
        const { name, date, importance } = this.props
        return (
            <Alert variant={`${colors[importance]}`}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <time>{date}</time> <span>{name}</span>
                    </div>
                    <div>
                        <Button className='me-3' variant='warning'>Edit</Button>
                        <Button className='me-3' variant='success'>Done</Button>
                        <Button variant='danger'>Delete</Button>
                    </div>
                </div>
            </Alert>
        )
    }
}

export default TodoCard