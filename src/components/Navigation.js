import React from "react";
import {Link} from "react-router-dom";

function Navigation(){
    return (
        <header>
            <h1 className="navigation"><Link to="/">Aplikasi Catatan</Link></h1>
        </header>
    )
}

export default Navigation;