import "./Home.css"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import About from '../IceCream/IceCream';
import IceCream from '../IceCream/IceCream';


function Home() {
    useEffect(() => {
      const handleButtonClick = () => { //event listener
        const targetElement = document.querySelector(".parallax-2"); //step 1 in finding target position
  
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY + 140; //step 2
  
        const animationDuration = 500; // Set the duration in milliseconds
  
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
          block: "start",
          inline: "start"
        });
  
        // Wait for the animation to complete and then restore the previous behavior
        setTimeout(() => {
          window.scrollTo({
            top: targetPosition,
            behavior: "auto",
            block: "start",
            inline: "start"
          });
        }, animationDuration);
      };
  
      const comeenjoy = document.getElementById("comeenjoy");
      comeenjoy.addEventListener("click", handleButtonClick); //
  
      return () => { //memory leak
        comeenjoy.removeEventListener("click", handleButtonClick);
      };
    }, []);

    
  

    return (
    <>
        <Navbar/>

       {/*----<a href="#" class="logo">Haagen-Dazs</a>*/}

        <div class="parallax-1" style={{ fontFamily: 'sans-serif' }}>

            <div class="parallax-content" >
                <h1>Welcome to Häagen-Dazs!</h1>
                <br/>
                <h2>We are located at <a href="https://www.google.com/maps/place/H%C3%A4agen-Dazs+Ice+Cream/@40.7665523,-73.9622838,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259964960f24d:0xc889d2e4c20fd180!8m2!3d40.7665523!4d-73.9597089!16s%2Fg%2F11ss4p51zs?entry=ttu">1306 2nd Avenue.</a></h2>
                <br/>
                <h3>Navigate through our website to uncover the full spectrum of what we have available!</h3>
            </div>
        </div>

        <div class="parallax-2">
            <div class="cold">
                Use this Website to order our delicious cakes! Navigate through our flavors
                to customize your cake.
                <br/>
                <br/>
                Take a look at our catering services!
                <br/>
                <br/>
                or come see what we're all about!

            </div>
            <div class="button-container">
              
                <Link to = '/IceCream' class="menu-button">Ice Cream Cake Flavors</Link>
                <Link to = '/Catering' class="menu-button">Catering Services</Link>
                <Link to = '/About' class="menu-button">About</Link>
            </div>
        </div>

        <div class="parallax-2p5">
            <div class="p2p5-container">
                <button id="comeenjoy" class="buttonn">Click here to take a look at our options!</button>
            </div>
        </div>

        <div class="parallax-3">
            <div class="para3-content">
                <h2>Contact Us</h2>
                <p>Address: 1306 2nd Avenue, Manhattan, New York</p>
                <p>Email: info@haagendazs.com</p>
                <p>Phone: +1 (646) 484 5897</p>
                <p>Opening Hours: Mon-Sun: 11:00 AM - 11:00 PM</p>
            </div>
        </div>

        

        
    </>
    );
}

export default Home;