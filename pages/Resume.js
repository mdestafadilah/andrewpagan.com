import ResumeData from "../public/resume.json";

const Education = ({ education }) => {
	return (
		<div className="section">
			<div className="section-header">Education</div>
			<div className="section-info">
				<div className="section-info-header">
					<h3>{education.degree}</h3>
					<h4>{education.college}</h4>
				</div>
				<div className="section-info-dates">
					<span>
						{education.startDate} - {education.endDate}
					</span>
				</div>
			</div>
		</div>
	);
};

const Experience = ({ experience }) => {
	return (
		<>
			<div className="section-info-header">
				<h3>{experience.company}</h3>
				<h4>{experience.title}</h4>
			</div>
			<div className="section-info-dates">
				<span>
					{experience.startDate} - {experience.endDate}
				</span>
			</div>
			<ul className="section-info-points">
				{experience.responsibilities.map((point, index) => (
					<li key={index}>{point}</li>
				))}
			</ul>
		</>
	);
};

const Resume = () => {
	return (
		<div className="information">
			<div className="p-rel">
				<div className="vertical-line"></div>
				<Education education={ResumeData.education}></Education>
				<div className="section">
					<div className="section-header">Experience</div>
					<div className="section-info">
						{ResumeData.experience.map((job, index) => (
							<Experience
								key={index}
								experience={job}
							></Experience>
						))}
					</div>
				</div>
				<div className="section">
					<div className="section-header">Skills</div>
					<div className="section-info">
						<div className="overview-container">
							<h3 className="overview-header">Languages</h3>
							<ul>
								<li>React</li>
								<li>Redux</li>
								<li>AngularJS</li>
								<li>ES6</li>
								<li>JavaScript</li>
								<li>Python</li>
							</ul>
						</div>
						<div className="overview-container">
							<h3 className="overview-header">Tools</h3>
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
