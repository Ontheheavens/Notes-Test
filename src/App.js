import React, {createContext, useEffect, useState} from "react";
import EntryList from "./components/EntryList";
import CreateEntryButton from "./components/CreateEntryButton";
import './/styles/App.css'

function App() {

    const defaultEntries = [{id: 1, date: "04.01.1649, 22:00:28", content: "The word of the Lord came expressly " +
            "to me, saying, Sonne of man write a Roule, and those words, from my mouth, to the Great ones, saying, " +
            "thus saith the Lord: \n" +
            "\n" +
            "Slight not this Roule, neither laugh at it, least I slight you, " +
            "and cause all men to slight and scorne you; " +
            "least I destroy you, and laugh at your destruction, &c. \n" +
            "\n" +
            "This is (and with a witnesse, some of you shall finde it, to be) an edg’d toole; " +
            "and there’s no jesting with it, or laughing at it. \n" +
            "\n" +
            "It’s a sharp sword, sharpened and also fourbished – " +
            "No sleepy Dormouse shall dare to creep up the edge of it."
    }]

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
            date: createTimestamp(),
            content: '',
        };
        setEntries([...entries, newEntry]);
    };

    const createTimestamp = () => {
        const now = Date.now();
        const fullTimestamp = new Intl.DateTimeFormat('ru-RU',
            {year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'}).format(now);
        console.log(fullTimestamp)
        return fullTimestamp
    }

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
        <CreateEntryButton onClick={addEntry}/>
        {entries.length !== 0
            ?
            <NotesContext.Provider value={data}>
                <EntryList displayed={entries}/>
            </NotesContext.Provider>
            : <div className={"placeholder"}>Notes empty.</div>
        }
    </div>
  );
}

export const NotesContext = createContext(null)

export default App;