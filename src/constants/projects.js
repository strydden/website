import travalabWeb from "assets/travalabWeb.png";
import travalabApp from "assets/travalabApp.png";
import qrcty from "assets/qrcty.png";
import uwc from "assets/uwc.png";

export const projects = [
  {
    homeImage: travalabWeb,
    projectsImage: travalabWeb,
    desc1:
      "Travalab provides mobile phlebotomy services nationwide to patients within the comfort of their homes, offices, or health clinics. We are partnered with several speciality labs, research groups and clinical trials teams. Our mission is to bridge phlebotomy needs with accessibility and convenience for all.",
    desc2: "",
    title: "Travalab Web App",
    path: "/projects/travalab-web-app",
    externalLink1: "https://travalab.com/",
    technologyList: [
      "Ruby on Rails",
      "Webpacker",
      "Javascript/JQuery",
      "PostgreSQL",
      "RSpec",
      "AWS",
      "CI/CD",
      "Payment Gateway",
    ],
  },
  {
    homeImage: travalabApp,
    projectsImage: travalabApp,
    desc1:
      "Mobile application is used by mobile phlebotomist to select and service appointments.",
    desc2: "",
    title: "Travalab Mobile App",
    path: "/projects/travalab-mobile-app",
    externalLink1:
      "https://play.google.com/store/apps/details?id=com.dev.tundra",
    externalLink2: "https://apps.apple.com/us/app/travalab/id1537142611",
    technologyList: ["Flutter", "AWS SNS"],
  },
  {
    homeImage: qrcty,
    projectsImage: qrcty,
    desc1:
      "App that provides users with access to crowd-sourced Real-time reviews and recommendations of nightlife, entertainment events, restaurants and business.",
    desc2: "",
    title: "QRCTY Mobile App",
    path: "/projects/qrcty-mobile-app",
    technologyList: [
      "Flutter",
      "Dart",
      "NodeJS",
      "ExpressJS",
      "AWS",
      "MongoDB",
    ],
  },
  {
    homeImage: uwc,
    projectsImage: uwc,
    desc1:
      "United Wrestling Club is a community-based club. UWC's core concepts focus on the art and applications of Folkstyle, Freestyle, and Greco Roman wrestling. UWC's goal is to create a year-round facility available to beginner, intermediate, and advanced athletes interested in the sport of wrestling.",
    desc2: "",
    title: "United Wrestling Club",
    path: "/projects/united-wrestling-club",
    externalLink1: "https://www.unitedwrestlingclub.com",
    technologyList: ["React", "RoR", "AWS"],
  },
];
