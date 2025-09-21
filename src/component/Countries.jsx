import React, { useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

import { use } from 'react';

const Countries = ({countriesPromise}) => {

    const [visitedCountries,setVisitedCountries]=useState([])
    const handelVisitedCountries=(country)=>{
       
        const newVisitedCountry=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountry)

    }
    const countriesData =use(countriesPromise)
    const countries = countriesData.countries
   
    

    return (
        <div>
            <h1>Total Countries:{countries.length}</h1>
            <h2>Total visited Country:{visitedCountries.length}</h2>
            <ol>
            {
                visitedCountries.map(country=><li>{country.name.common}</li>)
            }</ol>
           <div className='countries'>
             {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handelVisitedCountries={handelVisitedCountries}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;