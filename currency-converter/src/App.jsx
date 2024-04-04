// App.js
import React from "react";
import CurrencyConverter from "./components/currencyconvertor";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="container">
        <CurrencyConverter />
      </div>
    </div>
  );
}
