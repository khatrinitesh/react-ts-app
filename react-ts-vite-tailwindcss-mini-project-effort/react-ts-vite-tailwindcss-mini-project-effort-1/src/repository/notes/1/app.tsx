import React  from 'react';
// import './style.css';

const CustmoApp = () => {
    const notes = [
        { id: 1, content: 'Note 1' },
        { id: 2, content: 'Note 2' },
        { id: 3, content: 'Note 3' },
    ];


    const handleNote = (id:number) => {
        console.log(`Note id ID ${id} clicked`)
    }
      

  return (
    <>
       <NotedApp notes={notes} onNoteClick={handleNote}/>
    </>
  )
}

export default CustmoApp

interface Note{
    id:number;
    content:string;
}

interface Props{
    notes:Note[];
    onNoteClick:(id:number) => void;
}

const NotedApp:React.FC<Props> = ({notes,onNoteClick}) => {
    return(
        <>
         <h2>Notes:</h2>
         <ul>
            {notes.map((note) => (
                <li key={note.id} onClick={() => onNoteClick(note.id)}>
                    {note.content}
                </li>
            ))}
         </ul>
        </>
    )
}
