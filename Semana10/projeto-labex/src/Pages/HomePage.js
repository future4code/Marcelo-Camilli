import { useHistory } from "react-router";
import {HomePageButtons, MainTitle} from "./Styled"


export default function HomePage() {
    const history = useHistory ()

    const goToListTripsPage = () => {
        history.push ("./listTrips")
    }

    const goToLoginPage = () => {
        history.push ("./LoginPage")
    }

        return (
            <>
            <MainTitle>
                <h1> Labex </h1>
            </MainTitle>
            <HomePageButtons>
                <button onClick={goToListTripsPage}>List of Trips</button>
                <button onClick={goToLoginPage}>Admin Login</button>
            </HomePageButtons>
            </>
        );
    }

