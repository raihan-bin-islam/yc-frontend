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
        const reverse = data.data
          .slice(0)
          .reverse()
          .map((element) => {
            return element;
          });
        setData(reverse);
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

  return data;
};

export default useFetch;
