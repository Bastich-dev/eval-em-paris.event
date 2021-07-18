import React from "react";
import Loading from "./Loading";

export default function WithLoading({
    ifLoading,
    ifEmpty,
    ifError,
    componentIfEmpty,
    children,
}) {
    if (ifLoading) {
        return <Loading />;
    } else if (ifError) {
        return (
            <span
                style={{
                    color: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 50,
                }}
            >
                Erreur de chargement. Veuillez réessayer ultérieurement.
            </span>
        );
    } else if (ifEmpty) {
        return componentIfEmpty;
    } else {
        return children;
    }
}
