import React from "react";
import Grid from "@mui/material/Grid";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import Icon from "@mui/material/Icon";
import resumeDate from "../../utils/resumeDate";
import { spacing } from "@mui/system";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import CustomButton from "../../components/Button/Button";
// import TimelineDot from '@mui/lab/TimelineDot';

// import experiencesData from '../../utils/experiencesData'

import CustomTimeline, {
  CustomTimeLineSeparator,
} from "../../components/Timeline/Timeline";

import { Typography } from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";

import TimelineContent from "@mui/lab/TimelineContent";
import "./Resume.css";
import TimelineDot from "@mui/lab/TimelineDot";
import EmailIcon from "@mui/icons-material/Email";

const Resume = () => {
  return (
    // xs, extra-small: 0px.
    // sm, small: 600px.
    // md, medium: 960px.
    // lg, large: 1280px.
    // xl, extra-large: 1920px.

    <>
      {/* About me */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 variant="h6" className="section_title_text">
            About Me
          </h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text" variant="h6">
            {resumeDate.about}
          </Typography>
        </Grid>
      </Grid>
      {/* Education and experiences */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 variant="h6" className="section_title_text">
            Resume
          </h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* Experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title={"Work Experience"} icon={<WorkIcon />}>
                {resumeDate.experiences &&
                  resumeDate.experiences.map((experience) => (
                    <TimelineItem>
                      <CustomTimeLineSeparator />
                      <TimelineContent className="timeline_content">
                        <Typography className="timeline_title">
                          {experience.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {experience.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {experience.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
              </CustomTimeline>
            </Grid>

            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title={"Education"} icon={<SchoolIcon />}>
                {resumeDate.educations &&
                  resumeDate.educations.map((education) => (
                    <TimelineItem>
                      <CustomTimeLineSeparator />
                      <TimelineContent className="timeline_content">
                        <Typography className="timeline_title">
                          {education.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {education.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {education.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 variant="h6" className="section_title_text">
            My Services
          </h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent="space-around">
            {resumeDate.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid
        container
        // spacing={3}

        className="section graybg pb_45 p_50"
      >
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" spacing={3}>
            {resumeDate.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skills_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant="body2" className="skill_description">
                      <TimelineDot
                        variant={"outlined"}
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* xs, extra-small: 0px.
          sm, small: 600px.
          md, medium: 960px.
          lg, large: 1280px.
          xl, extra-large: 1920px. */}
      {/* Contact */}
      <Grid container spacing={6} className="section pt_45 pb_45">
        {/* Contact form */}
        <Grid item xs={12} lg={7}>
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
        <Grid item xs={12} lg={5}>
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
                    <a href={resumeDate.socials[key].link}>
                      {resumeDate.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
