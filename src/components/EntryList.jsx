import React from 'react';
import NoteEntry from "./NoteEntry";

const EntryList = (props) => {
    return (
        <div className="entryList">
            {props.displayed.map(entry =>
                <NoteEntry title={entry.title} content={entry.content}/>
            )}
        </div>
    );
};

export default EntryList;