import React,{useState,useEffect} from 'react';
import Countries from '../src/components/Countries';
import './App.css';
import country from './components/country';
import Search from './components/search';


const url ="https://restcountries.com/v3.1/all";

const App = () => {

  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setfilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setisLoading(true);
    try{
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setfilteredCountries(data);
    // setisLoading(false);
    // setError(null);
    setisLoading('')
  }catch(error){
   
    setisLoading(false);
    setError(error);
  }

  }

  useEffect(()=> {
    fetchData(url)
  }, [])

    const handleRemoveCountry = (name) => {

        const filter = filteredCountries.filter((country) => country.name.common !== name);
        setfilteredCountries(filter)
    };
    const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value)
    });
    setfilteredCountries(newCountries);
    }
  return (
    <>
    <h1>country App</h1>
    <Search onsearch={handleSearch}/>
    {isLoading && <h2>Loading...</h2>}
    {error && <h2>{error.message}</h2>}
    {countries && <Countries countries = {filteredCountries} 
    onRemoveCountry = {handleRemoveCountry}/>}
    </>
  )
};

export default App;
