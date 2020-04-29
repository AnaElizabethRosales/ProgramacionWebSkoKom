import React from "react";
import './Logo.css';

const Logo = (config) => {
    return(
        <div>
            <img src={'img/coso3.jpg'} className={'logo'}/>
            {config.systemName}
        </div>
    )
}
export default Logo;