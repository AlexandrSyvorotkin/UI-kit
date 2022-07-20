import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <h1>UI Kit</h1>
            <div className='menu'>
                <ul>
                    <Link to='/buttons'>Button`s</Link>
                    <li>Hovers</li>
                    <li>Menus</li>
                    <li>Dropdowns</li>
                    <li>SideMenus</li>
                </ul>
            </div>

        </header>
    );
};

export default Header;
