import React from "react";
import "./style.css";
import AboutInfo from "../../component/AboutInfo";
import AboutPicture from "../../component/AboutPicture";
import AboutCards from "../../component/CardAbout";
import AboutTeam from "../../component/AboutTeam";
import AboutPreference from "../../component/GrihamatePreference";



function About() {
  return (
    <>

      <AboutPicture></AboutPicture>
      <AboutInfo/>
   <AboutCards></AboutCards>
   <AboutTeam></AboutTeam>
   <AboutPreference></AboutPreference>
    </>
  );
}

export default About;
