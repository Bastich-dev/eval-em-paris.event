import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import routes from "../../routes";
import { useLocation } from "react-router-dom";

const Navbar = (props) => {
    const location = useLocation();

    return (
        <nav className={styles.navbar}>
            <ul className={styles.listNav + " container"}>
                {routes
                    .filter((route) => route.nav)
                    .map((route) => (
                        <Link
                            className={styles.link}
                            to={route.path}
                            style={{
                                backgroundColor:
                                    location.pathname === route.path && "white",
                                color:
                                    location.pathname === route.path &&
                                    "var(--primary-bg-color)",
                            }}
                        >
                            {route.name}
                        </Link>
                    ))}
            </ul>
        </nav>
    );
};

export default Navbar;
