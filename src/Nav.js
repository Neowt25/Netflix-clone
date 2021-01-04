import React, { useEffect, useState } from 'react';
import './Nav.css';
const Nav = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll");
            // eslint-disable-next-line
        }, []
    })

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/800px-Netflix_2015_N_logo.svg.png" alt="" />
            <img className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/800px-Netflix_2015_N_logo.svg.png" alt="" />

        </div>
    )
}

export default Nav
