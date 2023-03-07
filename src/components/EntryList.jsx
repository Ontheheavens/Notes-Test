import React from 'react';
import NoteEntry from "./NoteEntry";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import styles from './EntryList.module.css';

const EntryList = (props) => {
    return (
        <div className={styles.entryList}>
            <TransitionGroup className={styles.entryListContainer}>
                {props.displayed.map((entry, index) =>
                    <CSSTransition
                        key={entry.id}
                        timeout={500}
                        classNames={{
                            enter: styles.entryItemEnter,
                            enterActive: styles.entryItemEnterActive,
                            exit: styles.entryItemExit,
                            exitActive: styles.entryItemExitActive,
                        }}
                    >
                        <NoteEntry
                            id={entry.id}
                            number={index + 1}
                            date={entry.date}
                            content={entry.content}
                            deletion={props.deletion}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default EntryList;