import React, { useState } from "react"
import { useLocation } from "react-router-dom";
import "./Payment.css";

const axios = require('axios');

const Payment = () => {
    const url = useLocation();
    const movieId = new URLSearchParams(url.search).get("movie-id")
    const strChosenSeats = new URLSearchParams(url.search).get("chosen-seats")
    const chosenSeats = strChosenSeats.split(",").map(seat => Number(seat))
    const payment = new URLSearchParams(url.search).get("payment")

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlePay = () => {
        // axios.post('/pay', {
        //     username,
        //     password,
        //     amount: payment,
        //     receiver: "Cinema"
        // })
        //     .then(function (res) {
        //         if (res.status) {
        //             axios.post('/book', {
        //                 movieId,
        //                 chosenSeats,
        //                 username
        //             })
        //                 .then(function (res) {
        //                     alert(res.message)
        //                 })
        //         } else {
        //             alert(res.message)
        //         }
        //     })
    }
    const handleOnChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleOnChangePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className="payment-container">
            <div className="payment">
                <h4 className="payment-title">Payment Details</h4>
                <h5 className="payment-title-2">Bank Account Details</h5>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Username</label>
                            <input class="form-control" placeholder="Username" onChange={handleOnChangeUsername} />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Password" onChange={handleOnChangePassword} />
                        </div>
                    </div>
                </form>
                <h5 className="payment-title-2">Receiver</h5>
                <h6 className="payment-value">CINEMA</h6>
                <h5 className="payment-title-2">Total Payment</h5>
                <h6 className="payment-value">$ {payment}</h6>
                <hr />
                <div className="payment-footer">
                    <div className="pay-btn" onClick={handlePay}>Pay</div>
                </div>
            </div>
        </div>
    )
}

export default Payment
