// data/units.ts
import { Unit } from '../types/learning';

export const UNITS: Record<string, Unit[]> = {
    es: [
        {
            id: 'es_unit_1',
            languageId: 'es',
            unitNumber: 1,
            title: 'Unit 1: Basics',
            description: 'Form basic sentences & greet people',
            lessons: ['es_lesson_intro', 'es_lesson_phrases']
        }
    ],
    fr: [
        {
            id: 'fr_unit_1',
            languageId: 'fr',
            unitNumber: 1,
            title: 'Unit 1: Introductions',
            description: 'Master conversational basics',
            lessons: ['fr_lesson_intro', 'fr_lesson_phrases']
        }
    ],
    ja: [
        {
            id: 'ja_unit_1',
            languageId: 'ja',
            unitNumber: 1,
            title: 'Unit 1: Hiragana',
            description: 'Learn basic Japanese characters',
            lessons: ['ja_lesson_intro', 'ja_lesson_phrases']
        }
    ],
    ko: [
        {
            id: 'ko_unit_1',
            languageId: 'ko',
            unitNumber: 1,
            title: 'Unit 1: Hangul Basics',
            description: 'Learn the Korean writing system',
            lessons: ['ko_lesson_intro', 'ko_lesson_phrases']
        }
    ],
    de: [
        {
            id: 'de_unit_1',
            languageId: 'de',
            unitNumber: 1,
            title: 'Unit 1: Greetings',
            description: 'Introduce yourself in German',
            lessons: ['de_lesson_intro', 'de_lesson_phrases']
        }
    ],
    zh: [
        {
            id: 'zh_unit_1',
            languageId: 'zh',
            unitNumber: 1,
            title: 'Unit 1: Pinyin Basics',
            description: 'Master Chinese tones and greetings',
            lessons: ['zh_lesson_intro', 'zh_lesson_phrases']
        }
    ]
};