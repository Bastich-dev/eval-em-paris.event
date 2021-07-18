import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/_common/Navbar";
import routes from "./routes";
import "./App.css";
import FavoritesContext from "./utils/FavoritesContext";
import { useLocalStorage } from "./utils/useLocalStorage";

function App() {
    const [name, setName] = useLocalStorage("username", []);

    const favoritesContext = {
        favoritesEvents: name,
        updateFavoritesEvents: setName,
    };

    return (
        <BrowserRouter>
            <header>
                <Navbar />
            </header>
            <main className="container main">
                <FavoritesContext.Provider value={favoritesContext}>
                    <Switch>
                        {routes.map((elem, key) => (
                            <Route
                                key={key}
                                exact={elem.exact}
                                path={elem.path}
                                component={elem.component}
                            />
                        ))}
                    </Switch>
                </FavoritesContext.Provider>
            </main>
        </BrowserRouter>
    );
}

export default App;
