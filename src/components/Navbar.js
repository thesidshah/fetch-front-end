import axios from "axios";
import { useState } from "react";
import DogBreeds from "./DogBreeds";
import { useEffect } from "react";
import ZipCodes from "./ZipCodes";
const handleSearch = (args) => {
    console.log(document.getElementById('searchbar').value);
} 


const Navbar =(props) => {
    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedZipCodes, setSelectedZipCodes] = useState([]);
    useEffect(() => {
        handleGetRequest();
      }, [selectedValues]);
      useEffect(() => {
        handleGetRequest();
      }, [selectedZipCodes]);
  const HandleSelect = (event) => {
    const options = event.map(obj => obj.value);
    setSelectedValues(options);
  };
  const HandleZipSelect = (event) => {
    const options = event.map(obj => obj.value);
    setSelectedZipCodes(options);
    };
  
  const handleGetRequest = async () => {
    await axios.get('https://frontend-take-home-service.fetch.com/dogs/search', {
     params: { breeds: selectedValues},

    })
    .then((response) => {
      // Handle the response
    //   console.log(selectedValues + ' is selected');
      props.handleSearch(response.data);
    })
    .catch((error) => {
      // Handle the error
      console.error(error);
    });
  };

    return(<div className="flex flex-row-reverse justify-between">
        {/* <nav className="navbar">
            <input type="search" id='searchbar' className="border flex-col" placeholder="Input your search for doggo"/>
            <button type='button' onClick={handleSearch} className="flex-col border bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Search</button>
        </nav> */}
        <ZipCodes handleSelect = {HandleZipSelect}/>
        <DogBreeds handleSelect = {HandleSelect}/>
        <img 
                alt=""
                className="h-14 w-14"
                src="https://asset.brandfetch.io/id7Cm60rQf/idetOx4h9a.svg"/>
        </div>
    );
}
export default Navbar;