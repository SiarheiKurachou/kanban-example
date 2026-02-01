import React from 'react';
import styles from './Tag.module.css';

const Tag: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <span className={styles.tag}>{children}</span>;
};

export default Tag;
