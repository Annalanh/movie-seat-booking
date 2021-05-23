import React, { useState, useEffect } from "react"

const MyOrders = () => {
    const username = window.localStorage.getItem("username")
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        //call api to get orders by username
        let sampleOrders = [
            {
                username: "thao",
                movie: "Avenger",
                chosenSeats: [1, 2, 3],
                status: "unpaid"
            },
            {
                username: "thao",
                movie: "Batman",
                chosenSeats: [11, 12, 13],
                status: "paid"
            }
        ]
        setLoading(false)
        setOrders(sampleOrders)

    }, []);
    return (
        <div className="payment-container">
            <div className="payment">
                <h4 className="payment-title">My Orders</h4>
                {
                    !loading && (
                        orders.map(order => {
                            return (
                                <>
                                    <h5 className="payment-title-2">{order.movie}</h5>
                                    <h6>Chosen seats: {order.chosenSeats.toString()}</h6>
                                    <h6>Status: {order.status}</h6>
                                </>
                            )
                        })
                    )
                }
            </div>
        </div >
    )
}

export default MyOrders
