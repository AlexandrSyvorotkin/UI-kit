import React from 'react';
import styles from './Button_1.module.css'

const Button_1 = ({children}) => {
    return (
        <a className={styles.button}>
                <span>
                    {children}
                </span>
                <i></i>
        </a>
    );
};

export default Button_1;
