import * as React from 'react';
import TwoColumn from '@components/Layouts/TwoColumn/TwoColumn';
import ResumeData from '@public/resume.json';

import styles from './Resume.module.scss';

interface Education {
  college: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface EducationProps {
  education: Education;
}

const Education = ({ education }: EducationProps) => {
  return (
    <div className={styles.sectionInfo}>
      <div className={styles.sectionInfoHeader}>
        <span>
          <h3>{education.degree}</h3>
          <h4>{education.college}</h4>
        </span>
        <span className={styles.sectionInfoDates}>
          {education.startDate} - {education.endDate}
        </span>
      </div>
    </div>
  );
};

type Experience = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

type ExperienceProps = {
  experience: Experience;
};

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className={`${styles.sectionInfo} ${styles.experience}`}>
      <div className={styles.sectionInfoHeader}>
        <span>
          <h3 className={styles.company}>{experience.company}</h3>
          <h4 className={styles.title}>{experience.title}</h4>
        </span>
        <span className={styles.sectionInfoDates}>
          {experience.startDate} - {experience.endDate}
        </span>
      </div>
      <ul className={styles.sectionInfoPoints}>
        {experience.responsibilities.map((point, index) => (
          <li className={styles.info} key={index}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className={styles.sectionInfo}>
      <div className={styles.overviewContainer}>
        <h3 className={styles.overviewHeader}>Languages</h3>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>AngularJS</li>
          <li>ES6</li>
          <li>JavaScript</li>
          <li>Python</li>
        </ul>
      </div>
      <div className={styles.overviewContainer}>
        <h3 className={styles.overviewHeader}>Tools</h3>
        <ul>
          <li>Bootstrap</li>
          <li>Tableau</li>
          <li>LESS/SCSS</li>
        </ul>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <div className={styles.information}>
      <div className={styles.pRel}>
        <div className={styles.verticalLine}></div>

        <TwoColumn
          className={styles.borderBottom}
          leftColumn={<span>Experience</span>}
          rightColumn={ResumeData.experience.map((job, index) => (
            <Experience key={index} experience={job}></Experience>
          ))}
        />

        <TwoColumn
          className={styles.borderBottom}
          leftColumn={<span>Education</span>}
          rightColumn={<Education education={ResumeData.education}></Education>}
        />

        <TwoColumn
          className={styles.borderBottom}
          leftColumn={<span>Skills</span>}
          rightColumn={<Skills />}
        />
      </div>
    </div>
  );
};

export default Resume;
