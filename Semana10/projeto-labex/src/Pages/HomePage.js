import { useHistory } from "react-router";


export default function HomePage() {
    const history = useHistory ()

    const goToListTripsPage = () => {
        history.push ("./listTrips")
    }

    const goToAdminHomePage = () => {
        history.push ("./AdminHomePage")
    }

        return (
            <div>
                <button onClick ={goToListTripsPage}>List of Trips</button>
                <button onClick={goToAdminHomePage}>Admin Homepage</button>
            </div>
        );
    }

