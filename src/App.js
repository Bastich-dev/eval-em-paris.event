import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/_common/Navbar";
import routes from "./routes";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <header>
                <Navbar />
            </header>
            <main className="container main">
                <Switch>
                    {routes.map((elem, key) => (
                        <Route key={key} exact={elem.exact} path={elem.path} component={elem.component} />
                    ))}
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;
