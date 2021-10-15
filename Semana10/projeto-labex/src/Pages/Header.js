import { AppContainer, HeaderButtons, HeaderContainer } from "./Styled"
import { useHistory } from "react-router";



export default  function Header () {
    const history = useHistory ()

    const goToHomePage = () => {
        history.push("./")
    }
    const goToListTripsPage = () => {
        history.push("./listTrips")
    }
    const goToAdminHomePage = () => {
        history.push("./adminHomePage")
    }
        return (
            <AppContainer>
                <HeaderContainer>
                <h2>Labex</h2>
                <HeaderButtons>
                <button onClick={goToHomePage}>Home </button> 
                <button onClick ={goToListTripsPage}>Trips </button>
                <button onClick ={goToAdminHomePage}>Admin</button>
                </HeaderButtons>
                </HeaderContainer>
            </AppContainer>
        );
    }

