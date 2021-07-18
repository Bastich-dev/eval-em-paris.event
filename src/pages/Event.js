import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import API_OpenDataParis from "../utils/API_OpenDataParis";
import Title from "../components/Event/Title";
import Body from "../components/Event/Body";
import Sidebar from "../components/Event/Sidebar";
import WithLoading from "../components/_common/WithLoading";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/Animations";

export default function Event(props) {
    const location = useLocation();

    const [eventData, seteventData] = useState();
    const id = location.pathname.split("/")[2];

    useEffect(() => {
        API_OpenDataParis.getEventFromId({ id })
            .then((event) => seteventData(event))
            .catch(() => {
                seteventData(null);
            });
    }, [id]);

    return (
        <React.Fragment>
            <div>
                <WithLoading
                    ifLoading={eventData === undefined}
                    ifEmpty={eventData?.length === 0}
                    componentIfEmpty={<div>Aucun énévement</div>}
                    ifError={eventData === null}
                >
                    {eventData && (
                        <React.Fragment>
                            <Title event={eventData} />
                            <motion.hr
                                initial="hidden"
                                animate="visible"
                                variants={fadeIn}
                                className="divider"
                            />
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    paddingBottom: 50,
                                }}
                            >
                                <Body event={eventData} />

                                <Sidebar event={eventData} />
                            </div>
                        </React.Fragment>
                    )}
                </WithLoading>
            </div>
        </React.Fragment>
    );
}
