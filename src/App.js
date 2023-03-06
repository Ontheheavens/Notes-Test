import React, {useState} from "react";
import EntryList from "./components/EntryList";
import CreateEntryButton from "./components/CreateEntryButton";
import './/styles/App.css'

function App() {
    const [entries, setEntries] = useState([
        {id: 1, title: "Title", content: "Content"},
        {id: 2, title: "sdfsdfsdf", content: "Contfffffffffffffffffffffffffent"},
        {id: 3, title: "Tiassssstle", content: "Coffffffffffffffffffffffntent"}
    ])

    const addEntry = () => {
        const newEntry = {
            id: Math.random().toString(36).substr(2, 9),
            title: 'Title',
            content: '',
        };
        setEntries([...entries, newEntry]);
    };

    const deleteEntry = (id) => {
        const filtered = entries.filter((entry) => entry.id !== id);
        setEntries(filtered);
    };

    return (
    <div className="app">
        {entries.length !== 0
            ? <EntryList displayed={entries} deletion={deleteEntry}/>
            : <div className={"placeholder"}>Заметок нет</div>
        }
        <CreateEntryButton onClick={addEntry}/>
    </div>
  );
}

export default App;