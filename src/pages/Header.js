import React from "react";
import "./Header.css"
import fb from "./image/Facebook_logo.png"
import { NavLink } from "react-router-dom";

const Headers = () => {
    const activeStyle = {
        backgroundColor : 'red',
        borderBottom: '6px solid',
        borderHeigth: '1px',
    };
    return (
        <header className="header bgcolor">
            <div className="h_contents bgcolor">
                <NavLink to="/">
                    <img src={fb} alt="로고" className="bgcolor image" >
                    </img>
                </NavLink>
                <input className="search" placeholder="Facebook 검색" />
                <ul className="navigation bgcolor">
                    <li className="navigationli bgcolor">
                        <NavLink style={({ isActive }) => isActive ? activeStyle : {}} to="/home/Home" className="bgcolor">
                            🏠
                        </NavLink>
                    </li>
                    <li className="navigationli bgcolor">
                        <NavLink style={({ isActive }) => isActive ? activeStyle : {}} to="/home/People" className="bgcolor">
                            👩‍👩‍👧‍👦
                        </NavLink>
                    </li>
                    <li className="navigationli bgcolor">
                        <NavLink style={({ isActive }) => isActive ? activeStyle : {}} to="/home/Game" className="bgcolor">
                            🎮
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Headers;