import Header from "./Header";
import { ApplyForm } from "./Styled";
import axios from "axios"
import { useState, useEffect } from "react";





export default function ApplicationFormPage() {
    const [trips, setTrips] = useState ([])

    const applyToTrip = () => {
        axios
        .post ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcelo-camilli-maryam/trips/:id/apply",{
            name: "",
            age: "",
            applicationText: "",
            profession: "",
            country:"",
        })
    
    .then ((res) => {
        console.log (res.data)
    })
    .catch ((err) => {
        console.log (err)
    })
}

const getTrips = () => {
    axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcelo-camilli-maryam/trips")
        .then((res) => {
            console.log(res.data)
            setTrips (res.data.trips)
            
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
        <div key={trip.id}>
            <p> <strong> Nome: </strong> {trip.name}</p>
            <br />
        </div>
    )
})

    return (

        <><Header />
        <ApplyForm>
            <select>
                <option>{tripList}</option>
                
            </select>
            <input 
 /*            value={applicationName}
            onChange = {handleNameChange} */
            placeholder="Nome"
            type = "text"                     
            />
            <input 
/*             value={applicationAge}
            onChange = {handleAgeChange} */
            placeholder="Age"
            type = "number"   
            min = "18"                  
            />      
            <input 
/*             value = {applicationReason}
            onChange = {handleReasonChange} */
            placeholder= "Reason"
            type = "text"
            />
            <input 
/*             value = {applicationProfession}
            onChange = {handleProfessionChange} */
            placeholder="Profession"
            type = "text"            
            />
            <select>
                <option>País</option>
            </select>
            <button onClick = {applyToTrip}>Send</button>
        </ApplyForm>
        </>
    );
}
