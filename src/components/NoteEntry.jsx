// noinspection JSValidateTypes

import React, {useRef, useState} from 'react';
import {useOnClickOutside} from "../hooks/useOnClickOutside";
import classes from './NoteEntry.module.css';
import {FiSave, FiMinusSquare} from "react-icons/fi";

/**
 * Example of text area autosize functionality taken from https://upmostly.com/tutorials/autosizing-textarea-react.
 * Note: this class could use some decomposition, for one, header could be a standalone component.
 * Yet, given circumstance, this isn't the most important matter to deal with.
 */

const NoteEntry = function (props) {
    const id = props.id
    const [content, setContent] = useState(props.content)
    const [title, setTitle] = useState(props.title)

    const ref = useRef();
    const [isEdited, setIsEdited] = useState(false);
    const [textAreaHeight, setTextAreaHeight] = useState(1);
    const [deleting, setDeleting] = useState(false);

    const buttonStyle = {"scale" : "1.5", "color": "#546991"}

    useOnClickOutside(ref, () =>
        setIsEdited(false)
    );

    /**
     * Spent about an hour debugging this; Google and StackOverflow info being scarce, had to experiment.
     * Here's the page that got me to the solution:
     * https://stackoverflow.com/questions/15799001/scrollheight-not-resetting-after-programmatically-changing-content
     */
    const handleTextAreaChange = (event) => {
        event.target.style.height = "0";
        setContent(event.target.value);
        //ScrollHeight value does not decrease automatically; needs a manual reset.
        const height = event.target.scrollHeight;
        const rowHeight = 20;
        const tRows = Math.ceil(height / rowHeight) - 1;
        setTextAreaHeight(tRows);
        console.log(height)
        //This is needed to make textArea accommodate content properly; otherwise it stays at minimal height after reset.
        event.target.style.height = "auto";
    }

    const handleDelete = () => {
        //Needed to prevent unauthorized swapping of content div for textArea when deleting entry.
        setDeleting(true)
        props.deletion(id)
    }

    return (
            <div className={classes.noteEntry}
                 ref={ref}
                 onClick={() => setIsEdited(true)}>

                <div className={classes.entryHeader}>

                    <div className={classes.entryTitle}>
                        {props.number + ". "}
                        {title}
                    </div>

                    <div className={classes.buttonSection}>
                        <button
                            className={classes.deleteButton}
                            onClick={handleDelete}
                        >
                            <FiMinusSquare style={buttonStyle}/>
                        </button>
                        <button
                            className={classes.saveButton}
                        >
                            <FiSave style={buttonStyle}/>
                        </button>
                        <div
                            className={classes.saveHint}
                        >
                            Saved
                        </div>
                    </div>

                </div>

                { (isEdited || content === '') && !deleting
                    ? <textarea
                        className={classes.textArea}
                        rows={textAreaHeight}
                        defaultValue={content}
                        onChange={handleTextAreaChange}
                        placeholder="Write..."/>
                    : <div className={classes.displayedEntryContent}>{content}</div>
                }
            </div>
        );
}

export default NoteEntry;