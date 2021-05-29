import {useState} from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

import './App.css';

function App() {
  const [item, setItem] = useState({});

  const add = (data) =>{
      setItem(data)
  }
  return (
    <div className="App">
      <AddItem add={add}/>
      <ItemList newItem={item}/>
    </div>
  );
}

export default App;
