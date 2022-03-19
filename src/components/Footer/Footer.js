import { Typography } from "@mui/material";
import React from "react";
import resumeDate from "../../utils/resumeDate";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeDate.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and Developed by{" "}
          <a href="/" target={"_blank"}>
           Shahzod Habibov
          </a>
          <br />
          Clone idea from{" "}
          <a href="https://themeforest.net/user/tavonline" target={"_blank"}>
          Tavonline
          </a>.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
