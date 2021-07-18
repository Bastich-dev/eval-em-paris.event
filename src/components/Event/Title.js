import React from "react";
import styles from "./Title.module.css";
import { motion } from "framer-motion";
import { fadeLeft } from "../../utils/Animations";

export default function Title({ event }) {
    return (
        <motion.section initial="hidden" animate="visible" variants={fadeLeft}>
            <h1 className={styles.title}>{event.fields.title}</h1>
            <h2 className={styles.subtitle}>{event.fields.contact_name}</h2>
        </motion.section>
    );
}
