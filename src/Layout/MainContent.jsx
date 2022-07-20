import React from 'react';
import styles from './MainContent.css'
import Button_1 from "../Components/Buttons/Button_1/Button_1";
import Button_2 from "../Components/Buttons/Button_2/Button_2";
import {Route, Routes} from "react-router-dom";
import Buttons from "../Components/Buttons/Buttons";

const MainContent = () => {
    return (
        <div className='main_content'>
            <Routes>
                <Route path='buttons' element={<Buttons/>}/>
            </Routes>
        </div>
    );
};

export default MainContent;
