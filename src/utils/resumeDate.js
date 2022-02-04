import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

export default {
    name:'Shahzod is coding',
    title:'Full stack developer',

    birthday:"08th July 1999",
    email:"shahzodjava@gmail.com",
    address:"Buxoro Vobkent Rozmoz(QFY)",
    phone:'+99891 2401743',

    socials:{
        Facebook:{
            link:"https://www.facebook.com",
            text:"ShahzodIsCoding",
            icon:<FacebookIcon/>
        },
        Twitter:{
            link:"https://www.twitter.com",
            text:"MyTwitter",
            icon:<TwitterIcon/>
        },
        LinkedIn:{
            link:"https://www.linkedin.com",
            text:"MyLinkedin",
            icon:<LinkedInIcon/>
        },
        GitHub:{
            link:"https://www.github.com",
            text:"MyGithub",
            icon:<GitHubIcon/>
        },
    }

}