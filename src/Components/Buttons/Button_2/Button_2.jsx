import React from 'react';
import styles from './Button_2.module.css'

const Button_2 = ({children}) => {
    return (
        <a className={styles.button}>
            {children}
        </a>
    );
};

export default Button_2;
