import React from "react";
import styles from "./Sidebar.module.css";
import FavoriteButton from "../_common/FavoriteButton";
import FavoritesContext from "../../utils/FavoritesContext";
// import Map from "./Map";
export default function Sidebar({ event }) {
    const { favoritesEvents, updateFavoritesEvents } =
        React.useContext(FavoritesContext);

    console.log(event);

    const handleFavorite = () => {
        if (favoritesEvents.indexOf(event.id) > -1) {
            updateFavoritesEvents(
                favoritesEvents.filter((fav) => fav !== event.id)
            );
        } else {
            updateFavoritesEvents([...favoritesEvents, event.id]);
        }
    };

    // Pour filtrer les dates à venir  et pas tout les événements
    let listDates = event.fields.date_description
        .split("<br />")
        .join(" ")
        .split("Le")
        .join("###Le")
        .split("###");
    listDates.shift();

    const keysToDelete = event.fields.occurrences
        .split(";")
        .map((el, key) => {
            if (new Date(el.split("_")[0]).getTime() < new Date().getTime())
                return key;
            else return null;
        })
        .filter((e) => e !== null);

    listDates = listDates.filter(
        (el, key) => keysToDelete.findIndex((e) => e === key) === -1
    );

    const toggle = favoritesEvents.indexOf(event.id) > -1;

    return (
        <section className={styles.sidebar}>
            <div className={styles.sidebarFavButton} onClick={handleFavorite}>
                <FavoriteButton toggle={toggle} />
                <span
                    style={{
                        fontWeight: toggle ? "bold" : "normal",
                        color: toggle ? "var(--variant-3-bg-color)" : "black",
                    }}
                >
                    {toggle ? "Sauvegardé :)" : "Sauvegarder"}
                </span>
            </div>

            <div className={styles.sidebarSectionTitle}>Dates à venir :</div>
            <ul>
                {listDates.map((date, key) => (
                    <li key={key}>{date}</li>
                ))}
            </ul>

            <div className={styles.sidebarSectionTitle}>Prix :</div>
            <span>{event.fields.price_detail}</span>

            <div className={styles.sidebarSectionTitle}>S'y rendre :</div>
            <div>
                {/* <Map
                    lat={event.fields.lat_lon.lat}
                    lon={event.fields.lat_lon.lon}
                /> */}
            </div>
            <div className={styles.sidebarDetails}>
                {event.fields.address_name}
            </div>
            <div className={styles.sidebarDetails}>
                {event.fields.address_street}
            </div>
            <div className={styles.sidebarDetails}>
                {event.fields.address_zipcode} {event.fields.address_city}
            </div>

            <div className={styles.sidebarSectionTitle}>En transports</div>
            <pre>{event.fields.transport}</pre>

            <div className={styles.sidebarSectionTitle}>Plus d'infos</div>
            {event.fields.contact_phone && (
                <div className={styles.sidebarContact}>
                    <div>{TelIcon}</div>
                    <a href={event.fields.contact_phone}>
                        {event.fields.contact_phone}
                    </a>
                </div>
            )}
            {event.fields.contact_mail && (
                <div className={styles.sidebarContact}>
                    <div>{MailIcon}</div>
                    <a href={event.fields.contact_mail}>
                        {event.fields.contact_mail}
                    </a>
                </div>
            )}
            {event.fields.contact_facebook && (
                <div className={styles.sidebarContact}>
                    <div>{FacebookIcon}</div>
                    <a href={event.fields.contact_facebook}>
                        {event.fields.contact_facebook}
                    </a>
                </div>
            )}
            {event.fields.contact_twitter && (
                <div className={styles.sidebarContact}>
                    <div>{TwitterIcon}</div>
                    <a href={event.fields.contact_twitter}>
                        {event.fields.contact_twitter}
                    </a>
                </div>
            )}
        </section>
    );
}

const TelIcon = (
    <svg
        width="24"
        height="24"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="phone"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <path
            fill="currentColor"
            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
        ></path>
    </svg>
);

const MailIcon = (
    <svg
        width="24"
        height="24"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="envelope"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
    >
        <path
            fill="currentColor"
            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
        ></path>
    </svg>
);

const FacebookIcon = (
    <svg
        width="24"
        height="24"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="facebook"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
    >
        <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path>
    </svg>
);

const TwitterIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 26 22"
    >
        <path
            fill="inherit"
            d="M.5 18.7c10 6.2 22.7-.7 22.5-13 1-.7 1.9-1.6 2.6-2.7-1 .5-2 .8-3.1.9 1.14-.7 2-1.7 2.4-2.9-1 .6-2 1-3.3 1.3-4.3-4.13-10 .3-8.8 4.7-4.3-.2-8-2.3-10.6-5.4C1 4 1.5 7.1 3.9 8.5 3 8.4 2 8.2 1.5 7.8c0 2.6 1.8 4.6 4.1 5.1-.8.2-1.5.3-2.3.1.6 2 2.6 3.6 4.8 3.6-2 1.6-4.7 2.4-7.6 2.1z"
        ></path>
    </svg>
);
