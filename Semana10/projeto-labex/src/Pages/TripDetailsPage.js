import axios from "axios";
import { useEffect, useState } from "react"
import Header from "./Header";


export default function TripDetailsPage() {
    const [detailedTrips, setDetailedTrips] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios
        .get ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcelo-camilli-maryam/trip/:id", {
            headers: {                
                auth: token
            }
        })
        .then ((res) => {
            console.log(res.data.trip)
            setDetailedTrips(res.data.trip.candidates)
  
        })
        .catch((err) => {
            console.log (err)
        })
    }, []) 

    const detailedTripList = detailedTrips.map((detailedTrip) => {
        return (
            <div>
                
                <p> <strong> Name: </strong> {detailedTrip.name}</p>
                <p> <strong> Age: </strong> {detailedTrip.age}</p>
                <p> <strong> Reason: </strong> {detailedTrip.applicationText}</p>
                <p> <strong> Profession: </strong> {detailedTrip.profession}</p>
                <br />
                <hr/>
            </div>
        )
    })


    return (
        <>
        <Header />
        <div>
            Trip Details
            <h3> Candidatos </h3>
            {detailedTripList}
        </div>
        </>
    );
}