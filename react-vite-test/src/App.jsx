import React from 'react';
import ListItem from './ListItem';

const taskList = [
    {
        id: 1,
        text: "Title 1",
        checked: false
    },
    {
        id: 2,
        text: "Title 2",
        checked: true
    },
    {
        id: 3,
        text: "Title 3",
        checked: false
    },
    {
        id: 4,
        text: "Title 4",
        checked: true
    },
    {
        id: 5,
        text: "Title 5",
        checked: false
    },
]

const App = () => {
    return (
        <div>
            <h1>React-Vite-Test</h1>
            <ul>
                {
                    taskList.map(item => <ListItem key={item.id} title={item.text} checked={item.checked}><button>Edit</button></ListItem>)
                }
            </ul>
        </div>
    );
};

export default App;