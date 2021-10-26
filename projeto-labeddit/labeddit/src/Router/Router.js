import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import PostPage from "../pages/PostPage/PostPage"
import Header from "../components/Header"


const  Router = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
        <Route exact path ="/login">
            <LoginPage/>
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
    </BrowserRouter>
  )
}

export default Router