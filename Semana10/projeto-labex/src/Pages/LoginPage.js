import Header from "./Header";
import { useHistory } from "react-router";
import { useState} from "react";
import axios from "axios";
import { ApplyForm } from "./Styled";


export default function LoginPage() {
    const history = useHistory ()
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")

    const goToAdminHomePage = () => {
        history.push("./AdminHomePage")
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword= (event) => {
        setPassword(event.target.value)
    }

    const submitLogin = () => {
        console.log(email, password)
        const body = {
            email: email,
            password: password
        }
        axios
        .post ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcelo-camilli-maryam/login", body)
        .then ((res)=> {
            console.log(res.data.token)
            localStorage.setItem('token',res.data.token)
        })
        .catch ((err) => {
            console.log(err.res)
        })
    }

    return (
        <>
        <Header />
        <ApplyForm>
            <input 
                placeholder="email"
                type="email"
                value={email}
                onChange = {onChangeEmail}
            />
            <input 
                placeholder="password"
                type="password"
                value={password}
                onChange = {onChangePassword}
            />
            <button onClick={submitLogin, goToAdminHomePage}>Login</button>
        </ApplyForm>
        </>
    );
}

