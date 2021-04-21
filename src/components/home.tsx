import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Nav, NavDropdown, NavItem, Navbar } from "react-bootstrap";
import React, { CSSProperties, useEffect, useState } from "react";
import axios, { CancelTokenSource } from "axios";

import data from "../fakeBackend/db.json";

interface ICat {
  breeds: string[];
  height: number;
  id: string;
  url: string;
  width: number;
}

const Home = () => {
  const [cat, setCat] = useState<ICat>();

  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const [change, setChange] = useState(false);

  React.useEffect(() => {
    updateImage();
  }, [change]);

  const updateImage = () => {
    axios
      .get<any>("https://api.thecatapi.com/v1/images/search", {})
      .then((response) => {
        setCat(response.data[0].url);
        setLoading(false);
        setChange(false);
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
        setChange(false);
      });
  };

  const getData = () => {
    data.users.map((x) => console.log(x));
    data.users.push({ username: "username3", password: "pass2" });
    data.users.map((x) => console.log(x));
  };

  return (
    <div className="App">
      <h1>Welcome to the real reactivation!</h1>
      <h2>Check a cat..</h2>
      <button onClick={() => getData()}>Load data...</button>
      <button onClick={() => setChange(true)}>Load another cat...</button>
      <tr />
      <img src={`${cat}`} />
    </div>
  );
};

export default Home;
