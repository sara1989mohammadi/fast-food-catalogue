import axios from "axios";

export default axios.create({
  baseURL: "https://fast-food-catalogue-default-rtdb.firebaseio.com",
});
