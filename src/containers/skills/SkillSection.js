import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import SkillsComponent from "./hackimg"

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg") {
    return <DataScienceImg theme={props.theme} />;
  } else if (props.fileName === "FullStackImg") {
    return <FullStackImg theme={props.theme} />;
  } else if (props.fileName === "CloudInfraImg") {
    return <CloudInfraImg theme={props.theme} />;
  } else if (props.fileName === "hackimg") {
    return <SkillsComponent theme={props.theme} />;
  }
  return <DesignImg theme={props.theme} />;
}



class SkillSection extends Component {
  render() {
    const { theme } = this.props; // Accessing props using this.props
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div" key={skill.title}>
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg
                    fileName={skill.fileName}
                    theme={theme}
                    skills={skill.fileName === "hackimg" ? skills.data : null} // Conditional passing of skills
                  />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, index) => (
                      <p
                        key={index}
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    ))}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}


export default SkillSection;