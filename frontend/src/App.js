import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Navigation/Navbar';
import BookPage from './pages/BookPage';
import HomePage from './pages/HomePage';
import ReviewPage from './pages/ReviewPage';
import BookMarkPage from './pages/BookMarkPage';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';


export default function App() {

  return (
    <BrowserRouter>
    <div className="grid-container">
      <header>
        <Nav />
      </header>
      <main>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/book/:id" component={BookPage}></Route>
        <Route path="/review/:id?" component={ReviewPage}></Route>
        <Route path="/bookmark/:id?" component={BookMarkPage}></Route>
        <Route path="/signin" component={SignInPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/profile" component={ProfilePage}></Route>
      </main>
      <footer className="row center">Created By Daryl Darilag</footer>
    </div>
    </BrowserRouter>
  )
}
