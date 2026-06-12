// types/learning.ts

export type ActivityType = 'multiple_choice' | 'translate' | 'listening' | 'vision_interactive';

export interface VocabularyItem {
    id: string;
    word: string;
    translation: string;
    pronunciationGuide: string;
    exampleSentence: string;
}

export interface Activity {
    id: string;
    type: ActivityType;
    question: string;
    options?: string[]; // Selection options for multiple choice items
    correctAnswer: string;
    visionContextPrompt?: string; // AI Vision Agent payload placeholder
}

export interface Lesson {
    id: string;
    unitId: string;
    title: string;
    subtitle: string;
    xpReward: number;
    activities: Activity[];
    vocabulary: VocabularyItem[];
}

export interface Unit {
    id: string;
    languageId: string;
    unitNumber: number;
    title: string;
    description: string;
    lessons: string[]; // Reference list arrays to Lesson IDs
}

export interface Language {
    id: string;
    name: string;
    flag: string;
    learnerCount: string; // Matches layout metrics (e.g. "28.4M learners")
    aiTeacherConfig: {
        voiceProfile: string;
        systemPrompt: string; // Core prompt instruction rules for video/audio evaluation
    };
}
