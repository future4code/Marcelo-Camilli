import React from "react"
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled"
import logo from "../../assets/logo.png"
import { Button} from "@material-ui/core"
import LoginForm from "./LoginForm"
/* import { goToSignup } from "../../Router/cordinator" */





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
            /* onClick={() => goToSignup()} */
            >
        Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage