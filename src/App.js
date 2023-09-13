import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
// '/Users/rodneydaniel/git/Haagen Dazs/my-react-app/src/Components/Home/Home'
import Home from './Components/Home/Home';
// '/Users/rodneydaniel/git/Haagen Dazs/my-react-app/src/Components/About/About'
import About from './Components/About/About';
import IceCream from './Components/IceCream/IceCream';
import Catering from './Components/Catering/Catering';


function ScrollToTop() {
  const { pathname } = useLocation();
  //useLocation lets us access information about the current URL in a component.
  //the information im specifying is the pathname

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [pathname]); //this is the structure of a useeffect functino, the array shows when something is supposed to be used 
    //it only runs when the pathname changes, if the array was empty its only supposed to run once

  return null; // This component doesn't render anything
}

function App() {
  return (
    <>
    
    <Router>
    <ScrollToTop/>
      <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Home"  exact element={<Home/>} />
          <Route path="/About" exact element={<About/>} />
          <Route path="/IceCream" exact element={<IceCream/>} />
          <Route path="/Catering" exact element={<Catering/>} />
          {/* Add more routes here for other pages */}
      </Routes>
    </Router>
    </>
  );
}


export default App;


