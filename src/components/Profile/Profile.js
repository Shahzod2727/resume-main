import React from "react";
import Typography from "@mui/material/Typography";
import CustomTimeline, { CustomTimeLineSeparator } from "../Timeline/Timeline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import resumeDate from "../../utils/resumeDate";
import CustomButton from "../Button/Button";
import GetAppIcon from "@mui/icons-material/GetApp";
import "./Profile.css";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimeLineSeparator />
    <TimelineContent className="timeline-content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target={"_blank"}>
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profilo_name">
        <Typography className="name">{resumeDate.name}</Typography>
        <Typography className="title">{resumeDate.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={require("../../assets/images/resume.png")} />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title="Name" text={resumeDate.name} />
          <CustomTimelineItem title="Title" text={resumeDate.title} />
          <CustomTimelineItem title="Email" text={resumeDate.email} />

          {Object.keys(resumeDate.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeDate.socials[key].text}
              link={resumeDate.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <br />
        <div className="button_container">
          <CustomButton text={"Download Cv"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
