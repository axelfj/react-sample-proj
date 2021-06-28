import React from "react";
import { Button as TheButton, Header, Image } from "./shared/styledComponents";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FinalBtn = styled.button`
  display: flex;
  justify-content: center;
  align-item: center;
`;


const Profile = () => {
  const data = fetch('http://localhost:5000/user').then(response => response.json()).then(data => console.log(data));
  return (
    <div>
      <Header>
        <Link to="/Profile/Details">Details</Link>
      </Header>
      <TheButton>
        <Button href="/" className={`text-align: center`}>
          Logout
        </Button>
      </TheButton>
    </div>
  );
};

export default Profile;
