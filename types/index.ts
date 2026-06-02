export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
  image?: string;
}

export interface Student {
  id: string;
  className: string;
  name: string;
}

export interface PlayerScore {
  name: string;
  score: number;
}
