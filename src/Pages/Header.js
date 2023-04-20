/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../CSS/main.css";
import { NavLink } from 'react-router-dom'
import logo from "../Images/logo.png";
const Header = () => {
  return (
    <header class="header fixed-top header-animated">
    <nav class="navbar navbar-expand-lg navbar-light py-3">
      <div class="container"><a class="navbar-brand" href="index.html"><img src={logo} alt="..." width="154px"></img></a>
        <button class="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
           <a class="nav-link imp active" ><NavLink to="/Home"  >Home</NavLink></a>
            </li>
            <li class="nav-item">
              <a class="nav-link imp"><NavLink to="/Aboutus">About us</NavLink></a>
            </li>
            <li class="nav-item dropdown"><a class="nav-link imp dropdown-toggle" id="navbarDropdownMenuLink" href="#" data-bs-toggle="dropdown" aria-haspopup="true">Explore</a>
              <div class="dropdown-menu mt-3" aria-labelledby="navbarDropdownMenuLink"><a class="dropdown-item" href="index.html">Technologies</a><a class="dropdown-item" href="about.html">Trainning</a><a class="dropdown-item" href="contact.html">Projects</a></div>
            </li>
            
            <li class="nav-item justify-content-end">             
              <button class="btn btn-primary" type="button" data-bs-target="#quoteForm" data-bs-toggle="modal">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header