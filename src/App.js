import React, {useState} from "react";
import EntryList from "./components/EntryList";
import './/styles/App.css'
import CreateEntryButton from "./components/CreateEntryButton";
import { SlPencil } from "react-icons/sl";

function App() {
    const [entries, setEntries] = useState([
        {id: 1, title: "Title", content: "Content"},
        {id: 2, title: "sdfsdfsdf", content: "Contfffffffffffffffffffffffffent"},
        {id: 3, title: "Tiassssstle", content: "Coffffffffffffffffffffffntent"}
    ])

    const addEntry = () => {
        const newEntry = {
            id: Math.random().toString(36).substr(2, 9),
            title: 'Заголовок',
            content: '',
        };
        setEntries([...entries, newEntry]);
    };

    const deleteEntry = (id) => {
        const filtered = entries.filter((entry) => entry.id !== id);
        setEntries(filtered);
    };

    return (
    <div className="App">
        {entries.length !== 0
            ? <EntryList displayed={entries} deletion={deleteEntry}/>
            : <div className={"placeholder"}>Заметок нет</div>
        }
        <CreateEntryButton onClick={addEntry}><SlPencil/></CreateEntryButton>
    </div>
  );
}

export default App;