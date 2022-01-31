import React from "react";
import Typography from "@mui/material/Typography";
import CustomTimeline from "../Timeline/Timeline";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profilo_name">
        <Typography className="name">Shahzod</Typography>
        <Typography className="title">Title</Typography>
      </div>
      <figure className="profile_image">
        <img src={require("../../assets/images/resume.png")} />
      </figure>
      <div className="profile_information">
        <CustomTimeline title={'Habibov Shahzod Web Devoloper'} />
        <br />
        <button>My Button</button>
      </div>
    </div>
  );
};

export default Profile;
