import React from 'react';
import styles from './Tag.module.css';

interface TagProps {
  children?: React.ReactNode;
  'aria-label'?: string;
}

const Tag: React.FC<TagProps> = ({ children, 'aria-label': ariaLabel }) => {
  return <span className={styles.tag} aria-label={ariaLabel} tabIndex={0} role="status">{children}</span>;
};

export default Tag;
