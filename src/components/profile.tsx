import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const Profile = () => {
  return (
    <div>
      <h1>
        <Link to="/Profile/Details">Details</Link>
      </h1>
      <Button href="/">Logout</Button>
    </div>
  );
};

export default Profile;
