import "./IceCream.css"
import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";

function IceCream(props){

    const [selectedFlavors, setSelectedFlavors] = useState([]);

    const flavors = [
        { name: 'Vanilla', src: '../../../assets/vanilla.jpeg', imageClass: 'imv', textClass: 'image-textv' },
        { name: 'Chocolate', src: './assets/chocolate.jpeg', imageClass: 'imchoco', textClass: 'image-textcho' },
        { name: 'Strawberry', src: '/assets/strawberry.jpeg', imageClass: 'imstraw', textClass: 'image-textstraw' },
        { name: 'Rocky Road', src: '../assets/rockyroad.jpeg', imageClass: 'imRR', textClass: 'image-textRR'},
        { name: 'Cookies & Cream', src: '../assets/cookiescream.jpeg', imageClass: 'imCCr', textClass: 'image-textCCr'},
        { name: 'Cookie Dough', src: '../../assets/cookiedough.jpeg', imageClass: 'imCD', textClass: 'image-textCD'},
        { name: 'Dulce de Leche', src: '/assets/dulce.jpeg', imageClass: 'imDDL', textClass: 'image-textDDL'},
        { name: 'Caramel Cone', src: '/assets/CaraCone.jpeg', imageClass: 'imCC', textClass: 'image-textCC'},
        { name: 'Pralines & Cream', src: '/assets/Praline.jpeg', imageClass: 'imPnC', textClass: 'image-textPnC'},
        { name: 'Mint Chip', src: '/assets/mint.jpeg', imageClass: 'imMC', textClass: 'image-textMC'},
        { name: 'Midnight Cookies & Cream', src: '../assets/Midnight.jpg', imageClass: 'imMCC', textClass: 'image-textMCC'},
        { name: 'Belgian Chocolate', src: '/assets/belgianchoco.jpeg', imageClass: 'imBC', textClass: 'image-textBC'},
        { name: 'Brownies A La Mode', src: '../assets/brownie.png', imageClass: 'imBALM', textClass: 'image-textBALM'},
        { name: 'Butter Pecan', src: '/assets/butterpecan.jpeg', imageClass: 'imBP', textClass: 'image-textBP'},
        { name: 'Vanilla Swiss Almond', src: '/assets/VanillaSA.jpeg', imageClass: 'imVSA', textClass: 'image-textVSA'},
        { name: 'Coffee', src: '/assets/coffee.jpeg', imageClass: 'imCoff', textClass: 'image-textCoff'},
        { name: 'Coffee Chip', src: '/assets/coffeechip.jpeg', imageClass: 'imCoffChip', textClass: 'image-textCoffChip'},
        { name: 'Pineapple Coconut', src: '/assets/pineapplecoco.jpeg', imageClass: 'imPC', textClass: 'image-textPC' },
        { name: 'Irish Cream Brownie', src: '/assets/irishcream.png', imageClass: 'imICB', textClass: 'image-textICB' },
        { name: 'Vanilla Chocolate Chip', src: '/assets/vanillachocochip.jpeg', imageClass: 'imVCC', textClass: 'image-textVCC' },
        { name: 'Rum Raisin', src: '/assets/rumraisin.jpeg', imageClass: 'imRumR', textClass: 'image-textRumR' },
        { name: 'Pistachio', src: '/assets/pistachio.jpeg', imageClass: 'imPist', textClass: 'image-textPist' },
        { name: 'Chocolate Peanut Butter Pretzel', src: '/assets/CPBP.png', imageClass: 'imCPBP', textClass: 'image-textCPBP' },
        { name: 'White Chocolate Raspberry', src: '/assets/WCR.jpeg', imageClass: 'imWCR', textClass: 'image-textWCR' },
        { name: 'Sea Salt Caramel Truffle', src: '/assets/IMG-0505.JPG', imageClass: 'imSSCT', textClass: 'image-textSSCT' },
        
        ];

        const [selectedFlavorsTop, setSelectedFlavorsTop] = useState(0);

        useEffect(() => {
            const selectedFlavorsBox = document.getElementById("selected-flavors"); //gets id of selected flavor
            const slideTop = document.querySelector(".icparallax-2").offsetTop;
            //.offsetTop is a property that returns the distance from the top of the element's parent container to the top of the element itself.
            //The result of this line is stored in the slideTop variable, 
            //representing the vertical position of the top of the second parallax section.
            const maxTop = slideTop + document.querySelector(".icparallax-2").clientHeight - selectedFlavorsBox.clientHeight;
            //clientheight is the height of the parallax 2 section
            //so when you subtract it by the height of the boxes.height
            //you get the maximum scroll position
    

            //functions in javascript often have constant variables assigned to them instead 
            const handleScroll = () => {
                const scrollTop = window.scrollY;
                //current scroll position of the user
                if (scrollTop >= slideTop && scrollTop <= maxTop) 
                // checks if the user's scroll position is within the section where you want the selected flavors box to move.
                {
                    //If the scroll position is within the desired range, this line updates the selectedFlavorsTop state variable.
                    //The value being set is the difference between the current scroll position (scrollTop) 
                    //and the starting position of the parallax section (slideTop).
                    setSelectedFlavorsTop(scrollTop - slideTop); //
                }
            };
    
            window.addEventListener("scroll", handleScroll); //when the user scrolls the above thing will happen
    
            return () => {
                window.removeEventListener("scroll", handleScroll); //preventing memory leaks
            };
        }, []);

        let itemcount = 0;
        const toggleFlavor = (flavorName) => {
            const index = selectedFlavors.indexOf(flavorName);
            // getting the index of the clicked flavor in the selectedFlavors array
            if (index === -1) 
            //if the flavor is not already selected, because its not in the array yet
            {
                if (selectedFlavors.length < 2) 
                {
                    setSelectedFlavors(prevSelectedFlavors => [...prevSelectedFlavors, flavorName]);
                    //creates a new array that includes the previous selected flavors and the newly selected flavor.
                } 
                else {
                    // Show a message saying the user can't select more than two flavors
                    alert("You can only select up to two flavors.");
                }
            } 
            else {
                setSelectedFlavors(prevSelectedFlavors => prevSelectedFlavors.filter(flavor => flavor !== flavorName));
                //the .filter() makes a new array, 
                // (flavor => flavor !== flavorName) checks if each flavor is not equal to flavorName.
                
            }
            //this else makes the flavor get unclicked
        };

        const confirmSelection = (updateCartItemCount, openCart) => {
            if (selectedFlavors.length === 0) {
              alert("You need to select at least one flavor.");
            } else if (selectedFlavors.length === 1) {
              if (window.confirm("Are you sure you only want one flavor?")) {
                // Perform any necessary actions for one flavor selection
              }
            } else if (selectedFlavors.length === 2) {
              if (window.confirm("Are you sure you want these two flavors?")) {
                // Perform any necessary actions for two flavor selection
              }
            }
            // Update the cart count
            props.setcartitems(props.cartitems.concat(selectedFlavors));

            clearSelection();
          
            // Open the cart when a selection is confirmed
            openCart();
          };
          
        

        //The window.confirm method is a built-in JavaScript function
        // that displays a confirmation dialog box with a message and two buttons: "OK" and "Cancel."

        const clearSelection = () => {
            setSelectedFlavors([]); // Clear the selected flavors array
          };


        // State to track the number of items in the cart
        const [cartItemCount, setCartItemCount] = useState(0);

        // updating cart count
        const updateCartItemCount = (count) => {
            setCartItemCount(count);
        };

        const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart visibility

  

        const openCart = () => {
            setIsCartOpen(true);
        };
        

    return(
    <>
        
        <Navbar/>

        <div class="icparallax-1">

            <div class="icparallax-content">
                <h1>We have many different flavors to choose from!</h1>
                <h2>Click on a flavor to get started!</h2>
                <h4>(Unclick to remove them)</h4>
            </div>
        </div>

        <div class="icparallax-2">
            <div class="image-grid">
                {flavors.map((flavor,index) => (
                    <div key = {index} className="image-with-text" onClick={() => toggleFlavor(flavor.name)}>
                        <img src={flavor.src} className={flavor.imageClass} alt={`Image of ${flavor.name}`} />
                        <p className={flavor.textClass}>{flavor.name}</p>
                    </div>
                ))}
            </div> 
           
            <div id="selected-flavors" style={{ top: `${selectedFlavorsTop}px` }}>
            {/* top is a css property mean to determine the distance from the top edge of the element's containing block */}
            {/* px specifies pixels */}
                <h2>Selected Flavors:</h2>
                <ul id="flavor-list">
                    {selectedFlavors.map((flavor, index) => (
                        <li key={index}>{flavor}</li>
                    ))}
                </ul>
                <button id="confirm-button" onClick={() => confirmSelection(updateCartItemCount, openCart)}>
                    Confirm Selection
                </button>
                <button id="clear-button" onClick={clearSelection}>
                    Clear All Flavors
                </button>
            </div>

            {isCartOpen && <Cart itemCount={cartItemCount} />}
        </div>

        

        <div class="icparallax-last">
            <div class="icpara3-content">
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

export default IceCream;