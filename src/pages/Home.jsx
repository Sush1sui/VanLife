import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <main className="home--main">
            <div>
                <h1>
                    You got the travel plans, we got the travel vans. 
                </h1>
                <p>
                    Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                </p>
            </div>

            <button className="find-ur-van-btn">Find your van</button>
        </main>
    )
}