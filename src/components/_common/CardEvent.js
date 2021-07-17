import React from "react";
import styles from "./ListNewEvents.module.css";

export default function ListNewEvents(props) {
    return (
        <section>
            <h2 className={styles.title}>Actualités</h2>
            <p className={styles.desc}>Le dernier événement publié :</p>
        </section>
    );
}
