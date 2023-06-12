import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from "react-select";
const ZipCodes = (props) => {
const [zipCodes, setZipCodes] = useState([]);
  useEffect(() => {
    axios.post('https://frontend-take-home-service.fetch.com/locations')
      .then(response => {
        console.log(response.data);
        // Update the breeds state with the fetched data
        let zip_Codes_temp = [];
        response.data.map((location) => {
            zip_Codes_temp.push({value: location.zip_cpde, label: location.zip_code});
        });

        setZipCodes(zip_Codes_temp);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Empty dependency array to run the effect only once on component mount

 return(
  <Select isMulti={true} options={zipCodes} onChange={props.handleSelect}/>
 )
};

export default ZipCodes;