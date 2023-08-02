import axios from "axios";
import { useMemo, useState } from "react";

const useRequest = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [status, setStatus] = useState();

  const getDataHandler = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      console.log(response);
      console.log(response.data);
      setData(response.data);
      setStatus(response.status);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError({
        code: error.code,
        message: error.message,
      });
      setStatus(error.response.status);
      setIsLoading(false);
    }
  };

  return { getDataHandler, data, isLoading, error, status };
};
export default useRequest;
