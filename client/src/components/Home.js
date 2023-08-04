import React from "react";
import banner from "../banner.jpg";


export default function Home () {
    return (
        <div className='home'>
            {/* <h1>PC Game Reviewer</h1> */}
            <img className = "banner" src={banner} alt="PC Game Reviewer banner"/>
            <p>Welcome to PC Gaming Reviews! Get started by signup/login or view the games page to see what we have to offer!</p>

            {/* could put in top deals: login to view more */}
        </div>
    )
}