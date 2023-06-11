import axios from "axios";
import DogBreeds from "./DogBreeds";
import SearchBar from './SearchBar';
const handleSearch = (args) => {
    console.log(args);
} 

const handleFilter = (e) => {
    console.log('needs working');
}

const Navbar =() => {
    return(<><nav className="navbar">
            <input type="search" id='searchbar' className="border" onChange={handleFilter} placeholder="Input your search for doggo"/>
            <button type='button' onClick={handleSearch} className="border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
        </nav>
        <SearchBar/>
        <DogBreeds/>
        </>
    );
}
export default Navbar;