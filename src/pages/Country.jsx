import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../Api/postApi";
import CountryCard from "../components/latout/CountryCard";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
      console.log(res);
    });
  }, []);
  if (isPending) return <h1>Loding...</h1>;
  return (
    <>
      <section className="country-section">
        <ul className="grid grid-four-cols">
          {countries.map((curCountry, index) => {
            return <CountryCard country={curCountry} key={index} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default Country;
