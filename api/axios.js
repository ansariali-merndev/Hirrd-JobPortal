import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postJob = async (data) => {
  try {
    const res = await instance.post("/post-job", data);
    return res.data;
  } catch (error) {
    console.error("Error posting job: ", error.response?.data || error.message);
    throw error;
  }
};

export const getJobByEmail = async (email) => {
  try {
    const res = await instance.post("/get-job", email);
    return res.data;
  } catch (error) {
    console.log("Error: ", error.message);
    throw error;
  }
};
