import React from 'react';
import type { Card } from '../types';
import { Avatar, Tag } from '../shared';
import styles from './KanbanCard.module.css';

const KanbanCard: React.FC<{ card: Card }> = ({ card }) => {
    return (
        <section className={styles.card} role="listitem" tabIndex={0} aria-label={`Card: ${card.title}`}>
            <h3 className={styles.cardTitle}>{card.title}</h3>

            {card.avatars && card.avatars.length > 0 && (
                <div className={styles.cardAvatars} role="group" aria-label="Assigned to">
                    {card.avatars.map((a, i) => (
                        <Avatar key={i} aria-label={`Team member ${i + 1}`}>{a}</Avatar>
                    ))}
                </div>
            )}

            {card.description && (
                <p className={styles.cardDescription}>{card.description}</p>
            )}

            <footer className={styles.cardFooter}>
                {card.dueDate && <time className={styles.dueDate} aria-label="Due date">{card.dueDate}</time>}
                {card.tags && card.tags.length > 0 && (
                    <div className={styles.tags} role="group" aria-label="Tags">
                        {card.tags.map((t, i) => (
                            <Tag key={i} aria-label={`Tag: ${t}`}>{t}</Tag>
                        ))}
                    </div>
                )}
            </footer>
        </section>
    );
};

export default KanbanCard;
