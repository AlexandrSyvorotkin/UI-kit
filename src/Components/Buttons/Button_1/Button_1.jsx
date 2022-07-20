import React from 'react';
import './Button_1.css'

const Button_1 = ({children, green, red, blue}) => {

    let classes = 'button'
    if (green) classes += ' button-green'
    if (blue) classes += ' button-blue'
    if (red) classes += ' button-red'

    return (
        <a className={classes}>
                <span>
                    {children}
                </span>
                <i></i>
        </a>
    );
};

export default Button_1;
