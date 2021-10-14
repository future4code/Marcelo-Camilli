import Header from "./Header";
import { useHistory } from "react-router";
import { HomePageButtons, MainTitle } from "./Styled";




export default function AdminHomePage() {
    const history = useHistory ()

    const goToTripDetails = () => {
        history.push ("./TripDetails")
    }
    const goToCreateTripPage = () => {
        history.push ("./CreateTripPage")
    }
    return (
        <>
        <Header/>
        <MainTitle>
            Admin Home Page
        </MainTitle>
        <HomePageButtons>
            <button onClick={goToTripDetails}>Trip Details</button>
            <button onClick={goToCreateTripPage}>Create New Trip</button>
        </HomePageButtons>
        </>
    );
}

