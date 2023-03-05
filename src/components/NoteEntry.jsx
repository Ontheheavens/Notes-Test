// noinspection JSValidateTypes

import React, {useRef, useState} from 'react';
import {useOnClickOutside} from "../hooks/useOnClickOutside";
import classes from './NoteEntry.module.css';

/**
 * Text area autosize functionality taken from https://upmostly.com/tutorials/autosizing-textarea-react.
 */

const NoteEntry = function (props) {
    const id = props.id
    const [content, setContent] = useState(props.content)
    const [title, setTitle] = useState(props.title)

    const ref = useRef();
    const [isEdited, setIsEdited] = useState(false);
    const [textAreaHeight, setTextAreaHeight] = useState(1);

    useOnClickOutside(ref, () =>
        setIsEdited(false)
    );

    const handleContentChange = (event) => {
        setContent(event.target.value);
        const height = event.target.scrollHeight;
        const rowHeight = 15;
        const tRows = Math.ceil(height / rowHeight) - 2;
        if (tRows > textAreaHeight) {
            setTextAreaHeight(tRows);
        }
    }

    return (
            <div className={classes.noteEntry}
                 ref={ref}
                 onClick={() => setIsEdited(true)}>

                <div className={classes.entryTitle}>
                    {props.number + ". "}
                    {title}
                </div>

                <button onClick={
                    () => props.deletion(id)
                }>
                    DELETE
                </button>

                { isEdited || content === ''
                    ? <textarea
                        className={classes.textArea}
                        rows={textAreaHeight}
                        defaultValue={content}
                        onChange={handleContentChange}
                        placeholder="Текст заметки..."/>
                    : <div className={classes.displayedEntryContent}>{content}</div>
                }
            </div>
        );
}

export default NoteEntry;