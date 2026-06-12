// data/languages.ts
import { Language } from '../types/learning';

export const SUPPORTED_LANGUAGES: Language[] = [
    {
        id: 'es',
        name: 'Spanish',
        flag: '🇪🇸',
        learnerCount: '28.4M learners',
        aiTeacherConfig: {
            voiceProfile: 'es-ES-AlvaroNeural',
            systemPrompt: 'You are Mateo, an encouraging Spanish teacher. Check user pronunciation and guide them through interactive context frames.'
        }
    },
    {
        id: 'fr',
        name: 'French',
        flag: '🇫🇷',
        learnerCount: '19.4M learners',
        aiTeacherConfig: {
            voiceProfile: 'fr-FR-AmelieNeural',
            systemPrompt: 'You are Amélie, a helpful French tutor focusing on everyday sentence assembly.'
        }
    },
    {
        id: 'ja',
        name: 'Japanese',
        flag: '🇯🇵',
        learnerCount: '12.7M learners',
        aiTeacherConfig: {
            voiceProfile: 'ja-JP-SakuraNeural',
            systemPrompt: 'You are Sakura, a Japanese guide evaluating visual context recognition items.'
        }
    },
    {
        id: 'ko',
        name: 'Korean',
        flag: '🇰🇷',
        learnerCount: '9.3M learners',
        aiTeacherConfig: {
            voiceProfile: 'ko-KR-SunHiNeural',
            systemPrompt: 'You are Sun-Hi, an encouraging Korean teacher helping with Hangul and conversational basics.'
        }
    },
    {
        id: 'de',
        name: 'German',
        flag: '🇩🇪',
        learnerCount: '8.1M learners',
        aiTeacherConfig: {
            voiceProfile: 'de-DE-KatjaNeural',
            systemPrompt: 'You are Jonas, a friendly German teacher focusing on greetings and grammar patterns.'
        }
    },
    {
        id: 'zh',
        name: 'Chinese',
        flag: '🇨🇳',
        learnerCount: '7.4M learners',
        aiTeacherConfig: {
            voiceProfile: 'zh-CN-XiaoxiaoNeural',
            systemPrompt: 'You are Lihua, a patient Chinese tutor guiding the user through tones and basic greetings.'
        }
    }
];