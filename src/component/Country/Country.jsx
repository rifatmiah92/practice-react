import React, { useState } from "react";
import "./country.css";

const Country = ({ country,handelVisitedCountries }) => {
//   console.log(country);
const [visited,setVisited] = useState(false)
  const handlerVisit= ()=>{
    // first system
    // setVisited(visited?false : true)
//   easy system
    setVisited(!visited)
    handelVisitedCountries(country)}
  return (
    <div className={`country ${visited && 'visited'}`}>
      <img src={country.flags.flags.png} alt="" />
      <h4>
        Name:{country.name.common} Region:{country.region.region}
      </h4>
      <h5>
        Full Name:{country.name.official} Area:{country.area.area}
        {country.area.area > 300000 ? "    Big Country" : "    Small Country"}
      </h5>
      <h4>
        Population:{country.population.population} Capital:
        {country.capital.capital}
      </h4>
      <button onClick={handlerVisit}>{visited?"Visited":"Not Visited"
        }</button>
    </div>
  );
};

export default Country;
