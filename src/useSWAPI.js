import React, { useState, useEffect } from "react";
import axios from "axios";

const useSWAPI = () => {
  const { ship, setShip } = useState(null);
  useEffect(() => {
    const random = Math.floor(Math.random() * Math.floor(10));
    axios.get("https://swapi.dev/api/starships").then((res) => {
      console.log(res);
    });
  });
};

export default useSWAPI;
