import React, { useState, useEffect } from "react"
import "./Booking.css"

import SeatAvailability from "./components/SeatAvailability"
import SeatMatrix from "./components/SeatMatrix"
import PriceCalculator from "./components/PriceCalculator"
import GithubLogo from './components/GithubLogo'

import MovieContext from './contexts/MovieContext'
import styled from "styled-components"

function payment() {
	//window.open("localhost:3000/payment")
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

const Booking = () => {
	//initial data 
	const url = window.location.href
	const id = url.split("/")[4]
	const [chosenSeats, setChosenSeats] = useState([]);
	const [movie, setMovie] = useState({})
	const [loading, setLoading] = useState(true)
	//call rest api to get movie data
	useEffect(() => {
		console.log("alo")
		let movie = {
			id: id,
			name: "Avenger",
			moviePrice: 10,
			occupiedSeats: [3, 5, 16, 18, 17, 22, 23]
		}
		setLoading(false)
		setMovie(movie)
	}, []);

	return (
		<div className="main container">
			{
				!loading && (<MovieContext.Provider value={{ movie, chosenSeats, changeState: setChosenSeats }}>
					<GithubLogo />
					<SeatMatrix />
					<SeatAvailability />
					<PriceCalculator />
					<Button onClick={payment}> Payment </Button>
				</MovieContext.Provider>)
			}

		</div>
	)
}

export default Booking
