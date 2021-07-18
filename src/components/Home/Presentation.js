import React from "react";
import styles from "./Presentation.module.css";
import { motion } from "framer-motion";
import { fadeLeft, fadeLeftWithDelay } from "../../utils/Animations";
export default function Presentation() {
    return (
        <section>
            <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeLeft}
                className={styles.title}
            >
                Bienvenue sur Paris Events
            </motion.h1>
            <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeLeftWithDelay}
                className={styles.desc}
            >
                L'application qui permet de rechercher en direct les prochains
                événements Parisiens
            </motion.p>
        </section>
    );
}
