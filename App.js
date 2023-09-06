
import './App.css';
import React, { useState } from 'react';


function App() {
  const [lobsterSupplyPrice, setLobsterSupplyPrice] = useState(2);
  const [lobsterGuestPrice, setLobsterGuestPrice] = useState(5);
  const [guestLobsterOrdered, setGuestLobsterOrdered] = useState(1)
  const [lobsterInventory, setInventory] = useState(10);


  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://64.media.tumblr.com/a956d3331221f840caeb4b02203922ed/tumblr_mf8pmn1Ko61qk46vzo1_1280.jpg"} />
        
        <p>
          Lobster Supply Price
        </p>

        <input
          type="number"
          id="quantity"
          name="quantity"
          value={lobsterSupplyPrice}
          onChange={(e) => setLobsterSupplyPrice(e.target.value)}
        />

        <p>
          Lobster Guest Price
        </p>
        
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={lobsterGuestPrice}
          onChange={(e) => setLobsterGuestPrice(e.target.value)}
        />

        <p>
          Lobster Profit per Lobster
        </p>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={lobsterGuestPrice-lobsterSupplyPrice}
        />

        <p>
          Total Guest Lobster Ordered
        </p>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={guestLobsterOrdered}
          onChange={(e) => setGuestLobsterOrdered(e.target.value)}
        />

        <p>
          Total Profit
        </p>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={guestLobsterOrdered*(lobsterGuestPrice-lobsterSupplyPrice)}
        />

        <p>
          Lobster Inventory
        </p>

        <input
          type="number"
          id="quantity"
          name="quantity"
          value={lobsterInventory-guestLobsterOrdered}
        />
        
        </header>
    </div>
  );
}

export default App;

