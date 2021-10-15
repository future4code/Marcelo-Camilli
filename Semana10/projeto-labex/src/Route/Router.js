import HomePage from "../Pages/HomePage"

import ListTripPage from "../Pages/ListTripsPage";
import ApplicationFormPage  from "../Pages/ApplicationFormPage"
import LoginPage from "../Pages/LoginPage"
import AdminHomePage from "../Pages/AdminHomePage";
import CreateTripPage from "../Pages/CreateTripPage"
import TripDetailsPage from "../Pages/TripDetailsPage"

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
                <Route exact path={"/ApplicationFormPage"}>
                    <ApplicationFormPage />
                </Route>
                <Route exact path={"/LoginPage"}>
                    <LoginPage />
                </Route>                         
                <Route exact path={"/AdminHomePage"}>
                    <AdminHomePage />
                </Route>  
                <Route exact path={"/CreateTripPage"}>
                    <CreateTripPage />
                </Route>              
                <Route exact path={"/TripDetails"}>
                    <TripDetailsPage />
                </Route>


            </Switch>
        </BrowserRouter>

    );
}


