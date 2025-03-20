import React from "react";
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.facebook.com/suaClinica" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/suaClinica" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <p>&copy; {new Date().getFullYear()}</p>
            <p>Desenvolvido por: Dev XY
            </p>
        </footer>
    );
}