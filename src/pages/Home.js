import React from "react";
import Presentation from "../components/Home/Presentation";
import ListNewEvents from "../components/Home/ListNewEvents";

export default function Home(props) {
    return (
        <React.Fragment>
            <Presentation />
            <hr className="divider" />
            <ListNewEvents />
        </React.Fragment>
    );
}
