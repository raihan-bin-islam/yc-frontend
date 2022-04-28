import React, { useState, useEffect } from "react";

const useToken = (email = "admin@example.com", password = "yy@123456") => {
  const [token, setToken] = useState("");
  // Get token value from the api
  const HandleToken = async () => {
    const baseUrl = process.env.baseUrl;
    await fetch(`${baseUrl}/login`, {
      method: "POST",
      withCredentials: "true",
      headers: {
        Accept: "application/json",
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => setToken(data.data.token))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    HandleToken();
  }, []);

  // Set local storage on the browser not on the server-side
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }

  return token;
};

export default useToken;
