import React from "react";
import Grid from "@mui/material/Grid";
import resumeDate from "../../utils/resumeDate";
import "./Resume.css";
import { Typography } from "@mui/material";
const Resume = () => {
  return (
    // xs, extra-small: 0px.
    // sm, small: 600px.
    // md, medium: 960px.
    // lg, large: 1280px.
    // xl, extra-large: 1920px.

    <>
      {/* About me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_45">
          <span></span>
          <h6 variant="h6" className="section_title_text">
            About Me
          </h6>
        </Grid>
        <Grid item>
          
          <Typography xs={12} variant='body2' className="aboutme_text" variant="h6">
            {resumeDate.about}
          </Typography>
        </Grid>
      </Grid>
      {/* Education and experiences */}
      <Grid container className="section"></Grid>

      {/* Services */}
      <Grid container className="section"></Grid>

      {/* Skills */}
      <Grid container className="section"></Grid>

      {/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
