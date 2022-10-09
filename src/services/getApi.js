import axios from "axios";

const getAPI = (endpoint) => axios.get(
    `https://ghibliapi.herokuapp.com/${endpoint}`
    )
    .then((response) => response)
    .catch((error) => error);

export default getAPI