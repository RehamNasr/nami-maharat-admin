import React from "react";
import styles from './Header.module.css';

export const HeaderComponent = ({ appname, setappname, cartItemCount }) => { // Add cartItemCount prop
    const onclickOption = (screenName, event) => {
        event.preventDefault();
        setappname(screenName);
    };

    return (
        <header className={styles.header}>
            <h2 className={styles.appTitle}>نمي مهاراتي (for Kids) By Eman Eid</h2>
          
        </header>
    );
};