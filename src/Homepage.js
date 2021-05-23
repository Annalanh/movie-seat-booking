import React, { useState } from "react"
import Homepage from "./Homepage.css"

const getTickets = (movie) => {
    window.location.href = `/booking/${movie}`
}

const Hompage = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark">
                <a className="navbar-brand" href="#">CINEMA</a>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/my-orders">My Orders</a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">

                    <div class="searchbar nav-item">
                        <input class="search_input" type="text" name="" placeholder="Search..." />
                        <div class="search_icon"><i class="fas fa-search"></i></div>
                    </div>
                    <li className="nav-item">
                        <a className="nav-link" href="/login"><i class="fas fa-sign-in-alt"></i></a>
                    </li>
                </ul>
            </nav>
            <div className="slideshow-container">
                <div className="banner-des">
                    <h2 className="banner-title">Safe & Clean Standards in Place</h2>
                    <p>Powerful images and sound technologies combine with cutting-edge, reserved recliners to transform each show into a completely captivating cinematic event. Using a new digital approach, you can watch movies with amazing depth and clarity, without sacrificing comfort.</p>
                </div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active ">
                            <img class="d-block w-100 slide-img" src="/banner-1.jpeg" />
                        </div>
                        <div class="carousel-item ">
                            <img class="d-block w-100 slide-img" src="/banner-2.jpeg" />
                        </div>
                        <div class="carousel-item ">
                            <img class="d-block w-100 slide-img" src="/banner-3.jpeg" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

            </div>

            <div className="title-container">
                <img class="title-decor" src="/title-decor-left.jpg" />
                <div className="title">MOVIES</div>
                <img class="title-decor" src="/title-decor-right.jpg" />
            </div>

            <div className="poster-container">
                <div className="container-fluid">
                    <div class="row">
                        <div className="poster col-sm-3">
                            <img class="movieposter" src="avenger.png" />
                            <h3 className="poster-title">Avenger</h3>
                            <div>1HR 54 MIN | PG</div>
                            <p>Released Mar 31, 2020</p>
                            <div className="poster-btn" onClick={() => getTickets(1)}>Get Tickets</div>

                        </div>
                        <div className="poster col-sm-3">
                            <img class="movieposter" src="batman.png" />
                            <h3 className="poster-title">Batman</h3>
                            <div>1HR 54 MIN | PG</div>
                            <p>Released Mar 31, 2020</p>
                            <div className="poster-btn" onClick={() => getTickets(2)}>Get Tickets</div>
                        </div>
                        <div className="poster col-sm-3">
                            <img class="movieposter" src="titanic.png" />
                            <h3 className="poster-title">Titanic</h3>
                            <div>1HR 54 MIN | PG</div>
                            <p>Released Mar 31, 2020</p>
                            <div className="poster-btn" onClick={() => getTickets(3)}>Get Tickets</div>
                        </div>
                        <div className="poster col-sm-3">
                            <img class="movieposter" src="toystory.png" />
                            <h3 className="poster-title">Toy story</h3>
                            <div>1HR 54 MIN | PG</div>
                            <p>Released Mar 31, 2020</p>
                            <div className="poster-btn" onClick={() => getTickets(4)}>Get Tickets</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hompage
