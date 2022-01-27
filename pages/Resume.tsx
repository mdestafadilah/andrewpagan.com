import * as React from 'react';
import TwoColumn from '../components/Layouts/TwoColumn/TwoColumn';
import ResumeData from '../public/resume.json';

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
    <div className={styles['section-info']}>
      <div className={styles['section-info-header']}>
        <h3>{education.degree}</h3>
        <h4>{education.college}</h4>
      </div>
      <div className={styles['section-info-dates']}>
        {education.startDate} - {education.endDate}
      </div>
    </div>
  );
};

interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

interface ExperienceProps {
  experience: Experience;
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className={`${styles['section-info']} ${styles.experience}`}>
      <div className={styles['section-info-header']}>
        <h3 className={styles.company}>{experience.company}</h3>
        <h4 className={styles.title}>{experience.title}</h4>
      </div>
      <div className={styles['section-info-dates']}>
        {experience.startDate} - {experience.endDate}
      </div>
      <ul className={styles['section-info-points']}>
        {experience.responsibilities.map((point, index) => (
          <li className={styles.info} key={index}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  return (
    <div className={styles['section-info']}>
      <div className={styles['overview-container']}>
        <h3 className={styles['overview-header']}>Languages</h3>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>AngularJS</li>
          <li>ES6</li>
          <li>JavaScript</li>
          <li>Python</li>
        </ul>
      </div>
      <div className={styles['overview-container']}>
        <h3 className={styles['overview-header']}>Tools</h3>
        <ul>
          <li>Bootstrap</li>
          <li>Tableau</li>
          <li>LESS/SCSS</li>
        </ul>
      </div>
    </div>
  );
};

const Resume = (): React.ReactNode => {
  return (
    <div className={styles.information}>
      <div className={styles['p-rel']}>
        <div className={styles['vertical-line']}></div>

        <TwoColumn
          className={styles['border-bottom']}
          leftColumn={<span>Experience</span>}
          rightColumn={ResumeData.experience.map((job, index) => (
            <Experience key={index} experience={job}></Experience>
          ))}
        />

        <TwoColumn
          className={styles['border-bottom']}
          leftColumn={<span>Education</span>}
          rightColumn={<Education education={ResumeData.education}></Education>}
        />

        <TwoColumn
          className={styles['border-bottom']}
          leftColumn={<span>Skills</span>}
          rightColumn={<Skills />}
        />
      </div>
    </div>
  );
};

export default Resume;
