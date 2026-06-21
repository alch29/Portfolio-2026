import burgerClosed from '../assets/icons/burger-closed.svg';
import burgerOpen from '../assets/icons/burger-open.svg';
import logo from '../assets/icons/logo.svg';
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = ['Hjem', 'Portfolio', 'Om mig', 'Kontakt'];

    return (
        <header>
            <div className="header">
                <div className="header__logo">
                    <img src={logo} alt="Logo Aleksandra Christensen" />
                    <div>
                        <p>Aleksandra <br></br> Christensen</p>
                    </div>
                </div>
                <button
                    className="header__burger"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Luk menu' : 'Åbn menu'}
                    aria-expanded={isMenuOpen}
                >
                    <img src={isMenuOpen ? burgerOpen : burgerClosed} alt="hamburger-menu icon" />
                </button>
            </div>
            <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                <ul className="header__menu-items">
                    {menuItems.map((item) => (
                        <li key={item} onClick={() => setIsMenuOpen(false)}>
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;