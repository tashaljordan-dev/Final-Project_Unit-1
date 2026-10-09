import axios from "axios";

const API_URL = "http://localhost:8080/api/resources";

const getResources = async () => {
  try {
    const response = await axios.get(API_URL);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch resources.",
      error,
    };
  }
};

const createResource = async (resource) => {
  try {
    const response = await axios.post(API_URL, resource);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: "Failed to create resource.",
      error,
    };
  }
};

const deleteResource = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: "Failed to delete resource.",
      error,
    };
  }
};

export { getResources, createResource, deleteResource };
