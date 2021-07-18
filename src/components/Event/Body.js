import React from "react";
import styles from "./Body.module.css";
import { motion } from "framer-motion";
import { fadeIn, fadeInWithDelay } from "../../utils/Animations";

export default function Body({ event }) {
    return (
        <section className={styles.bodyContainer}>
            <motion.img
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className={styles.bodyImage}
                src={event.fields.cover_url}
                alt={event.fields.cover_alt}
            />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInWithDelay}
            >
                <pre className={styles.bodyLeadtext}>
                    {event.fields.lead_text}
                </pre>
                <div
                    dangerouslySetInnerHTML={{
                        __html: event.fields.description,
                    }}
                />
            </motion.div>
        </section>
    );
}
