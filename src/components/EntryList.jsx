import React from 'react';
import NoteEntry from "./NoteEntry";

const EntryList = (props) => {
    return (
        <div className="entryList">
            {props.displayed.map((entry, index) =>
                <NoteEntry
                    key={entry.id}
                    id={entry.id}
                    number={index + 1}
                    title={entry.title}
                    content={entry.content}
                    deletion={props.deletion}
                />
            )}
        </div>
    );
};

export default EntryList;