// noinspection JSValidateTypes

import React, {useRef, useState} from 'react';
import {useOnClickOutside} from "../hooks/useOnClickOutside";

const NoteEntry = function (props) {
    const [content, setText] = useState(props.content)
    const [title, setTitle] = useState(props.title)

    const ref = useRef();
    const [isShown, setIsShown] = useState(false);
    useOnClickOutside(ref, () => setIsShown(false));

    return (
            <div className="noteEntry"
                 ref={ref}
                 onClick={() => setIsShown(true)}>
                { isShown &&
                    <div>TEST</div>
                }
                <div className="entryTitle">{title}</div>
                <textarea className="textArea" defaultValue={content}/>
            </div>
        );
}

export default NoteEntry;