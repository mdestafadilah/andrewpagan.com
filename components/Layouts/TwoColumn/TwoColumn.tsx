import React from 'react';
import styles from './TwoColumn.module.scss';

interface TwoColumnProps {
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
  className?: string;
}

const TwoColumn = ({ leftColumn, rightColumn, className }: TwoColumnProps) => {
  return (
    <div className={className}>
      <div className={styles['left-column']}>{leftColumn}</div>
      <div className={styles['right-column']}>{rightColumn}</div>
    </div>
  );
};

export default TwoColumn;
