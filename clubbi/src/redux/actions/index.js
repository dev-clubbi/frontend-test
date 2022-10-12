import { LOCATION } from "./actionTypes";

export const actionLocation = (payload) => (
  {
    type: LOCATION,
    payload: apiLocation(),
  }
);

const apiLocation = async() => {
  const searchLocation = await fetch('https://ghibliapi.herokuapp.com/locations');
  const response = await searchLocation.json();
  console.log(response[0]);

  return response[0];
}

export default apiLocation;