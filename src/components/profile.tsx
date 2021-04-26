import { Header, Button as TheButton } from "./shared/styledComponents";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const FinalBtn = styled.button`
  display: flex;
  justify-content: center;
  align-item: center;
`;

const Profile = () => {
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
