import { useEffect, useState } from "react";

export default function Keeper() {

    const storedItems = JSON.parse(localStorage.getItem('notes'));
   console.log(storedItems);

   const [isExpanded,setExpanded] = useState(false);
   
    const [inputData, setInputData] = useState({
        title: "",
        content: ""
    });

    const [notes, setNotes] = useState(storedItems!=null ? storedItems:[]);


    function createNoteCard(content,index) {
        return <li 
        className="card note-card"
        key={index}>
            <h1>{content.title}</h1>
            <h2>{content.content}</h2>
            <div 
            onClick={()=>{
                deleteNote(index)
            }}
            className="del-button"
            > <p>-</p> </div>
        </li>
    }


    function deleteNote(id){
        setNotes(
            (prev)=>{
               return prev.filter(
                    (item,index)=>{
                       return index != id;
                    }
                );
            }
        );
    }

    function addNote() {
        if(inputData.title === '' || inputData.contentv=== '') return;
        setNotes(
            (prev) => {
                return [...prev,inputData];
            }
        );
        setInputData({
            title: "",
            content: ""
        })
    }

   function displayNotes(){
     if(notes!=null){
        localStorage.setItem('notes',JSON.stringify(notes));
        return notes.map(createNoteCard);
     }
     else{
        return null;
     }
   }

   function expand(){
    setExpanded(true);
   }

    return (
        <div className="overflow">
            <header>Note Keeper</header>
            <div className="add-note" >
                <div className="card" >
                   {isExpanded &&  (
                   <input
                    className="Title"
                        onChange={(event) => {
                            setInputData(
                                (prev) => {
                                    return {
                                        title: event.target.value,
                                        content: prev.content
                                    }
                                }
                            );
                        }}
                        type="text"
                        placeholder="Title" 
                        value={inputData.title}/>
                    )}
                   
                    <textarea
                    onClick={expand}
                        onChange={(event) => {
                            setInputData(
                                (prev) => {
                                    return {
                                        title: prev.title,
                                        content: event.target.value
                                    }
                                }
                            );
                        }}
                        type="text"
                        placeholder="Take a note..." 
                        value={inputData.content}
                        rows={isExpanded ? 3:1}
                        />
                   {isExpanded && ( <button onClick={addNote} >+</button>)}
                    
                </div>
            </div>
            <ul className="notes-container">
                 {displayNotes()}
            </ul>
        </div>


    );
}