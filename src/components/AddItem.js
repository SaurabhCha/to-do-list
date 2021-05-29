import React, { useRef } from "react";

import './AddItem.css'

function AddItem(props) {

    const data = useRef();

    const addHandler = () => {
        if (data.current.value.trim()) {
            props.add({ id: Math.floor(Math.random() * 100000), data: data.current.value, completed: false });
        }
        data.current.value = "";
    }
    const keyHandler = (event) => {
        if (event.key === 'Enter') {
            console.log('enter press here! ')
        }
    }

    return (
        <React.Fragment>
            <div className="title">To do list</div>
            <input type="text" ref={data} className="input" />
            <button className="addButton" onClick={addHandler} onKeyDown={keyHandler}>Add item</button>
        </React.Fragment>
    )

}
export default AddItem;