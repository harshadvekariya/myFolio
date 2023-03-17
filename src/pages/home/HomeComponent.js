import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "../../pages/education/EducationImg";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "../../pages/education/EducationComponent.css";
import "../../pages/home/Grid.css";

import { Fade } from "react-reveal";

import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "../../pages/experience/Experience.css";
import { experience } from "../../portfolio";
import ExperienceImg from "../../pages/experience/ExperienceImg";

import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "../../pages/projects/Projects.css";
import ProjectsImg from "../../pages/projects/ProjectsImg";

import ha_img from "../../assests/images/home_automation_img.jpg";
import ip_img from "../../assests/images/infusion_img.jpg";
import pt_img from "../../assests/images/pan-tilt_img.jpg";
import robo_img from "../../assests/images/bots_img.jpg";
import pd_img from "../../assests/images/pore_img.jpg";
import bidzy_img from "../../assests/images/bidyzy_img.jpg";

class Home extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {/* Home */}
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />

        {/* Projects | reference- https://codepen.io/maheshambure21/pen/GgVbVW */}
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div> */}
        <div class="content">
          <div class="grid">
            <figure class="effect-romeo">
              <img src={ha_img} alt="img17" />
              <figcaption>
                <h2>
                  IoT-Home automation <span>2014</span>
                </h2>
                <p>
                  Electronics design and programming, Android app development.
                  Home automation to control home appliances through mobile
                  phone.
                </p>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure class="effect-dexter">
              <img src={ip_img} alt="img19" />
              <figcaption>
                <h2>
                  Infusion pump <span>2015</span>
                </h2>
                <p>
                  {" "}
                  Low cost pump to output measured quantity of fluid at defined
                  rate for medical and laboratory purposes.
                </p>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure class="effect-sarah">
              <img src={pt_img} alt="img06" />
              <figcaption>
                <h2>
                  Pan-Tilt tracker with Raspberry-Pi for surveillance robot{" "}
                  <span>2018</span>
                </h2>
                <p>
                  {" "}
                  Built a two axis object tracker using Computer Vision to
                  follow movement of the detected object. Used parallel
                  programming and lost tracking detection to improve the
                  tracking. Developed a device to evaluate performance of the
                  same.
                </p>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure class="effect-oscar">
              <img src={robo_img} alt="img03" />
              <figcaption>
                <h2>
                  Wireless robots for robo-competitions <span>2017</span>
                </h2>
                <p>
                  Built robots using ESP8266 controlled with computer
                  application. Won several robotics competition.
                </p>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure class="effect-zoe">
              <img src={pd_img} alt="img25" />
              <figcaption>
                <h2>
                  Pore density analysis <span>2018</span>
                </h2>
                <p class="icon-links">
                  <a href="#">
                    <span class="icon-heart"></span>
                  </a>
                  <a href="#">
                    <span class="icon-eye"></span>
                  </a>
                  <a href="#">
                    <span class="icon-paper-clip"></span>
                  </a>
                </p>
                <p class="description">
                  Process Electron microscope image for pore density analysis in
                  shale rock to find adsorption and absorption for a PhD project
                  at IIT Bhuvneshwar
                </p>
              </figcaption>
            </figure>
            <figure class="effect-bubba">
              <img src={bidzy_img} alt="img09" />
              <figcaption>
                <h2>
                  Cutting stock optimization <span>2022</span>
                </h2>
                <p>
                  Conducted market research and developed SaaS product to reduce
                  cutting wastage by 12-15 percent.
                </p>
                <a href="#">View more</a>
              </figcaption>
            </figure>
          </div>
        </div>

        <Skills theme={this.props.theme} />

        {/* Experience */}
        <div className="basic-experience" aria-expanded="true">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                {/* <img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />

        {/* Education */}
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifcations
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>

        <Footer theme={this.props.theme} />

        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
