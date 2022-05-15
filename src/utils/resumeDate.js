import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
// import WebIcon from "@mui/icons-material/Web";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
// import AssignmentIcon from "@mui/icons-material/Assignment";
import InstagramIcon from '@mui/icons-material/Instagram';
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
export default {
  name: "Shahzod Habibov",
  title: "Full stack developer",

  birthday: "08th July 1999",
  email: "shahzodjava@gmail.com",
  address: "Buxoro Vobkent Rozmoz(QFY)",
  phone: "+99890 016 40 86",

  socials: {
    Instagram: {
      link: "https://www.instagram.com/shaxzod_habibov/",
      text: "Shahzod",
      icon: <InstagramIcon />,
    },
    Twitter: {
      link: "https://www.twitter.com",
      text: "MyTwitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/shahzod-habibov-07bb49204/",
      text: "MyLinkedin",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/Shahzod2727",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
  },
  about:
    "Assalomu alaykum! Men Habibov Shaxzod, 1999-yil 8-iyul tug'ilganman. O'zbekiston Respublikasi, Buxoro viloyati, Vobkent tumanida istiqomat qilaman. Toshkent Axborot Texnologiyalari Universiteti talabasiman. 2020-yildan beri Web dasturlash frontend qismi bilan shug'ullanib kelaman. Maqsadim yurtimizda IT yo'nalishining rivojida o'z hissamni qo'shish.",
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
      title: "Freelancer",
      date: "2021-2022",
      description:
        "Turli saytlarda va shaxsiy buyurtmalar asosida web app, web sayt va web sahifalar tayyorlash",
    },
  ],

  educations: [
    {
      title: "Bakalavr - TATU",
      date: "2018-2022",
      description:
        "Toshkent Axborot Texnologiyalari Universiteti, Telekommunikatsiyalar: Telekommunikatsiya texnologiyalari yo'nalishi.",
    },
    {
      title: "Qishloq Xo'jaligi kolleji",
      date: "2015-2018",
      description:
        "Vobkent Qishloq Xo'jaligi Kasb-hunar kolleji. Qishloq Xo'jaligi mashinalriga texnik xizmat ko'rsatish.",
    }
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

  portfolio: [
    {
      tag: "React",
      image:
        "https://catherineasquithgallery.com/uploads/posts/2021-02/1613567367_213-p-fon-dlya-prezentatsii-po-fizike-257.jpg",
      title: "React Project 1",
      caption: "A short description",
      description: "This is my project  description. Please fill it in.",
      links: [
        {
          link: "https://www.youtube.com/",
          icon: <YouTubeIcon />},
          {link: "https://www.github.com",
          icon: <GitHubIcon />},{
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Python",
      image:
        "https://catherineasquithgallery.com/uploads/posts/2021-02/1613567367_213-p-fon-dlya-prezentatsii-po-fizike-257.jpg",
      title: "Python Project 1",
      caption: "A short description",
      description: "This is my project  description. Please fill it in.",
      links: [
        {
          link: "https://www.youtube.com/",
          icon: <YouTubeIcon />},
          {link: "https://www.github.com",
          icon: <GitHubIcon />},{
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "React",
      image:
        "https://catherineasquithgallery.com/uploads/posts/2021-02/1613567367_213-p-fon-dlya-prezentatsii-po-fizike-257.jpg",
      title: " React Project 2",
      caption: "A short description",
      description: "This is my project  description. Please fill it in.",
      links: [
        {
          link: "https://www.youtube.com/",
          icon: <YouTubeIcon />},
          {link: "https://www.github.com",
          icon: <GitHubIcon />},{
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Java",
      image:
        "https://catherineasquithgallery.com/uploads/posts/2021-02/1613567367_213-p-fon-dlya-prezentatsii-po-fizike-257.jpg",
      title: "Java Project 1",
      caption: "A short description",
      description: "This is my project  description. Please fill it in.",
      links: [
        {
          link: "https://www.youtube.com/",
          icon: <YouTubeIcon />},
          {link: "https://www.github.com",
          icon: <GitHubIcon />},{
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },

    
  ],
};
