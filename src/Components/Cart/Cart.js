import React, { useState } from 'react';
import "./Cart.css"


function Cart({ itemCount }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cart">
      <div className={`cart-icon ${isOpen ? 'open' : ''}`} onClick={toggleCart}>
        🛒
        {itemCount > 0 && (
          <span className="cart-badge">{itemCount}</span>
        )}
      </div>
      {isOpen && (
        <div className="cart-content">
          {/* Cart content goes here */}
          {/* For example, you can display a list of selected items */}
          <h3>Selected Items:</h3>
          <ul>
            {/* Map through selected items and display them */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Cart;
