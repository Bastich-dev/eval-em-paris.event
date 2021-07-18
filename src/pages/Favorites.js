import React from "react";
import Presentation from "../components/Favorites/Presentation";
import ListFavoritesEvents from "../components/Favorites/ListFavoritesEvents";
export default function Home(props) {
    return (
        <React.Fragment>
            <Presentation />
            <hr className="divider" />
            <ListFavoritesEvents />
        </React.Fragment>
    );
}
