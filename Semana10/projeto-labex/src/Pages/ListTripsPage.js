import Header from "./Header";
import { useHistory } from "react-router";


export default function ListTripPage() {
    const history = useHistory ()

    const goToApplicationFormPage = () => {
        history.push("./ApplicationFormPage")
    }
        return (
            <><Header/>
            <div>
                TRIPS
            </div>

            <div>
                <button onClick ={goToApplicationFormPage}> Apply </button>
            </div>
            </>
        );
    }

