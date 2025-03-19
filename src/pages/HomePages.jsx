import React, { Component } from 'react'
import  TodoForm  from '../components/TodoForm'
import Footer from '../components/Footer'

import { Container, Tab, Tabs } from 'react-bootstrap'
import TodoCard from '../components/TodoCard'
import TodoHeader from '../components/TodoHeader'

export class HomePages extends Component {
    state = {
        activeTab: "all",
        todos: [
            {
                name: "Playing football",
                date: "28.09.2023",
                importance: 'high'
            },
            {
                name: "Reading book",
                date: "27.09.2023",
                importance: 'middle'
            },
            {
                name: "Doing homwork",
                date: "29.09.2023",
                importance: 'low'
            }
        ],
        todo: {
            name: '',
            date: new Date().toISOString().split("T")[0],
            importance: 'high'
        }
    }
    render() {
        const { todos, todo, activeTab } = this.state
        console.log(todo);
        
        const changeTab = (key) => {
            this.setState({activeTab: key})
        }
    
        return (
            <Container>
                <TodoForm todo={todo} />
                <TodoHeader/>
                <Tabs
                    activeKey={activeTab}
                    onSelect={changeTab}
                    id="uncontrolled-tab-example"
                    className="mt-3 mb-3"
                    variant="pills"
                    fill
                >
                    <Tab eventKey="all" title="All">
                        {todos.map((items, i) => <TodoCard key={i} {...items}/>)}
                    </Tab>
                    <Tab eventKey="done" title="Done">
                        Done
                    </Tab>
                    <Tab eventKey="undone" title="Undone">
                        Undone
                    </Tab>
                </Tabs>
                <Footer />
            </Container>
        )
    }
}

export default HomePages
