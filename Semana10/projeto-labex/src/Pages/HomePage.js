import { useHistory } from "react-router";


export default function HomePage() {
    const history = useHistory ()

    const goToListTripsPage = () => {
        history.push ("./listTrips")
    }

    const goToLoginPage = () => {
        history.push ("./LoginPage")
    }

        return (
            <div>
                <button onClick ={goToListTripsPage}>List of Trips</button>
                <button onClick={goToLoginPage}>Admin Login</button>
            </div>
        );
    }

