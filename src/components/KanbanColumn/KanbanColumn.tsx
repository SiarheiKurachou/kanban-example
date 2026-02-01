import React from 'react';
import type { Column } from '../types';
import KanbanCard from '../KanbanCard/KanbanCard';
import styles from './KanbanColumn.module.css';

const KanbanColumn: React.FC<{ column: Column }> = ({ column }) => {
  return (
    <div className={styles.kanbanColumn}>
      <h2 className={styles.columnTitle}>{column.title}</h2>
      <div className={styles.cardsContainer}>
        {column.cards.map((card, i) => (
          <KanbanCard key={i} card={card} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
