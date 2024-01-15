import { useState, useEffect } from "react";

export function useCountryData() {
  const [country, setCountry] = useState({});
  const [code, setCode] = useState(""); 

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch("https://countries.trevorblades.com/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              query Country($code: ID!) {
                country(code: $code) {
                  code
                  name
                  capital
                  continent {
                    code
                    name
                  }
                    currency
                    languages {
                      name
                    }
                  
                }
              }`,
            variables: { code: code },
          }),
        });

        const data = await response.json();
        setCountry(data?.data?.country || {});
      } catch (error) {
        console.error("Error fetching country data:", error);
        setCountry({});
      }
    };

    if (code) {
      fetchCountryData();
    }
  }, [code]);

  return {
    country,
    setCode,
  };
}