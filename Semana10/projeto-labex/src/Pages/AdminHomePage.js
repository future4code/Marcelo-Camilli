import Header from "./Header";
import { useHistory } from "react-router";



export default function AdminHomePage() {
    const history = useHistory ()

    const goToTripDetails = () => {
        history.push ("./TripDetails")
    }
    const goToCreateTripPage = () => {
        history.push ("./CreateTripPage")
    }
    return (
        <><Header />
        <div>
            Admin Home Page
        </div>
        <div>
            <button onClick={goToTripDetails}>Trip Details</button>
        </div>
        <div>
            <button onClick={goToCreateTripPage}>Create New Trip</button>
        </div>
        </>
    );
}

