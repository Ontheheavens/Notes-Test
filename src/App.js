import React, {useState} from "react";
import EntryList from "./components/EntryList";
import './/styles/App.css'

function App() {
    const [entries, setEntries] = useState([
        {id: 1, title: "Title", content: "Content"},
        {id: 2, title: "sdfsdfsdf", content: "Contfffffffffffffffffffffffffent"},
        {id: 3, title: "Tiassssstle", content: "Coffffffffffffffffffffffntent"}
    ])
    return (
    <div className="App">
        <EntryList displayed={entries}/>
        <button className="newEntry">Создать заметку</button>
    </div>
  );
}

export default App;
