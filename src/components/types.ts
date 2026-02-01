export interface Card {
  title: string;
  description?: string;
  dueDate?: string;
  tags?: string[];
  avatars?: string[];
}

export interface Column {
  title: string;
  cards: Card[];
}
