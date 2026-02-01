import React from 'react';
import styles from './Avatar.module.css';

const Avatar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <span className={styles.avatar}>{children}</span>;
};

export default Avatar;
