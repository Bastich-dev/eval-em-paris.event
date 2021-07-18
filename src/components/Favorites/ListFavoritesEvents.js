import React, { useState } from "react";
import WithLoading from "../_common/WithLoading";
import API_OpenDataParis from "../../utils/API_OpenDataParis";
import CardEvent from "../_common/CardEvent";
import FavoritesContext from "../../utils/FavoritesContext";

export default function ListFavoritesEvents(props) {
    const { favoritesEvents } = React.useContext(FavoritesContext);

    const [listEvent, setlistEvent] = useState();

    React.useEffect(() => {
        Promise.all(
            favoritesEvents.map((id) =>
                API_OpenDataParis.getEventFromId({ id })
            )
        ).then((events) => {
            setlistEvent(events);
        });
    }, [favoritesEvents]);

    return (
        <section>
            <WithLoading
                ifLoading={listEvent === undefined}
                ifEmpty={listEvent?.length === 0}
                componentIfEmpty={
                    <div>Aucun énévement sauvegardé en favoris</div>
                }
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
