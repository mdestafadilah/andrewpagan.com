import React from "react";
import styles from "./TwoColumn.module.scss";

interface TwoColumnProps {
	leftColumn: React.ReactNode;
	rightColumn: React.ReactNode;
}

const TwoColumn = ({ leftColumn, rightColumn }: TwoColumnProps) => {
	return (
		<>
			<div className={styles["left-column"]}>{leftColumn}</div>
			<div className={styles["right-column"]}>{rightColumn}</div>
		</>
	);
};

export default TwoColumn;
