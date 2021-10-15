import Header from "./Header";
import { useState} from "react";
import axios from "axios";
import { ApplyForm } from "./Styled";


export default function LoginPage() {

    const [form, setForm] = useState({email:"", password:""})


    const onChange = (event) => {
        setForm ({...form, [event.target.name]: event.target.value})
    }



    const submitLogin = (event) => {
        event.preventDefault()
        
        axios
        .post ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcelo-camilli-maryam/login", form)
        .then ((res)=> {
            console.log(res.data.token)
            localStorage.setItem('token',res.data.token)
            alert ("logged in")
        })
        .catch ((err) => {
            console.log(err.res)
            alert ("Error, try again")
        })
    }

    return (
        <>
        <Header />
        <ApplyForm>
            <form onSubmit={submitLogin}>
            <input 
                name="email"
                placeholder="email"
                type="email"
                value={form.email}
                onChange = {onChange}
                required
            />
            <br/>
            <input 
                name= "password"
                placeholder="password"
                type="password"
                value={form.password}
                onChange = {onChange}
                required
            />
            <br/>
            <button>Login</button>
            </form>                        
        </ApplyForm>

        </>
    );
}

