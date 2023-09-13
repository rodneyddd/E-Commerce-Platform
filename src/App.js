import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
// '/Users/rodneydaniel/git/Haagen Dazs/my-react-app/src/Components/Home/Home'
import Home from './Components/Home/Home';
// '/Users/rodneydaniel/git/Haagen Dazs/my-react-app/src/Components/About/About'
import About from './Components/About/About';
import IceCream from './Components/IceCream/IceCream';
import Catering from './Components/Catering/Catering';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Home"  exact element={<Home/>} />
          <Route path="/About" exact element={<About/>} />
          <Route path="/IceCream" exact element={<IceCream/>} />
          <Route path="/Catering" exact element={<Catering/>} />
          {/* Add more routes here for other pages */}
      </Routes>
    </Router>
  );
}

export default App;