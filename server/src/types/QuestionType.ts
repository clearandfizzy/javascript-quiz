export interface Question {
    id: number;
    text: string;
    choices: string[];
    correctIndex: number;
    explanation: string;
}
