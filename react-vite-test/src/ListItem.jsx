import React from 'react';

const ListItem = (props) => {
    return (
        <li style={{listStyleType:"none", display: "flex",alignItems:"center"}}>
            <input  type="checkbox" checked={props.checked} />
            <p>{props.title}
               
            </p>
            <button style={{marginLeft:'auto'}}>Delete</button>
            <span>{props.children}</span>
        </li>



    );
};

export default ListItem;