import React from 'react';
import KanbanColumn from '../KanbanColumn';
import styles from './KanbanBoard.module.css';
import KANBAN_COLUMNS from '../constants';

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
