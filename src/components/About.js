import React from 'react'
import logo from "../assets/logo.svg";

function About({
    image = "https://via.placeholder.com/215",
    about
}) {
  return (
    <div>About
        <aside>
            <img src= {image} alt="blog logo"/>
            <p>{about}</p>
            </aside>     


    </div>
  )
}

export default About