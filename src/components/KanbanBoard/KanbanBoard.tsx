import React from 'react';
import KanbanColumn from '../KanbanColumn';
import styles from './KanbanBoard.module.css';
import KANBAN_COLUMNS from '../constants';

const KanbanBoard: React.FC = () => {
    return (
        <section className={styles.kanbanContainer} aria-label="Kanban board">
            <header className={styles.kanbanHeader}>
                <h1>Design weekly</h1>
                <p>A board to keep track of design progress.</p>
            </header>

            <main className={styles.kanbanBoard} role="main" aria-label="Board columns">
                {KANBAN_COLUMNS.map((column, columnIndex) => (
                    <KanbanColumn key={columnIndex} column={column} />
                ))}
            </main>
        </section>
    );
};

export default KanbanBoard;
