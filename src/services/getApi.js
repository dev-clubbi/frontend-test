import axios from "axios";

const getAPI = () => axios.get(
    'https://ghibliapi.herokuapp.com/films'
    )
    .then((response) => response)
    .catch((error) => error);

export default getAPI