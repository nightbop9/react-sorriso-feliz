import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header() {
    return (
        <header className="header">
            <h1>Clínica odontológica Sorriso Feliz</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}