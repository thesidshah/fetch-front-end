import axios from "axios";
import { useState } from "react";
import DogBreeds from "./DogBreeds";
import SearchBar from './SearchBar';
const handleSearch = (args) => {
    console.log(document.getElementById('searchbar').value);
} 

const handleFilter = (e) => {
    console.log('needs working');
}

const Navbar =() => {
    const [selectedValues, setSelectedValues] = useState([]);
    
  const handleSelect = (event) => {
    const options = event.target.options;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedValues(selectedValues);
    handleGetRequest();
  };

  
  const handleGetRequest = () => {
    axios.get('https://frontend-take-home-service.fetch.com/dogs/search', {
      breeds: selectedValues,

    })
    .then((response) => {
      // Handle the response
      console.log(response.data);
    })
    .catch((error) => {
      // Handle the error
      console.error(error);
    });
  };

    return(<div className="flex flex-row-reverse justify-between"><nav className="navbar">
            <input type="search" id='searchbar' className="border flex-col" placeholder="Input your search for doggo"/>
            <button type='button' onClick={handleSearch} className="flex-col border bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Search</button>
        </nav>
        <DogBreeds handleSelect = {handleSelect}/>
        <img 
                alt=""
                className="h-14 w-14"
                src="https://asset.brandfetch.io/id7Cm60rQf/idetOx4h9a.svg"/>
        </div>
    );
}
export default Navbar;