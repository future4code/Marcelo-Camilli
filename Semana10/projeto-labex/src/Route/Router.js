import HomePage from "../Pages/HomePage"
import AdminHomePage from "../Pages/AdminHomePage";
import ListTripPage from "../Pages/ListTripsPage";
import CreateTripPage from "../Pages/CreateTripPage"

import { BrowserRouter, Switch, Route } from "react-router-dom"


export default function Router() {
    return (

        <BrowserRouter>
            <Switch>

                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route exact path={"/listTrips"}>
                    <ListTripPage />
                </Route>
                <Route exact path={"/AdminHomePage"}>
                    <AdminHomePage />
                </Route>
                <Route exact path={"/CreateTripPage"}>
                    <CreateTripPage />
                </Route>


            </Switch>
        </BrowserRouter>

    );
}


