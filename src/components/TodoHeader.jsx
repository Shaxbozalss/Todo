import React, { Component, createRef } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

export class TodoHeader extends Component {
    constructor(props) {
      super(props)
    this.searching = createRef()
      this.state = {
         
      }
    }
    
  render() {
    const handleSearch = (e) => {
        console.log(e.target.value);
        
    }
    return (
      <div>
         <InputGroup className="mb-3">
        <Form.Control
          onChange={handleSearch}
          placeholder="Searching todo..."
          ref={this.searching}
        />
        <InputGroup.Text >Importance</InputGroup.Text>
      </InputGroup>
      </div>
    )
  }
}

export default TodoHeader
