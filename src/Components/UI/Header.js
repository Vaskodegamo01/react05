import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </nav>
        </div>

    )
};

export default Header;