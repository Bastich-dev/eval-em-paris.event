import Favorites from "./pages/Favorites";
import ListEvents from "./pages/ListEvents";
import Home from "./pages/Home";
import Event from "./pages/Event";

export default [
    {
        path: "/",
        name: "Accueil",
        component: Home,
        exact: true,
        nav: true,
    },
    {
        path: "/list-events",
        name: "Liste des événements ",
        component: ListEvents,
        exact: true,
        nav: true,
    },
    {
        path: "/favorites",
        name: "Favoris",
        component: Favorites,
        exact: true,
        nav: true,
    },
    {
        path: "/event",
        name: "Evenement",
        component: Event,
        exact: false,
        nav: false,
    },
];
