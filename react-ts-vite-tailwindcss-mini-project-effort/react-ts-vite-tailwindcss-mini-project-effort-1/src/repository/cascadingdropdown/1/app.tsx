import React from 'react'
import { useState } from 'react';

const CustomApp = () => {
  return (
    <div>
        <DynamicDropdowns/>
    </div>
  )
}

export default CustomApp

interface Option {
    id: number;
    name: string;
  }
  
  const DynamicDropdowns: React.FC = () => {
    const [countries, setCountries] = useState<Option[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<number | null>(null);
    const [cities, setCities] = useState<Option[]>([]);
    const [selectedCity, setSelectedCity] = useState<number | null>(null);
  
    // Simulated data for countries and cities
    const countryData: Option[] = [
      { id: 1, name: 'USA' },
      { id: 2, name: 'Canada' },
      { id: 3, name: 'India' },
    ];
  
    const cityData: { [key: number]: Option[] } = {
      1: [
        { id: 1, name: 'New York' },
        { id: 2, name: 'Los Angeles' },
      ],
      2: [
        { id: 3, name: 'Toronto' },
        { id: 4, name: 'Vancouver' },
      ],
      3:[
        {id:5,name:'Uttar Pradesh'},
        {id:6,name:'Maharashtra'},
        {id:7,name:'Jammu & Kashmir'},
        {id:8,name:'Andhra Pradesh'},
        {id:9,name:'Gujarat'},
      ]
    };
  
    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const countryId = parseInt(event.target.value);
      setSelectedCountry(countryId);
      setSelectedCity(null);
      setCities(cityData[countryId]);
    };
  
    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const cityId = parseInt(event.target.value);
      setSelectedCity(cityId);
    };
  
    return (
      <div>
        <h2>Select Country:</h2>
        <select className='mb-[10px]' value={selectedCountry || ''} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {countryData.map(country => (
            <option key={country.id} value={country.id}>{country.name}</option>
          ))}
        </select>
  
        {selectedCountry && (
          <>
            <h2>Select City:</h2>
            <select value={selectedCity || ''} onChange={handleCityChange}>
              <option value="">Select City</option>
              {cities.map(city => (
                <option key={city.id} value={city.id}>{city.name}</option>
              ))}
            </select>
          </>
        )}
      </div>
    );
  };

