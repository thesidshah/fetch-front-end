import React, { useState, useEffect } from 'react';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Select from "react-select";
const DogBreeds = (props) => {
const [dogBreeds, setDogBreeds] = useState([]);
  useEffect(() => {
    axios.get('https://frontend-take-home-service.fetch.com/dogs/breeds', {
      withCredentials: true
    })
      .then(response => {
        // Update the breeds state with the fetched data
        let dogBreeds_temp = [];
        response.data.map((breed) => {
            dogBreeds_temp.push({value: breed, label: breed});
        });

        setDogBreeds(dogBreeds_temp);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Empty dependency array to run the effect only once on component mount

 return(
//     <select multiple className="border flex-col" id="breed" name="breed" defaultValue={['default']} onChangeCapture={props.handleSelect}>
//     <option key = "default" value="" ></option>
//     {dogBreeds.map((breed) => (
//       <option key={breed} value={breed}>
//         {breed}
//       </option>
//     ))}
//   </select>
  <Select isMulti={true} options={Object.values(dogBreeds)}/>
 )
};

export default DogBreeds;