import React, { useState } from 'react';
import styles from './menu.module.css';

export default function Menu() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <header className={styles.header}>
            <div className={styles.menuContainer}>
                <button className={styles.menuIcon} onClick={toggleMenu}>
                    <div className={styles.iconBar}></div>
                    <div className={styles.iconBar}></div>
                    <div className={styles.iconBar}></div>
                </button>
                <div className={styles.brand}>Brand</div>
                <button className={styles.profileIcon}>
                    <span role="img" aria-label="user icon">👤</span>
                </button>
            </div>

            {isExpanded && (
                <nav className={styles.menuOptions}>
                    <ul>
                        <li>Opção 1</li>
                        <li>Opção 2</li>
                        <li>Opção 3</li>
                        <li>Opção 4</li>
                    </ul>
                </nav>
            )}
        </header>
    );
};