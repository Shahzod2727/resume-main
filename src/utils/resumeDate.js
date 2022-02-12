import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
// import WebIcon from "@mui/icons-material/Web";
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
// import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
export default {
  name: "Shahzod Habibov",
  title: "Full stack developer",

  birthday: "08th July 1999",
  email: "shahzodjava@gmail.com",
  address: "Buxoro Vobkent Rozmoz(QFY)",
  phone: "+99891 2401743",

  socials: {
    Facebook: {
      link: "https://www.facebook.com",
      text: "ShahzodIsCoding",
      icon: <FacebookIcon />,
    },
    Twitter: {
      link: "https://www.twitter.com",
      text: "MyTwitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com",
      text: "MyLinkedin",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://www.github.com",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
  },
  about:
    "Assalamu alaykum! I am Asadbek Azamov, born on May 12, 1999. I live in Kyzyltepa district, Navoi region, Republic of Uzbekistan. I am a student of Tashkent University of Information Technologies. Since 2019, I have been dealing with the frontend part of Web programming. My goal is to contribute to the development of IT in our country.",
  experiences: [
    {
      title: "work 1",
      date: "2018 - Present",
      description:
        "React programmer at the ‘Agro-Industrial Digitization Center’",
    },
    {
      title: "work 2",
      date: "2018 - 2015",
      description:
        "React programmer at the ‘Agro-Industrial Digitization Center’",
    },
    {
      title: "work 3",
      date: "Aug 2016 - Sept 2018",
      description:
        "React programmer at the ‘Agro-Industrial Digitization Center’",
    },
  ],

  educations: [
    {
      title: "Education 1",
      date: "2018 - Present",
      description:
        "React programmer at the ‘Agro-Industrial Digitization Center’",
    },
    {
      title: "Education 2",
      date: "2018 - 2015",
      description:
        "React programmer at the ‘Agro-Industrial Digitization Center’",
    },
    {
      title: "Education 3",
      date: "Aug 2016 - Sept 2018",
      description:
        "React programmer at the ‘Agro-Industrial Digitization Center’",
    },
  ],
  services: [
    {
      title: "Web Development",
      description: "I have a been a badass web developer for 10 years",
      icon: <WebOutlinedIcon />,
    },
    {
      title: "Branding Identity",
      description: "I have a been a badass web developer for 10 years",
      icon: <AssessmentOutlinedIcon />,
    },
    {
      title: "Illustrator",
      description: "I have a been a badass web developer for 10 years",
      icon: <WebOutlinedIcon />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJS",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "Java", "Python", "Solidity"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "Ms SQL Server", "MySQL", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "Github", "SCRUM/Agile"],
    },
  ],
};
