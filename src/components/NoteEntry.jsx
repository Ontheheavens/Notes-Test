// noinspection JSValidateTypes

import React, {useContext, useEffect, useRef, useState} from 'react';
import {useOnClickOutside} from "../hooks/useOnClickOutside";
import classes from './NoteEntry.module.css';
import {FiSave, FiMinusSquare} from "react-icons/fi";
import {CSSTransition} from "react-transition-group";
import {NotesContext} from "../App";

/**
 * Example of text area autosize functionality taken from https://upmostly.com/tutorials/autosizing-textarea-react.
 */

const NoteEntry = function (props) {
    const id = props.id
    const [content, setContent] = useState(props.content)
    const [title, setTitle] = useState(props.title)

    const ref = useRef();
    const [isEdited, setIsEdited] = useState(false);
    const [textAreaHeight, setTextAreaHeight] = useState(1);
    const [showTextAreaDelay, setShowTextAreaDelay] = useState(false);

    const [showSavedHint, setShowSavedHint] = useState(false)
    const [areChangesUnsaved, setChangesUnsaved] = useState(false)

    const buttonStyle = {"scale" : "1.5", "color": "#546991"}

    const context = useContext(NotesContext)
    const entries = context.entryData
    const setEntries = context.setEntryData

    useOnClickOutside(ref, () =>
        setIsEdited(false)
    );

    /**
     * https://stackoverflow.com/questions/15799001/scrollheight-not-resetting-after-programmatically-changing-content
     */
    const handleTextAreaChange = (event) => {
        setIsEdited(true)
        setChangesUnsaved(true)
        event.target.style.height = "0";
        setContent(event.target.value);
        //ScrollHeight value does not decrease automatically; needs a manual reset.
        const height = event.target.scrollHeight;
        const rowHeight = 20;
        const tRows = Math.ceil(height / rowHeight) - 1;
        setTextAreaHeight(tRows);
        //This is needed to make textArea accommodate content properly; otherwise it stays at minimal height after reset.
        event.target.style.height = "auto";
    }

    const handleDelete = () => {
        //Needed to prevent unauthorized swapping of content div for textArea when deleting entry.
        setShowTextAreaDelay(true)
        const filtered = entries.filter((entry) => entry.id !== id);
        setEntries(filtered);
    }

    const handleSave = () => {
        setIsEdited(false)
        setShowTextAreaDelay(true)
        setChangesUnsaved(false)
        setTimeout(() => {
            setShowSavedHint(true)
            updateEntries()
        }, 250);
        setTimeout(() => {
            setShowSavedHint(false)
            setShowTextAreaDelay(false)
        }, 1000);
    }

    const updateEntries = () => {
        const updatedEntries = entries.map((entry) => {
            if (entry.id === id) {
                return {
                    id: entry.id,
                    title: entry.title,
                    content: content,
                };
            } else {
                return entry;
            }
        });
        setEntries(updatedEntries);
    }

    const handleTextEditStart = () => {
        if (!showTextAreaDelay) {
            setIsEdited(true)
        }
    }

    return (
            <div
                className={classes.noteEntry}
                ref={ref}
            >

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
                            disabled={showSavedHint}
                            onClick={() => handleSave()}
                        >
                            <FiSave style={buttonStyle}/>
                        </button>

                        <CSSTransition
                            in={showSavedHint}
                            timeout={250}
                            unmountOnExit
                            classNames={{
                                enter: classes.savedHintEnter,
                                enterActive: classes.savedHintEnterActive,
                                exit: classes.savedHintExit,
                                exitActive: classes.savedHintExitActive,
                            }}
                        >
                            <div className={classes.savedHint}>
                                Saved
                            </div>
                        </CSSTransition>

                        <CSSTransition
                            in={areChangesUnsaved}
                            timeout={250}
                            unmountOnExit
                            classNames={{
                                enter: classes.savedHintEnter,
                                enterActive: classes.savedHintEnterActive,
                                exit: classes.savedHintExit,
                                exitActive: classes.savedHintExitActive,
                            }}
                        >
                            <div className={classes.savedHint}>
                                Changes unsaved
                            </div>
                        </CSSTransition>

                    </div>

                </div>

                { (isEdited || content === '') && !showTextAreaDelay
                    ? <textarea
                        className={classes.textArea}
                        rows={textAreaHeight}
                        defaultValue={content}
                        onChange={handleTextAreaChange}
                        placeholder="Write..."/>
                    : <div
                        className={classes.displayedEntryContent}
                        aria-disabled={showTextAreaDelay}
                        onClick={handleTextEditStart}
                    >
                        {content}
                    </div>
                }
            </div>
        );
}

export default NoteEntry;