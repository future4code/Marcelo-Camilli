import { useState } from "react";
import Header from "./Header";
import {ApplyForm} from "./Styled"
import axios from "axios"

export default function CreateTripPage() {
    const [form, setForm] = useState({name:"", planet:"", description:"", date: "", durationInDays:""})

    const onChange = (event) => {
        setForm ({...form, [event.target.name]: event.target.value})
        
    }
    

    const createTrip = (event) => {
        event.preventDefault()
        const token = localStorage.getItem('token')
        axios
        .post ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcelo-camilli-maryam/trips", form, {
            headers: {                
                auth: token
            }
        })
        .then ((res)=> {
            alert("trip created")

            
        })
        .catch ((err) => {
            console.log(err)
            
        })
    }

    return (
        <>
        <Header />
        <div>
            <ApplyForm>
            <h2> Create Trip </h2>
            <form onSubmit={createTrip}>
            <input
            name="name"
            placeholder="name"
            type="text"
            value={form.name}
            onChange = {onChange}
            required          
            />
            <br/>
            <input
            name="planet"
            placeholder="planet"
            type="text"
            value={form.planet}
            onChange={onChange}            
            required                        
            />
            <br/>
            <input
            name="date"
            placeholder="date"
            type="date" 
            value={form.date}
            onChange={onChange}            
            required                                          
            />
            <br/>
            <input
            name="description"
            placeholder="description"
            type="text" 
            value={form.description}
            onChange={onChange}            
            required                        
            />
            <br/>
            <input
            name="durationInDays"
            placeholder="durationInDays"
            type="number"
            min="50"
            value={form.durationInDays}
            onChange={onChange}            
            required      
            />
            <br/>            
            <button> Create </button>
            </form>
            </ApplyForm>
        </div>
        </>
    );
}
