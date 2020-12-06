import './App.css';
import { Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import "semantic-ui-css/semantic.min.css";
import { isLoggedIn } from "./actions"
import AddPost from "./components/Add-Post.component"
import Post from "./components/Post.component";
import DetailPage from "./components/postDetail.component";
import RegisterPage from "./components/Register.component";
import LoginPage from "./components/Login.component";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    if (!auth.authencticate) {
      dispatch(isLoggedIn())
    }
  }, [auth.authencticate])
  return (
    <div>
      <p>sadfsadf</p>
      <Route path="/posts" component={Post}></Route>
      <Route path="/add-post" component={AddPost}></Route>
      <Route path="/post/:title" component={DetailPage}></Route>
      <Route path="/register" component={RegisterPage}></Route>
      <Route path="/login" component={LoginPage}></Route>
    </div>
  )
}
export default App;
