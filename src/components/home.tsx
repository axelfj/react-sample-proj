import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Nav, NavDropdown, NavItem, Navbar } from "react-bootstrap";
import React, { CSSProperties, useEffect, useState } from "react";
import axios, { CancelTokenSource } from "axios";

interface ICat {
  config: string[];
  height: number;
  id: string;
  url: string;
  width: number;
}

const Home = () => {
  const [cat, setCat] = useState<ICat>();

  const [loading, setLoading] = React.useState<boolean>(true);

  const updateImage = () => {
    axios
      .get<any>("https://api.thecatapi.com/v1/images/search", {})
      .then((response) => {
        setCat(response.data[0].url);
        setLoading(false);
      })
      .catch((ex) => {
        let error = axios.isCancel(ex)
          ? "Request Cancelled"
          : ex.code === "ECONNABORTED"
          ? "A timeout has occurred"
          : ex.response.status === 404
          ? "Resource Not Found"
          : "An unexpected error has occurred";

        setLoading(false);
      });
  };

  return (
    <>
      <div className="">
        <h1>Welcome to the real reactivation!</h1>
        <h2>Check a cat..</h2>
        <button onClick={() => updateImage()}>Load another cat...</button>
        <div>
          <img src={`${cat}`} />
        </div>
      </div>
    </>
  );
};

export default Home;
