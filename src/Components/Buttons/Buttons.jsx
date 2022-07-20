import React from 'react';
import Button_1 from "./Button_1/Button_1";
import './Buttons.css'

const Buttons = () => {
    return (
        <div className='buttons'>
            <Button_1 green>Hover Me!</Button_1>
            <Button_1 blue>Hover Me!</Button_1>
            <Button_1 red>Hover Me!</Button_1>
        </div>
    );
};

export default Buttons;
