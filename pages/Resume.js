import ResumeData from "../public/resume.json";

import styles from "./Resume.module.scss";

const Education = ({ education }) => {
	return (
		<div className={styles.section}>
			<div className={styles["section-header"]}>Education</div>
			<div className={styles["section-info"]}>
				<div className={styles["section-info-header"]}>
					<h3>{education.degree}</h3>
					<h4>{education.college}</h4>
				</div>
				<div className="section-info-dates">
					{education.startDate} - {education.endDate}
				</div>
			</div>
		</div>
	);
};

const Experience = ({ experience }) => {
	return (
		<div className={styles.experience}>
			<div className={styles["section-info-header"]}>
				<h3 className={styles.company}>{experience.company}</h3>
				<h4 className={styles.title}>{experience.title}</h4>
			</div>
			<div className={styles["section-info-dates"]}>
				{experience.startDate} - {experience.endDate}
			</div>
			<ul className={styles["section-info-points"]}>
				{experience.responsibilities.map((point, index) => (
					<li className={styles.info} key={index}>
						{point}
					</li>
				))}
			</ul>
		</div>
	);
};

const Resume = () => {
	return (
		<div className={styles.information}>
			<div className={styles["p-rel"]}>
				<div className={styles["vertical-line"]}></div>
				<Education education={ResumeData.education}></Education>
				<div className={styles.section}>
					<div className={styles["section-header"]}>Experience</div>
					<div className={styles["section-info"]}>
						{ResumeData.experience.map((job, index) => (
							<Experience
								key={index}
								experience={job}
							></Experience>
						))}
					</div>
				</div>
				<div className={styles.section}>
					<div className={styles["section-header"]}>Skills</div>
					<div className={styles["section-info"]}>
						<div className={styles["overview-container"]}>
							<h3 className={styles["overview-header"]}>
								Languages
							</h3>
							<ul>
								<li>React</li>
								<li>Redux</li>
								<li>AngularJS</li>
								<li>ES6</li>
								<li>JavaScript</li>
								<li>Python</li>
							</ul>
						</div>
						<div className={styles["overview-container"]}>
							<h3 className={styles["overview-header"]}>Tools</h3>
							<ul>
								<li>Bootstrap</li>
								<li>Tableau</li>
								<li>LESS/SCSS</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
