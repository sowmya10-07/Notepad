import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {
    const [notes, createNote] = useState([]);

    function addNote(newNote) {
        createNote(oldNotes => {
            return [...oldNotes, newNote];
        });
    }

    function removeNote(id) {
        createNote(oldNotes => {
            return oldNotes.filter((noteContent, serial) => {
                return serial !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateNote add={addNote} />
            {notes.map((noteContent, serial) => {
                return (
                    <Note
                        key={serial}
                        id={serial}
                        heading={noteContent.heading}
                        text={noteContent.text}
                        onDelete={removeNote}
                    />
                );
            })}
        </div>
    );
}

export default App;