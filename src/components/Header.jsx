import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <header>

            <Link className="vanlife-header" to={'/'}><h1>#VANLIFE</h1></Link>        

            <div className="header--right">
                <Link to={'/about'}><h3>About</h3></Link>
                <Link to={'/vans'}><h3>Vans</h3></Link>
            </div>
        </header>
    )
}