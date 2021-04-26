import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Nav, NavDropdown, NavItem, Navbar } from "react-bootstrap";
import React, { CSSProperties, useEffect, useState } from "react";
import axios, { CancelTokenSource } from "axios";

import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

interface ApiCat {
  breeds: Array<any>;
  height: number;
  id: string;
  url: string;
  width: number;
}

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.img`
  height: 720px;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.h1`
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const Home = () => {
  const [cat, setCat] = useState<ApiCat>();

  const [loading, setLoading] = React.useState<boolean>(true);

  const updateImage = () => {
    axios
      .get<ApiCat[]>("https://api.thecatapi.com/v1/images/search", {})
      .then(({ data }) => {
        setCat(data[0]);
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
        throw error;
      });
  };

  return (
    <>
      <div>
        <Header>Welcome to the real reactivation!</Header>
        <Header>Check a cat..</Header>
        <Button onClick={() => updateImage()}>Load a cat...</Button>
        <div>
          <Image src={`${cat ? cat.url : ""}`} />
        </div>
      </div>
    </>
  );
};

export default Home;
