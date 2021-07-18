import React, { useState, useEffect } from "react";
import styles from "./ListSearchEvents.module.css";
import WithLoading from "../_common/WithLoading";
import API_OpenDataParis from "../../utils/API_OpenDataParis";
import CardEvent from "../_common/CardEvent";

export default function ListSearchEvents(props) {
    const [listEvent, setlistEvent] = useState();

    const [formInput, setformInput] = useState({
        search: "",
        date: "",
        city: "",
    });

    useEffect(() => {
        API_OpenDataParis.getListEventsFromSearch({
            search: "",
            date: "",
            city: "",
        })
            .then((events) => setlistEvent(events.map((event) => event.record)))
            .catch(() => setlistEvent(null));
    }, []);

    const searchEvent = (e) => {
        e.preventDefault();
        API_OpenDataParis.getListEventsFromSearch(formInput)
            .then((events) => setlistEvent(events.map((event) => event.record)))
            .catch(() => setlistEvent(null));
    };

    return (
        <section>
            <h1 className={styles.title}>
                Lister de futurs événements à Paris
            </h1>
            <form onSubmit={searchEvent} className={styles.containerForm}>
                <input
                    value={formInput.search}
                    onChange={(e) =>
                        setformInput({ ...formInput, search: e.target.value })
                    }
                    name="search"
                    className={styles.inputSearch}
                    placeholder="Rechercher..."
                    type="text"
                />
                {/* <input
                    value={formInput.date}
                    onChange={(e) =>
                        setformInput({ ...formInput, date: e.target.value })
                    }
                    name="date"
                    className={styles.inputSearch}
                    placeholder="Date souhaitée"
                    type="date"
                />
                <input
                    value={formInput.city}
                    onChange={(e) =>
                        setformInput({ ...formInput, city: e.target.value })
                    }
                    name="city"
                    className={styles.inputSearch}
                    placeholder="Ville"
                    type="text"
                /> */}

                <button className={styles.submitButton} type="submit">
                    Rechercher
                </button>
            </form>

            <WithLoading
                ifLoading={listEvent === undefined}
                ifEmpty={listEvent?.length === 0}
                componentIfEmpty={<div>Aucun énévement</div>}
                ifError={listEvent === null}
            >
                <div className="displayEvents">
                    {listEvent?.map((event, key) => (
                        <CardEvent key={key} event={event} index={key} />
                    ))}
                </div>
            </WithLoading>
        </section>
    );
}
