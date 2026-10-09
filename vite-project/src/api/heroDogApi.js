import axios from "axios";

const API_URL = "http://localhost:8080/api/herodogs";

const getHeroDogs = async () => {
  try{ 
    const response = await axios.get(API_URL);
    return { success: true, data: response.data};
  } catch (error) {
    return { 
      success: false, 
      message: "Failed to fetch hero dogs.", 
      error,  
    }; 
  }
};

const createHeroDog = async (dog) => {
  try {
    const response = await axios.post(API_URL, dog);
    return { success: true, data: response.data};

  }
  catch (error) {
    return {
      success: false, 
      message: "Failed to create hero dog.",
      error, 
    };
  }
};

const deleteHeroDog = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return { success: true, data: response.data};
  } catch (error) {
    return {
      success: false,
      message: "Failed to delete hero dog.",
      error,
    };
  }
};


export { getHeroDogs, createHeroDog, deleteHeroDog   };