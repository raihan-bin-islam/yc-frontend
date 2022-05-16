import { useState, useEffect } from "react";

const useFetch = (endPoint) => {
  // state to hold the data
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);

  // Fetch the data from the api based on the endpoint
  const fetchData = async () => {
    const baseUrl = process.env.baseUrl;
    setIsPending(true);

    await fetch(`${baseUrl + endPoint}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setIsPending(false);
        // console.log(data);
        setData(data);
      })
      .catch((err) => {
        setIsPending(false);
        console.log(err);
      });
  };
  //
  useEffect(() => {
    fetchData();
  }, [endPoint]);

  return [isPending, data];
};

export default useFetch;
