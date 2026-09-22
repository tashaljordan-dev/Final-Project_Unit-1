import axios from "axios";

const API_URL = "http://localhost:8080/api/herodogs";

const getHeroDogs = () => {
  return axios.get(API_URL);
};

const createHeroDog = (dog) => {
  return axios.post(API_URL, dog);
};

const deleteHeroDog = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};


export { getHeroDogs, createHeroDog, deleteHeroDog   };