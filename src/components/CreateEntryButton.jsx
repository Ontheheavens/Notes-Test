import React from 'react';
import classes from './CreateEntryButton.module.css'

const CreateEntryButton = ({children, ...props}) => {
    return (
        <button className={classes.createEntryButton}
                {...props}
        >{children}</button>
    );
};

export default CreateEntryButton;