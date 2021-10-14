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
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips")
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
            <TripContainer>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Duração: {trip.durationInDays}</p>
                <p>Data: {trip.date}</p>
                <button onClick={goToApplicationFormPage}> Apply </button>
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

