import React from "react"
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled"
import logo from "../../assets/logo.png"
import { Button} from "@material-ui/core"
import LoginForm from "./LoginForm"
import { goToSignup } from "../../Router/cordinator"
import {useHistory} from "react-router-dom"





const  LoginPage = ({rightButtonText, setRightButtonText}) => {
    const history = useHistory ()
    return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <LoginForm rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
      <SignUpButtonContainer>
        <Button
            type={"submit"}
            fullWidth
            variant={"text"}
            color={"primary"}
            onClick={() => goToSignup (history)}
            >
        Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage