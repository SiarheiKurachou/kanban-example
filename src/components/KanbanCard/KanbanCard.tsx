import React from 'react';
import type { Card } from '../types';
import Avatar from '../shared/Avatar';
import Tag from '../shared/Tag';
import styles from './KanbanCard.module.css';

const KanbanCard: React.FC<{ card: Card }> = ({ card }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>

            {card.avatars && card.avatars.length > 0 && (
                <div className={styles.cardAvatars}>
                    {card.avatars.map((a, i) => (
                        <Avatar key={i}>{a}</Avatar>
                    ))}
                </div>
            )}

            {card.description && (
                <p className={styles.cardDescription}>{card.description}</p>
            )}

            <div className={styles.cardFooter}>
                {card.dueDate && <span className={styles.dueDate}>{card.dueDate}</span>}
                {card.tags && card.tags.length > 0 && (
                    <div className={styles.tags}>
                        {card.tags.map((t, i) => (
                            <Tag key={i}>{t}</Tag>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default KanbanCard;
