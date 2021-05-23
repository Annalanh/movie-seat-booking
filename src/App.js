import React, { useState } from "react"
import "./App.css"

import styled from "styled-components"
import Booking from "./Booking"
import Homepage from "./Homepage"
import Payment from "./Payment"

import { Route, Link } from "react-router-dom"
import Navbar from "./Navbar"
function sayHello() {
	alert('You clicked me!');
}

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const App = () => {

	return (

		<div className="App">
			{/* <img class="movieposter" src="avenger.png" />
			<img class="movieposter" src="batman.png" />
			<img class="movieposter" src="titanic.png" />
			<img class="movieposter" src="toystory.png" /> */}
			<Route exact path="/home" component={Homepage} />
			<Route exact path="/booking/:id" component={Booking} />
			<Route exact path="/payment" component={Payment} />
		</div>
	)
}

export default App
