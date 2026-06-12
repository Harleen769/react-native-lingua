// data/lessons.ts
import { Lesson } from '../types/learning';

export const LESSONS: Record<string, Lesson> = {
    es_lesson_intro: {
        id: 'es_lesson_intro',
        unitId: 'es_unit_1',
        title: 'Introduction',
        subtitle: 'Learn conversational keys',
        xpReward: 20,
        vocabulary: [
            { id: 'v1', word: 'Hola', translation: 'Hello', pronunciationGuide: 'oh-lah', exampleSentence: 'Hola, ¿cómo estás?' },
            { id: 'v2', word: 'Niño', translation: 'Boy', pronunciationGuide: 'neen-yo', exampleSentence: 'El niño come pan.' }
        ],
        activities: [
            {
                id: 'es_act_1',
                type: 'multiple_choice',
                question: 'What does "Hola" mean?',
                options: ['Goodbye', 'Please', 'Hello', 'Thanks'],
                correctAnswer: 'Hello'
            },
            {
                id: 'es_act_2',
                type: 'translate',
                question: 'Translate: "The boy"',
                correctAnswer: 'El niño'
            },
            {
                id: 'es_act_3',
                type: 'vision_interactive',
                question: 'Point to the fruit on your screen and say its name aloud.',
                correctAnswer: 'Manzana',
                visionContextPrompt: 'Vision system ensures object boundary hits fruit category and checks mic audio against standard token.'
            }
        ]
    },
    es_lesson_phrases: {
        id: 'es_lesson_phrases',
        unitId: 'es_unit_1',
        title: 'Phrases',
        subtitle: 'Everyday greetings',
        xpReward: 20,
        vocabulary: [
            { id: 'v3', word: 'Gracias', translation: 'Thank you', pronunciationGuide: 'grah-syahs', exampleSentence: 'Muchas gracias.' }
        ],
        activities: [
            {
                id: 'es_act_4',
                type: 'listening',
                question: 'Select the audio match for: "Gracias"',
                options: ['Por favor', 'Gracias', 'Hola'],
                correctAnswer: 'Gracias'
            }
        ]
    },
    fr_lesson_intro: {
        id: 'fr_lesson_intro',
        unitId: 'fr_unit_1',
        title: 'Introduction',
        subtitle: 'Learn conversational keys',
        xpReward: 20,
        vocabulary: [
            { id: 'fv1', word: 'Bonjour', translation: 'Hello', pronunciationGuide: 'bohn-zhoor', exampleSentence: 'Bonjour, comment ça va ?' },
            { id: 'fv2', word: 'Garçon', translation: 'Boy', pronunciationGuide: 'gahr-sohn', exampleSentence: 'Le garçon mange.' }
        ],
        activities: [
            {
                id: 'fr_act_1',
                type: 'multiple_choice',
                question: 'What does "Bonjour" mean?',
                options: ['Goodbye', 'Please', 'Hello', 'Thanks'],
                correctAnswer: 'Hello'
            }
        ]
    },
    fr_lesson_phrases: {
        id: 'fr_lesson_phrases',
        unitId: 'fr_unit_1',
        title: 'Phrases',
        subtitle: 'Everyday greetings',
        xpReward: 20,
        vocabulary: [
            { id: 'fv3', word: 'Merci', translation: 'Thank you', pronunciationGuide: 'mair-see', exampleSentence: 'Merci beaucoup.' }
        ],
        activities: [
            {
                id: 'fr_act_2',
                type: 'multiple_choice',
                question: 'What does "Merci" mean?',
                options: ['Yes', 'Thank you', 'No', 'Please'],
                correctAnswer: 'Thank you'
            }
        ]
    },
    ja_lesson_intro: {
        id: 'ja_lesson_intro',
        unitId: 'ja_unit_1',
        title: 'Introduction',
        subtitle: 'Learn conversational keys',
        xpReward: 20,
        vocabulary: [
            { id: 'jv1', word: 'こんにちは (Konnichiwa)', translation: 'Hello', pronunciationGuide: 'kon-nee-chee-wah', exampleSentence: 'こんにちは、お元気ですか？' }
        ],
        activities: [
            {
                id: 'ja_act_1',
                type: 'multiple_choice',
                question: 'What does "Konnichiwa" mean?',
                options: ['Goodbye', 'Please', 'Hello', 'Thanks'],
                correctAnswer: 'Hello'
            }
        ]
    },
    ja_lesson_phrases: {
        id: 'ja_lesson_phrases',
        unitId: 'ja_unit_1',
        title: 'Phrases',
        subtitle: 'Everyday greetings',
        xpReward: 20,
        vocabulary: [
            { id: 'jv2', word: 'ありがとう (Arigatou)', translation: 'Thank you', pronunciationGuide: 'ah-ree-gah-toh', exampleSentence: '手伝ってくれてありがとう。' }
        ],
        activities: [
            {
                id: 'ja_act_2',
                type: 'multiple_choice',
                question: 'What does "Arigatou" mean?',
                options: ['Yes', 'Thank you', 'No', 'Please'],
                correctAnswer: 'Thank you'
            }
        ]
    },
    ko_lesson_intro: {
        id: 'ko_lesson_intro',
        unitId: 'ko_unit_1',
        title: 'Introduction',
        subtitle: 'Learn conversational keys',
        xpReward: 20,
        vocabulary: [
            { id: 'kv1', word: '안녕하세요 (Annyeonghaseyo)', translation: 'Hello', pronunciationGuide: 'an-nyeong-ha-se-yo', exampleSentence: '안녕하세요, 반갑습니다.' }
        ],
        activities: [
            {
                id: 'ko_act_1',
                type: 'multiple_choice',
                question: 'What does "Annyeonghaseyo" mean?',
                options: ['Goodbye', 'Please', 'Hello', 'Thanks'],
                correctAnswer: 'Hello'
            }
        ]
    },
    ko_lesson_phrases: {
        id: 'ko_lesson_phrases',
        unitId: 'ko_unit_1',
        title: 'Phrases',
        subtitle: 'Everyday greetings',
        xpReward: 20,
        vocabulary: [
            { id: 'kv2', word: '감사합니다 (Gamsahabnida)', translation: 'Thank you', pronunciationGuide: 'gam-sa-hab-ni-da', exampleSentence: '선물 감사합니다.' }
        ],
        activities: [
            {
                id: 'ko_act_2',
                type: 'multiple_choice',
                question: 'What does "Gamsahabnida" mean?',
                options: ['Yes', 'Thank you', 'No', 'Please'],
                correctAnswer: 'Thank you'
            }
        ]
    },
    de_lesson_intro: {
        id: 'de_lesson_intro',
        unitId: 'de_unit_1',
        title: 'Introduction',
        subtitle: 'Learn conversational keys',
        xpReward: 20,
        vocabulary: [
            { id: 'dv1', word: 'Hallo', translation: 'Hello', pronunciationGuide: 'hah-loh', exampleSentence: 'Hallo, wie geht es dir?' }
        ],
        activities: [
            {
                id: 'de_act_1',
                type: 'multiple_choice',
                question: 'What does "Hallo" mean?',
                options: ['Goodbye', 'Please', 'Hello', 'Thanks'],
                correctAnswer: 'Hello'
            }
        ]
    },
    de_lesson_phrases: {
        id: 'de_lesson_phrases',
        unitId: 'de_unit_1',
        title: 'Phrases',
        subtitle: 'Everyday greetings',
        xpReward: 20,
        vocabulary: [
            { id: 'dv2', word: 'Danke', translation: 'Thank you', pronunciationGuide: 'dahn-kuh', exampleSentence: 'Vielen Dank!' }
        ],
        activities: [
            {
                id: 'de_act_2',
                type: 'multiple_choice',
                question: 'What does "Danke" mean?',
                options: ['Yes', 'Thank you', 'No', 'Please'],
                correctAnswer: 'Thank you'
            }
        ]
    },
    zh_lesson_intro: {
        id: 'zh_lesson_intro',
        unitId: 'zh_unit_1',
        title: 'Introduction',
        subtitle: 'Learn conversational keys',
        xpReward: 20,
        vocabulary: [
            { id: 'zv1', word: '你好 (Nǐ hǎo)', translation: 'Hello', pronunciationGuide: 'nee how', exampleSentence: '你好，最近怎么样？' }
        ],
        activities: [
            {
                id: 'zh_act_1',
                type: 'multiple_choice',
                question: 'What does "Nǐ hǎo" mean?',
                options: ['Goodbye', 'Please', 'Hello', 'Thanks'],
                correctAnswer: 'Hello'
            }
        ]
    },
    zh_lesson_phrases: {
        id: 'zh_lesson_phrases',
        unitId: 'zh_unit_1',
        title: 'Phrases',
        subtitle: 'Everyday greetings',
        xpReward: 20,
        vocabulary: [
            { id: 'zv2', word: '谢谢 (Xièxiè)', translation: 'Thank you', pronunciationGuide: 'syeh-syeh', exampleSentence: '谢谢你的帮助。' }
        ],
        activities: [
            {
                id: 'zh_act_2',
                type: 'multiple_choice',
                question: 'What does "Xièxiè" mean?',
                options: ['Yes', 'Thank you', 'No', 'Please'],
                correctAnswer: 'Thank you'
            }
        ]
    }
};