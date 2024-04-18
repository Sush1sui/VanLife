import React from "react";
import aboutImage from '../assets/images/aboutImage.png'
import './About.css'
import { Link } from "react-router-dom";

export default function About() {
    return(
        <main className="about--main">
            <img className="about-header-img" src={aboutImage} />

            <div className="about-desc">

                <h2>
                    Don&apos;t squeeze in a sedan when you could relax in a van.
                </h2>

                <p>
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)
                </p>

                <p>
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>

            </div>

            <div className="explore-section">
                <h2>
                    Your destination is waiting. <br />
                    Your van is ready.
                </h2>
                <button className="explore-our-vans-btn">
                    Explore our vans
                </button>
            </div>
            
        </main>
    )
}