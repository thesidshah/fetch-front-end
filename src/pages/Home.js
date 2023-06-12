import React, { useState } from "react";
import CardList from "../components/CardList";
import Navbar from "../components/Navbar";
import { Button } from "@material-ui/core";
import axios from "axios";
const HomePage = () => {
    let [data, setData] = useState([]);
    let [nextPage, setNextPage] = useState(null);
    const HandleBreedSearch = (args) => {
        const resultIds = [];
        args.resultIds.map(id => { resultIds.push(id)});
        // console.log(resultIds);
        setNextPage(args.next);
        axios.post('https://frontend-take-home-service.fetch.com/dogs/',  [...resultIds])
          .then((response) => {
            // Handle the response
            // console.log(response);
            setData(response.data);
          })
          .catch((error) => {
            // Handle the error
            console.error(error);
          });
        };
    
    
    return (<>
    <Navbar handleSearch={HandleBreedSearch}/>
    Hello
    <CardList data={data}/>
    <div>
        <Button onClick={() => {}}>Next Page</Button>
    </div>
    </>)
}
export default HomePage;