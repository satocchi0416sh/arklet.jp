import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Header.css"

const Header = () => {

    const history = useHistory();

    return (
        <>
            <header>
                <h1>ARKLET</h1>
                <nav className="gnav">
                    <ul className="menu">
                        <li><a href="about" onClick={e => { e.preventDefault(); history.push("/about"); }}>会社概要</a></li>
                        <li><a href="recruit" onClick={e => { e.preventDefault(); history.push("/recruit"); }}>採用情報</a></li>
                        <li><a href="contact" onClick={e => { e.preventDefault(); history.push("/contact"); }}>お問い合わせ</a></li>
                    </ul>
                </nav>
            </header>
            <div className="menu-icon">
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
            </div>
        </>
    )
}

export default Header
