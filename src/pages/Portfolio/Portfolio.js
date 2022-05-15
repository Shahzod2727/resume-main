import React, { useState,useEffect } from "react";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
// import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import DialogActions from "@mui/material/DialogActions";
import Grow from "@mui/material/Grow";
import resumeDate from "../../utils/resumeDate";
import "./Portfolio.css";
import { DialogContent } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Portfolio = () => {

  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  });

  // const ProjectDialog = () => {
  //   <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}>
  //     <DialogTitle onClose={() => setProjectDialog(false)}>
  //       {projectDialog.title}
  //     </DialogTitle>
  //     <img src="" alt="" />
  //     <DialogContent>{projectDialog.description}</DialogContent>
  //     <DialogActions>
  //       {projectDialog?.links.map((link) => (
  //         <a href={link.link} target="_blank">
  //           {link.icon}
  //         </a>
  //       ))}
  //     </DialogActions>
  //   </Dialog>;
  // };

  return (
    <Grid container spacing={1} className="section pb_45 pt_45">
      {/* Title */}
      <Grid item className="section_title mb_20">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>
      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value={"All"}
            className={
              tabValue == "All" ? "customTabs_item active" : "customTabs_item"
            }
          />
          {[...new Set(resumeDate.portfolio.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == tag ? "customTabs_item active" : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>
      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeDate.portfolio.map((projects) => (
            <>
              {tabValue == projects.tag || tabValue == "All" ? (
                // <Grid item xs={12} sm={6} md={4} lg={3}>
                // Shuni korish kerak
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      data-aos="zoom-out-up"
                      onClick={() => setProjectDialog(projects)}
                    >
                      {/* <CardActions> */}
                      <CardMedia
                        className="customCard_image"
                        component="img"
                        image={projects.image}
                        title={projects.title}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          className="customCard_title"
                        >
                          {projects.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="customCard_caption"
                        >
                          {projects.caption}
                        </Typography>
                      </CardContent>
                      {/* </CardActions> */}
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      {/* <Dialog
        fullWidth
        // maxWidth={'xs'}
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className="projectDialog"
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src={projectDialog.image} alt="" className="projectDialog_img" />
        <DialogContent>
          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a href={link.link} target="_blank" className="projectDialog_icon">
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog> */}
    </Grid>
  );
};

export default Portfolio;
