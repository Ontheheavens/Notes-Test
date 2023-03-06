import React from 'react';
import classes from './CreateEntryButton.module.css'
import { FiPlusSquare } from "react-icons/fi";

const CreateEntryButton = ({...props}) => {
    const buttonStyle = {"scale" : "1.5", "color": "#546991"}
    return (
        <button className={classes.createEntryButton}
                {...props}
        ><FiPlusSquare style={buttonStyle}/></button>
    );
};

export default CreateEntryButton;