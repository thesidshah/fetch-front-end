import axios from "axios";
import DogBreeds from "./DogBreeds";
import SearchBar from './SearchBar';
const handleSearch = (args) => {
    console.log(document.getElementById('searchbar').value);
} 

const handleFilter = (e) => {
    console.log('needs working');
}

const Navbar =() => {
    const handleSelect = (e) => {
        console.log(e.target.value);
    }
    return(<div className="flex flex-row-reverse justify-between"><nav className="navbar">
            <input type="search" id='searchbar' className="border flex-col" placeholder="Input your search for doggo"/>
            <button type='button' onClick={handleSearch} className="flex-col border bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Search</button>
        </nav>
        <DogBreeds handleSelect = {handleSelect}/>
        </div>
    );
}
export default Navbar;