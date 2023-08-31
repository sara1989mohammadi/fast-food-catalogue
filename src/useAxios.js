import axios from "axios";
import { useEffect, useState } from "react";

// export default axios.create({
//   baseURL: "https://fast-food-catalogue-default-rtdb.firebaseio.com",
// });
const instance = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com",
});

const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDate = async () => {
    try {
      const result = await instance.request(axiosParams);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDate();
  }, [axiosParams.url]);
  return [response, error, loading];
};
export default useAxios;
