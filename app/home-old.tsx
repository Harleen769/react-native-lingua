// app/home.tsx
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import {
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Image } from 'expo-image';
import { globalState } from '../utils/globalState';

import { SUPPORTED_LANGUAGES } from '../data/languages';
import { UNITS } from '../data/units';
import { LESSONS } from '../data/lessons';

export default function Home() {
    const router = useRouter();
    const [activeLangId, setActiveLangId] = useState(globalState.getActiveLanguageId());

    useEffect(() => {
        return globalState.subscribe(() => {
            setActiveLangId(globalState.getActiveLanguageId());
        });
    }, []);

    const activeLang = SUPPORTED_LANGUAGES.find((l: any) => l.id === activeLangId) || SUPPORTED_LANGUAGES[0] || { id: 'es', name: 'Spanish', flag: '🇪🇸' };
    const activeUnit = UNITS && UNITS[activeLang.id] && UNITS[activeLang.id][0]
        ? UNITS[activeLang.id][0]
        : { id: `${activeLang.id}_unit_1`, languageId: activeLang.id, unitNumber: 1, title: 'Unit 1: Basics', description: 'Form basic sentences & greet people', lessons: [`${activeLang.id}_lesson_intro`, `${activeLang.id}_lesson_phrases`] };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mobileCard}>

                {/* HEADER BAR */}
                <View style={styles.header}>
                    <View style={styles.headerInnerContainer}>
                        <TouchableOpacity 
                            style={styles.headerLeft} 
                            onPress={() => router.push('/language-selection')}
                        >
                            <Image
                                source={{ uri: `https://flagcdn.com/w40/${activeLang.id === 'ja' ? 'jp' : activeLang.id}.png` }}
                                style={styles.headerFlagImage}
                            />
                            <Text style={styles.languageText}>{activeLang.name || 'Language'}</Text>
                        </TouchableOpacity>
                        <View style={styles.headerRight}>
                            <View style={styles.statBadge}>
                                <MaterialCommunityIcons name="fire" size={22} color="#FF9F43" />
                                <Text style={styles.statText}>5</Text>
                            </View>
                            <View style={styles.statBadge}>
                                <MaterialCommunityIcons name="diamond" size={20} color="#00D2D3" />
                                <Text style={styles.statText}>120</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* LEARNING MAP PATHWAY */}
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <View style={styles.contentInnerContainer}>

                        <View style={styles.unitBanner}>
                            <Text style={styles.unitTitle}>{activeUnit.title}</Text>
                            <Text style={styles.unitSubtitle}>{activeUnit.description}</Text>
                        </View>

                        <View style={styles.pathContainer}>
                            {activeUnit.lessons && activeUnit.lessons.length > 0 ? (
                                activeUnit.lessons.map((lessonId: string, index: number) => {
                                    const lessonObj = LESSONS[lessonId];
                                    const isActiveModule = index === 0;

                                    return (
                                        <View key={lessonId} style={styles.nodeWrapper}>
                                            <TouchableOpacity
                                                style={[styles.nodeCircle, isActiveModule ? styles.activeNode : styles.lockedNode]}
                                                disabled={!isActiveModule}
                                            >
                                                <MaterialCommunityIcons name={isActiveModule ? "star" : "lock"} size={32} color="#ffffff" />
                                            </TouchableOpacity>
                                            <Text style={styles.nodeLabel}>{lessonObj ? lessonObj.title : 'Lesson'}</Text>
                                        </View>
                                    );
                                })
                            ) : null}
                        </View>

                    </View>
                </ScrollView>

                {/* FOOTER TAB INTERFACE WITH COMPREHENSIVE FIXES */}
                <View style={styles.bottomNav}>
                    <View style={styles.bottomNavInnerContainer}>
                        <TouchableOpacity style={styles.navItem}>
                            <MaterialCommunityIcons name="home" size={28} color="#5F5CF0" />
                            <Text style={[styles.navText, styles.activeNavText]}>Learn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navItem} onPress={() => router.replace('/signin')}>
                            <MaterialCommunityIcons name="logout" size={26} color="#94A3B8" />
                            <Text style={styles.navText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mobileCard: {
        width: '100%',
        maxWidth: 420,
        height: '100%',
        maxHeight: Platform.OS === 'web' ? 850 : '100%',
        backgroundColor: '#F8FAFC',
        borderRadius: Platform.OS === 'web' ? 24 : 0,
        overflow: 'hidden',
        position: 'relative',
        ...Platform.select({
            web: {
                shadowColor: '#0F172A',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.08,
                shadowRadius: 24,
            },
        }),
    },
    header: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderBottomWidth: 2,
        borderColor: '#E2E8F0',
        paddingTop: Platform.OS === 'android' ? 40 : 10,
        alignItems: 'center'
    },
    headerInnerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 14,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    headerFlagImage: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    languageText: {
        fontSize: 16,
        fontFamily: 'Nunito_700Bold',
        color: '#1E293B'
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    statBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    statText: {
        fontSize: 15,
        fontFamily: 'Nunito_700Bold',
        color: '#64748B'
    },
    scrollContent: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 120
    },
    contentInnerContainer: {
        width: '100%',
        paddingHorizontal: 16
    },
    unitBanner: {
        backgroundColor: '#58CC02',
        padding: 16,
        marginTop: 16,
        borderRadius: 16,
        borderBottomWidth: 4,
        borderBottomColor: '#46A302'
    },
    unitTitle: {
        fontSize: 18,
        fontFamily: 'Nunito_800ExtraBold',
        color: '#ffffff'
    },
    unitSubtitle: {
        fontSize: 14,
        color: '#ffffff',
        opacity: 0.9,
        fontFamily: 'Nunito_400Regular',
        marginTop: 2
    },
    pathContainer: {
        alignItems: 'center',
        marginTop: 30,
        gap: 24
    },
    nodeWrapper: {
        alignItems: 'center'
    },
    nodeCircle: {
        width: 84,
        height: 84,
        borderRadius: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 6,
        shadowColor: '#1E293B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2
    },
    activeNode: {
        backgroundColor: '#5F5CF0',
        borderBottomColor: '#403EAE'
    },
    lockedNode: {
        backgroundColor: '#E2E8F0',
        borderBottomColor: '#CBD5E1'
    },
    nodeLabel: {
        fontSize: 14,
        fontFamily: 'Nunito_700Bold',
        color: '#475569',
        marginTop: 8
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderTopWidth: 2,
        borderColor: '#E2E8F0',
        alignItems: 'center',
        paddingBottom: Platform.OS === 'ios' ? 15 : 0
    },
    bottomNavInnerContainer: {
        width: '100%',
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 80
    },
    navText: {
        fontSize: 11,
        fontFamily: 'Nunito_700Bold',
        color: '#94A3B8',
        marginTop: 4
    },
    activeNavText: {
        color: '#5F5CF0',
        fontFamily: 'Nunito_700Bold'
    },
});