import axios from "axios"
import {BASE_URL} from "../constants/urls"
import {goToFeed} from "../Router/cordinator"


const headers = "Content-Type: application/json"

export const login = (body, clear, history) => {
    axios.post (`${BASE_URL}/users/login`, body, headers)
    .then((res) => {
      console.log (res)
      localStorage.setItem("token", res.data.token)
      clear ()
      goToFeed (history)
    })
    .catch ((err) => {
      alert ("Erro de login")
    })
  }
