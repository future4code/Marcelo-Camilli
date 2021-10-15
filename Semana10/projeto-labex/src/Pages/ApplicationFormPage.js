import Header from "./Header";
import { ApplyForm } from "./Styled";
import axios from "axios"
import { useState, useEffect } from "react";





export default function ApplicationFormPage() {
    const [trips, setTrips] = useState ([])
    const [form, setForm] = useState({name: "", age: "", applicationText: "", profession: "", country:""})

    const applyToTrip = (event) => {
    event.preventDefault()

        axios
        .post ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcelo-camilli-maryam/trips/:id/apply",form
        )
    
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
            console.log(res.data.trips)
            setTrips (res.data.trips)
            
        })
        .catch((err) => {
            console.log(err)
        })
}

useEffect(() => {
    getTrips()
}, [])

const tripList = trips.map ((trip) => {
    return (
        <div>
        {trip.name}
        </div>
    )
})


const onChange = (event) => {
    setForm ({...form, [event.target.name]: event.target.value})
}


    return (

        <><Header />
        
        <ApplyForm>
            <h2> Application Form </h2>
            <form onSubmit={applyToTrip}>
            <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Name"
            required
            type="text"            
            />
            <br/>
            <input
            name="age"
            value={form.age}
            onChange={onChange}
            placeholder="age"
            required
            type="number"  
            min="18"                  
            />
            <br/>
            <input
            name="applicationText"
            value={form.applicationText}
            onChange={onChange}
            placeholder="Reason"
            required
            type="text"            
            />
            <br/>
            <input
            name="profession"
            value={form.profession}
            onChange={onChange}
            placeholder="profession"
            required
            type="text"            
            />
            <br/>
            <input
            name="country"
            value={form.country}
            onChange={onChange}
            placeholder="country"
            required
            type="text"            
            />
            <br/>
            <button> Apply</button>

            </form>
        </ApplyForm>
        
        </>
    );
}
