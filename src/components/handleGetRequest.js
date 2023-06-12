
import axios from "axios";
const handleGetRequest = async ({
    url,
    selectedValues,
    zip_Codes,
    props 
}) => {
    let params = {}
    if(zip_Codes){
        params.zipCodes = zip_Codes;
    }
    if(selectedValues){
        params.breeds = selectedValues;
    }
    await axios.get(url, {
     params: params,
    })
    .then((response) => {
      // Handle the response
      console.log(selectedValues + ' is selected');
      props.handleSearch(response.data);
    })
    .catch((error) => {
      // Handle the error
      console.error(error);
    });
  };
  export default handleGetRequest;