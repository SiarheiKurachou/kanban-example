import React from 'react';
import KANBAN_COLUMNS from '../constants';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import styles from './KanbanBoard.module.css';

const KanbanBoard: React.FC = () => {
    return (
        <div className={styles.kanbanContainer}>
            <div className={styles.kanbanHeader}>
                <h1>Design weekly</h1>
                <p>A board to keep track of design progress.</p>
            </div>

            <div className={styles.kanbanBoard}>
                {KANBAN_COLUMNS.map((column, columnIndex) => (
                    <KanbanColumn key={columnIndex} column={column} />
                ))}
            </div>
        </div>
    );
};

export default KanbanBoard;
