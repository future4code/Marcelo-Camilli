import React from "react"
import { Switch, Route} from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import PostPage from "../pages/PostPage/PostPage"


const  Router = ({rightButtonText, setRightButtonText}) => {
  return (

    <Switch>
        <Route exact path ="/login">
            <LoginPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
        </Route>
        <Route exact path ="/signup">
            <SignupPage/>
        </Route>
        <Route exact path ="/">
            <FeedPage/>
        </Route>
        <Route exact path ="/post">
            <PostPage/>
        </Route>

    </Switch>
 
  )
}

export default Router