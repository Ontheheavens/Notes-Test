import React, {useEffect, useRef} from 'react';

const EntryInputField = (props) => {

    const ref = useRef(null)

    useEffect(() => {
        const height = ref.current.scrollHeight;
        const rowHeight = 20;
        const tRows = Math.ceil(height / rowHeight) - 1;
        ref.current.rows = tRows
    }, [])

    return (
        <textarea
            ref={ref}
            className={props.className}
            rows={props.rows}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            placeholder="Write..."/>
    );
};

export default EntryInputField;