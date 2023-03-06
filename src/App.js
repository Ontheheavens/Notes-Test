import React, {createContext, useEffect, useState} from "react";
import EntryList from "./components/EntryList";
import CreateEntryButton from "./components/CreateEntryButton";
import './/styles/App.css'

function App() {

    const defaultEntries = [{id: 1, title: "Title", content: "Content"},
        {id: 2, title: "Title 2", content: "Confettent"},
        {id: 3, title: "Title 3", content: "Thanks Jaghaimo"}]

    const fetchInitialEntries = () => {
        const data = localStorage.getItem("entriesData");
        return data ? JSON.parse(data) : defaultEntries;
    }

    const [entries, setEntries] = useState(fetchInitialEntries())

    useEffect(() => {
        saveEntries()
    }, [entries]);

    const addEntry = () => {
        const newEntry = {
            id: Math.random().toString(36).substr(2, 9),
            title: 'Title',
            content: '',
        };
        setEntries([...entries, newEntry]);
    };

    const saveEntries = () => {
        const data = JSON.stringify(entries);
        localStorage.setItem("entriesData", data);
    }

    const data = {
        entryData: entries,
        setEntryData: setEntries,
    };

    return (
    <div className="app">
        {entries.length !== 0
            ?
            <NotesContext.Provider value={data}>
                <EntryList displayed={entries}/>
            </NotesContext.Provider>
            : <div className={"placeholder"}>Notes empty.</div>
        }
        <CreateEntryButton onClick={addEntry}/>
    </div>
  );
}

export const NotesContext = createContext(null)

export default App;