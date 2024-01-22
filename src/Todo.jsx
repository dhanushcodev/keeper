import { useState } from "react";

export default function Todo(){

    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]);
    function handelChange(event){
        const newvalue = event.target.value;
        setInputText(newvalue);
        console.log(newvalue);
    }

    function addItem(){
        if(inputText!='')
        setItems(
            (previousitems)=>{
               return [...previousitems,inputText];
            }
        );
        console.log(items);
        setInputText('');
    }

    function deleteitem(id){
        setItems(
            (previousitems)=>{
                return previousitems.filter(
                    (item,index)=>{
                       return index != id;
                    }
                );
            }
        );
    }

    return (
        <div className="todo">
            <h1>To-DO List</h1>
            <div className="todo-input">
                <input onChange={handelChange} type="text" placeholder="task name" value={inputText}/>
                <button onClick={addItem} >ADD</button>
            </div>
            <div className="tasks">
                <ul>
                  {  items.map((todoitem,index)=> {
                        return <div>
                           <li onClick={()=>{
                            deleteitem(index)
                           }} 
                           key={index} >{todoitem}</li>
                        </div>
                    })
                 }
                </ul>
            </div>
        </div>
    );
}