import { useState, useEffect } from "react";
import { FormGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function CityFilter() {

  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState('')

  useEffect(() => {
    getCitiesFromJson();
  }, []);

  // const getCitiesFromJson = () => {
  //   fetch('./data/israel-cities.json').then(data => data.json()).then(res => { return res });
  // }

  const getCitiesFromJson = async () => {
    let response = await fetch('./data/israel-cities.json');
    let data = await response.json(); //the values
    setCities(data);
  }

  return (
      
    <div>
      <datalist id="cities-list">
        {
          cities.map(city => {
            return <option value={city.name}>{city.id} - {city.name}</option>
          })
        }
      </datalist>
      <input list="cities-list" value={selectedCity}
        onChange={(event) => { setSelectedCity(event.target.value) }} />
      <br />
      <span>{selectedCity}</span>
    </div>
  );
}

export default CityFilter;
