import React from "react";
import styles from "./Presentation.module.css";

export default function Presentation() {
    return (
        <section>
            <h1 className={styles.title}>Bienvenue sur Paris Events</h1>
            <p className={styles.desc}>
                L'application qui permet de rechercher en direct les prochains
                événements Parisiens
            </p>
        </section>
    );
}
