import React from "react"
import { InputsContainer,  } from "./styled"
import { Button, TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
/* import { signUp } from "../../services/users" */
import {useHistory} from "react-router-dom"



const  SignUpForm = () => {
    const [form, onChange, clear] = useForm({name: "", email:"", password:""})
    const history = useHistory ()

/*     const onSubmitForm = (event) => {
      signUp (form, clear, history)
      event.preventDefault()
    } */


  return (
      <InputsContainer>
        <form /* onSubmit={onSubmitForm} */>
        <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Name"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"name"}
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label ={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
          > 
          Login </Button>
        </form>        
      </InputsContainer>
  )
}
export default SignUpForm