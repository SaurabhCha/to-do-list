import React, { useState, useEffect } from "react";

import './ItemList.css';

function ItemList(props) {

    const [items, setItems] = useState([]);

    const [completedItems, setCompletedItems] = useState([]);
    const [remainingItems, setRemainingItems] = useState([]);

    const[showRemaining,setShowRemaining] = useState(false);
    const[showCompleted,setShowCompleted] = useState(false)

    const { newItem } = props;

    useEffect(() => {
        if (newItem.data) {
            setItems(prevState => [...prevState, newItem])
        }
    }, [newItem])

    const handleCompleted = (id) => {
        const index = items.findIndex(item=> item.id===id);
        const copyItems = [...items]
        copyItems[index].completed = true
        setItems(copyItems)
    }

    const handleRemainingButton = () => {
        const remainingItems = items.filter(item => item.completed===false)
        setShowRemaining(true);
        setShowCompleted(false);
        setRemainingItems(remainingItems)
    }
    const handleCompletedButton = () => {
        const completedItems = items.filter(item => item.completed===true)
        setShowCompleted(true);
        setShowRemaining(false);
        setCompletedItems(completedItems)
    }
    const handleAllButton = () => {
        setShowRemaining(false);
        setShowCompleted(false);
    }
    
    let displayItems;
    if(showRemaining){
        displayItems = remainingItems;
    }
    else if(showCompleted){
        displayItems = completedItems;
    }
    else{
        displayItems = items
    }
    return (
        <React.Fragment>

            {items.length === 0 ? <div>
                <div className="addPara">Please add few items</div>
                <img className="champImg" src='/champImage.jpg' alt="Logo" />
            </div> :
                <div>
                    <div>
                        <button className={!(showRemaining || showCompleted) ? "filterbutton active" : 'filterbutton'} onClick={handleAllButton}>Show All</button>
                        <button className={showRemaining ? "filterbutton active" : 'filterbutton'} onClick={handleRemainingButton}>Show Remaining</button>
                        <button className={showCompleted ? "filterbutton active" : 'filterbutton'} onClick={handleCompletedButton}>Show Completed</button>
                    </div>
                    <div style={{ width: '50%', height: 'auto', margin: '30px 25% 50px 25%' }}>
                        <table >
                            <tbody>
                                {displayItems.map(item => <tr key={item.id} className="itemsCard"
                                    onClick={() => { handleCompleted(item.id) }}>
                                    <td style={{ fontSize: '25px', marginRight: '15px' }}><i className="gg-anchor"></i>&nbsp;</td>
                                    <td className="itemText" style={item.completed ? {textDecorationLine:'line-through'} : {}}>{item.data}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </React.Fragment>
    )

}
export default ItemList;