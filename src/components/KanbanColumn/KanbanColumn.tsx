import React from 'react';
import type { Column } from '../types';
import KanbanCard from '../KanbanCard';
import styles from './KanbanColumn.module.css';

const KanbanColumn: React.FC<{ column: Column }> = ({ column }) => {
    return (
        <article className={styles.kanbanColumn} aria-label={`${column.title} column`} tabIndex={0}>
            <div className={styles.columnTitle}><h2 className={styles.columnTitlePill}>{column.title}</h2></div>
            <div className={styles.cardsContainer} role="list">
                {column.cards.map((card, i) => (
                    <KanbanCard key={i} card={card} />
                ))}
            </div>
        </article>
    );
};

export default KanbanColumn;
