import React from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  children?: React.ReactNode;
  'aria-label'?: string;
}

const Avatar: React.FC<AvatarProps> = ({ children, 'aria-label': ariaLabel }) => {
  return <span className={styles.avatar} aria-label={ariaLabel} tabIndex={0} role="img">{children}</span>;
};

export default Avatar;
