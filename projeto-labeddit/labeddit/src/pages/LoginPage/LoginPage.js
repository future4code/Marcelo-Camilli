import React from "react"
import { ScreenContainer, LogoImage, InputsContainer, SignUpButtonContainer } from "./styled"
import logo from "../../assets/logo.png"
import { Button, TextField } from "@material-ui/core"
import LoginForm from "./LoginForm"


const  LoginPage = () => {
    return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <LoginForm/>
      <SignUpButtonContainer>
        <Button
            type={"submit"}
            fullWidth
            variant={"text"}
            color={"primary"}
            /* onClick={() => goToSignup(history)} */
            >
        Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage