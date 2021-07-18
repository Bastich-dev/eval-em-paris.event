import React from "react";
import styles from "./Title.module.css";

export default function Title({ event }) {
    return (
        <section>
            <h1 className={styles.title}>{event.fields.title}</h1>
            <h2 className={styles.subtitle}>{event.fields.contact_name}</h2>
        </section>
    );
}
