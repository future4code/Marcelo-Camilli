import Header from "./Header";
import { useHistory } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { TripContainer, TripTitle } from "./Styled";


export default function ListTripPage() {
    const [trips, setTrips] = useState([])
    const history = useHistory()

    const goToApplicationFormPage = () => {
        history.push("./ApplicationFormPage")
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

    const tripList = trips.map((trip) => {
        return (
            <TripContainer key={trip.id}>
                <p> <strong> Nome: </strong> {trip.name}</p>
                <p> <strong> Descrição: </strong> {trip.description}</p>
                <p> <strong> Planeta:  </strong>{trip.planet}</p>
                <p> <strong> Duração:  </strong>{trip.durationInDays}</p>
                <p> <strong> Data: </strong>  {trip.date}</p>
                <button onClick={goToApplicationFormPage}> Apply </button>
                <br />
            </TripContainer>
        )
    })


    return (
        <><Header />
            <TripTitle>Trips</TripTitle>
            <div>
                {tripList}                
            </div>


        </>
    );
}

