import React from 'react';


const Zipcode = (props) =>{
    return(
   
      <div>
            {props.cities.map(city => (
                <div key={city.RecordNumber} className= "city-container">
                    <h1>City Name: {city.City}</h1>
                    <h2>State: {city.State}</h2>
                    <h2>Location: {city.Location}</h2>
                    <h2>Population: {city.EstimatedPopulation}</h2>
                    <h2>Total Wages: {city.TotalWages}</h2>
                </div>
            ))}
            
            
        </div>
        
    )
}


    

export default Zipcode;
