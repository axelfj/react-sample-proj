import { Button, Header, Image } from "./shared/styledComponents";
import React, { useState } from "react";

import axios from "axios";

interface ApiCat {
  breeds: Array<any>;
  height: number;
  id: string;
  url: string;
  width: number;
}

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
