import { useState } from "react";
import { useCountryData } from "../Services/useCountryData.jsx";

function App() {
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
    <>
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
          </ul>
        </article>
      )}
    </>
  );
}
export default App;
