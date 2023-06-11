import React, { useState, useEffect } from 'react';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const DogBreeds = () => {
const [dogBreeds, setDogBreeds] = useState([]);
  useEffect(() => {
    axios.get('https://frontend-take-home-service.fetch.com/dogs/breeds', {
      withCredentials: true
    })
      .then(response => {
        // Update the breeds state with the fetched data
        setDogBreeds(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Empty dependency array to run the effect only once on component mount
// return(<>
//     <Autocomplete 
//         options={dogBreeds}
//         renderInput={(params) => (
//             <TextField
//                 {...params}
//                 label="Select a breed"
//                 variant="outlined"
//             />
//         )}
//     />
// </>);


};

export default DogBreeds;