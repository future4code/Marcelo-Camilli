import Header from "./Header";
import { useHistory } from "react-router";
import { AdminTitle } from "./Styled";
import axios from "axios";
import { useEffect, useState } from "react"
import { TripContainer, AdmTripContainer } from "./Styled";




export default function AdminHomePage() {
    const history = useHistory ()
    const [trips, setTrips] = useState([])

    const goToTripDetails = () => {
        history.push ("./TripDetails")
    }
    const goToCreateTripPage = () => {
        history.push ("./CreateTripPage")
    }

    
    
    const getTrips = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcelo-camilli-maryam/trips")
            .then((res) => {
                console.log(res.data)
                setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getTrips()
    }, [])

    const deleteTrip = (tripId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/${tripId}`)
        .then((res)=> {
            console.log(res)
        })
        .catch ((err) => {
            console.log(err)
        })
    }

    const tripList = trips.map((trip) => {
        return (
            <TripContainer key={trip.id}>
                <p> <strong> Nome: </strong> {trip.name}</p>
                <p> <strong> Descrição: </strong> {trip.description}</p>
                <p> <strong> Planeta:  </strong>{trip.planet}</p>
                <p> <strong> Duração:  </strong>{trip.durationInDays}</p>
                <p> <strong> Data: </strong>  {trip.date}</p>
                <button onClick ={goToTripDetails}> Details </button>
                <button onClick={deleteTrip}> Delete </button>
                <br />
            </TripContainer>
        )
    })
    return (
        <>
        <Header/>
        <AdminTitle>
            Admin Home Page
            <button onClick={goToCreateTripPage}>Create New Trip</button>
        </AdminTitle>
        <AdmTripContainer>
            {tripList}
        </AdmTripContainer>
       
        </>
    );
}

