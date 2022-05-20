import React from 'react';
import styles from './MainContent.module.css'
import Button_1 from "../Components/Buttons/Button_1/Button_1";
import Button_2 from "../Components/Buttons/Button_2/Button_2";

const MainContent = () => {
    return (
        <div className={styles.main_content}>
            <Button_1>Hover Me!</Button_1>
            <Button_2>Hover me!</Button_2>
        </div>
    );
};

export default MainContent;
