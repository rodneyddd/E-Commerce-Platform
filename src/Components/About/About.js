import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
import "./About.css"

function About()
{
    return(
    <>
        <Navbar/>
        

            {/*<!-- Parallax section for the About page -->*/}
            <div class="parallax-two-images">
                </div>

                    <div class="abimage1">
                    </div>

                    <div class="parallax-two-images">
                    </div>

                    <div class="image2">
                </div>

                <div class="parallax-two-images">
            </div>



            <div class="centered-text">
                <p>Discover the world of Häagen-Dazs on our website!
                    <br/>
                    Indulge in the convenience of exploring our exceptional products and placing orders online through popular platforms:  
                    <br/> 
                    <br/>
                    <div class="bol">
                        <a href="https://www.ubereats.com/store/haagen-dazs-1306-2nd-ave/K_rZuszoV-uSE2P-fYCCEw?diningMode=DELIVERY&sc=SEARCH_SUGGESTION" class="ABmenu-button">Uber Eats</a>  
                        <a href="https://www.doordash.com/store/h%C3%A4agen-dazs-new-york-25017946/" class="ABmenu-button">DoorDash</a> 
                        <a href="https://www.grubhub.com/restaurant/haagen-dazs-1306-2nd-ave-new-york/5848608" class="ABmenu-button">GrubHub</a>      
                    </div>
                    
                    For an even more delightful experience, directly order our exquisite    
                    <Link to = '/IceCream' class='ABmenu-button'>Cakes</Link>
                    here. Häagen-Dazs is at your service, ensuring your online journey is as smooth as the flavors we offer.
                </p>
            </div>
            


        
        {/*-- Other parallax sections or content... -->*/}
        
        {/*<!-- Other content... -->*/}

    

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

export default About;