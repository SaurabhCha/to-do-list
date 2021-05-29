import React, { useState, useEffect } from "react";

import './ItemList.css'

function ItemList(props) {

    const [items, setItems] = useState([]);
    const { newItem } = props;

    useEffect(() => {
        if (newItem.data) {
            setItems(prevState => [...prevState, newItem])
        }
    }, [newItem])

    return (
        <React.Fragment>
            <div>
                <button className="button">Show All</button>
                <button className="button">Show Remaining</button>
                <button className="button">Show Completed</button>
            </div>
            {items.length === 0 ? <p>Please add few items</p> :
                <div>
                    {items.map(item => <p key={item.id}>{item.data}</p>)}
                </div>
            }
        </React.Fragment>
    )

}
export default ItemList;