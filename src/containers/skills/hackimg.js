import React from 'react';
import hackingImage from './hackingeh.svg'; // Adjust the path as needed

const SkillsComponent = ({ skills = [], theme }) => {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <img src={hackingImage} alt="Hacking Image" />
          <h3>{skill.title}</h3>
          <ul>
            {skill.skills.map((skillItem, i) => (
              <li key={i}>{skillItem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsComponent;
