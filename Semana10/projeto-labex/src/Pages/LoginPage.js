import Header from "./Header";
import { useHistory } from "react-router";


export default function LoginPage() {
    const history = useHistory ()

    const goToAdminHomePage = () => {
        history.push("./AdminHomePage")
    }
    return (
        <>
        <Header />
        <div>
            Login Page
        </div>
        <div>
            <button onClick={goToAdminHomePage}>
                Admin Homepage
            </button>
        </div>
        </>
    );
}

