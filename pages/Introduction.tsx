import styles from "./Introduction.module.scss";

const Introduction = () => {
	return (
		<div>
			<div className={styles.header}>
				<h1>Hello, I'm Andrew.</h1>
				<h1>Thanks for dropping by.</h1>
			</div>
			<div className={styles["about-me"]}>
				<h2>About</h2>
				<p>
					Hey there! I'm Andrew Pagan. A fluffy cat owner and active
					financial learner that works as a software developer in the
					Bay Area. My goal in life is to teach young adults and high
					school students what it means to "adult" through teaching
					basic financial practices such as the difference between a
					Roth IRA and 401k, and the power of compound interest. Money
					is something that is not taught in school even though it's
					one of the core reasons why we work.
					<br />
					<br />I live by the motto "never stop growing". A motto that
					reminds me that your education doesn't stop after college
					and that investing in yourself is invaluable.
				</p>
			</div>
		</div>
	);
};

export default Introduction;
