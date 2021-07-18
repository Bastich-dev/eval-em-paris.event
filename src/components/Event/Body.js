import React from "react";
import styles from "./Body.module.css";

export default function Body({ event }) {
    return (
        <section className={styles.bodyContainer}>
            <img
                className={styles.bodyImage}
                src={event.fields.cover_url}
                alt={event.fields.cover_alt}
            />
            <pre className={styles.bodyLeadtext}>{event.fields.lead_text}</pre>
            <div
                dangerouslySetInnerHTML={{ __html: event.fields.description }}
            />
        </section>
    );
}
