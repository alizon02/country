import React from 'react'
import { useState } from "react";
import { useCountryData } from "../Services/useCountryData.jsx";

export default function SearchBar() {
    const { country, setCode } = useCountryData();
  const [codeInput, setCodeInput] = useState("");

  const handleSearch = () => setCode(codeInput.toUpperCase());
  const handleInputChange = (e) => setCodeInput(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div>
         <input
      
      id="searchCountry"
      type="text"
      value={codeInput}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown} 
      maxLength={2}
      
    />

    {!country ? (
      <p>No country found</p>
    ) : (
      <article>
        <ul id="dataCountry">
          <li>Code: {country.code}</li>
          <li>Name: {country.name}</li>
          <li>Capital: {country.capital}</li>
          <li>Continent: {country.continent?.name || "N/A"}</li>
          <li>Currency: {country.currency}</li>
          <li>Languages: {country.languages && country.languages.map(lang => lang.name).join(', ')}</li>
          <img src={`https://flagsapi.com/${country.code}/flat/64.png`} alt={country.name} />
        </ul>
      </article>
    )}
    </div>
  )
}
