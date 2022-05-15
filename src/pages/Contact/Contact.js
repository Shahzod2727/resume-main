import React,{useEffect} from "react";
import Grid from "@mui/material/Grid";

import resumeDate from "../../utils/resumeDate";

import TextField from "@mui/material/TextField";
import CustomButton from "../../components/Button/Button";

import { Typography } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });
  return (
    <Grid container spacing={6} className="section pt_45 pb_45">
      {/* Contact form */}
      <Grid item xs={12} lg={7} data-aos="zoom-in">
        <Grid container>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 variant="h6" className="section_title_text">
              Contact Form
            </h6>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="name"
                  variant="standard"
                  label="Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="email"
                  variant="standard"
                  label="E-mail"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  name="message"
                  variant="standard"
                  label="Message"
                />
              </Grid>
              <Grid item xs={12}>
                <CustomButton text="Submit" icon={<EmailIcon />} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Contact information */}
      <Grid item xs={12} lg={5} data-aos="zoom-in">
        <Grid container>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">Contact information</h6>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography className="contactInfo_item">
                  <span>Address:</span>
                  {resumeDate.address}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className="contactInfo_item">
                  <span>Address:</span>
                  {resumeDate.phone}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className="contactInfo_item">
                  <span>Address:</span>
                  {resumeDate.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container className="contactInfo_socialsContainer">
              {Object.keys(resumeDate.socials).map((key) => (
                <Grid className="contactInfo_social" item>
                  <a
                    className="contact-icon-color"
                    href={resumeDate.socials[key].link}
                  >
                    {resumeDate.socials[key].icon}
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
