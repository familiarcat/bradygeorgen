export interface LoveType {
  id: string;
  label: string;
  description: string;
  color: string;
  longDescription: string;
}
export const loveTypes: LoveType[] = [
  {
    id: "Eros",
    label: "Eros",
    description: "Sexual passion and romantic love",
    color: "#FF6F61",
    longDescription: "Eros represents passionate love, named after the Greek god of love. This type of love is marked by strong physical and emotional attraction.",
  },
  {
    id: "Philia",
    label: "Philia",
    description: "Deep friendship between equals",
    color: "#6B5B95",
    longDescription: "Philia signifies the love between friends. It's a love based on mutual respect, shared values, and common experiences.",
  },
  {
    id: "Ludus",
    label: "Ludus",
    description: "Playful or flirtatious love",
    color: "#88B04B",
    longDescription: "Ludus is playful love, often seen in the early stages of dating. It's characterized by flirtation, teasing, and the excitement of new romance.",
  },
  {
    id: "Agape",
    label: "Agape",
    description: "Unconditional, universal love",
    color: "#F7CAC9",
    longDescription: "Agape is selfless, unconditional love. It's the type of love that accepts others without expecting anything in return.",
  },
  {
    id: "Pragma",
    label: "Pragma",
    description: "Practical love based on reason",
    color: "#92A8D1",
    longDescription: "Pragma is practical love that develops over time. It involves making compromises and building a lasting relationship.",
  },
  {
    id: "Philautia",
    label: "Philautia",
    description: "Self-love and self-compassion",
    color: "#955251",
    longDescription: "Philautia is self-love, not in a narcissistic way, but in terms of caring for and understanding oneself.",
  },
  {
    id: "Storge",
    label: "Storge",
    description: "Natural affection between family",
    color: "#B565A7",
    longDescription: "Storge is familial love, like the natural bond between parents and children or between siblings.",
  },
  {
    id: "Mania",
    label: "Mania",
    description: "Obsessive or possessive love",
    color: "#009B77",
    longDescription: "Mania is obsessive love, characterized by jealousy and extreme emotions. The Greeks saw it as a dangerous form of love.",
  }
];
