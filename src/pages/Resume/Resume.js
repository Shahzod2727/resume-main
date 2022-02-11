import React from "react";
import Grid from "@mui/material/Grid";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from '@mui/icons-material/School';
import resumeDate from "../../utils/resumeDate";
// import experiencesData from '../../utils/experiencesData'

import CustomTimeline, {
  CustomTimeLineSeparator,
} from "../../components/Timeline/Timeline";

import { Typography } from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";

import TimelineContent from "@mui/lab/TimelineContent";
import "./Resume.css";

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
      <Grid container className="section">
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
                {resumeDate. educations &&
                  resumeDate. educations.map((education) => (
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
      <Grid container className="section"></Grid>

      {/* Skills */}
      <Grid container className="section"></Grid>

      {/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
