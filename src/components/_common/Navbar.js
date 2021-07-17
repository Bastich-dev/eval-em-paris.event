import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import routes from "../../routes";

const Navbar = props => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.listNav + " container"}>
                {routes
                    .filter(route => route.nav)
                    .map(route => (
                        <Link className={styles.link} to={route.path}>
                            {route.name}
                        </Link>
                    ))}
            </ul>
        </nav>
    );
};

export default Navbar;
