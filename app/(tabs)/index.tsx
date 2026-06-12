import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguageStore } from '../../store/useLanguageStore';
import { SUPPORTED_LANGUAGES } from '../../data/languages';
import { images } from '../../constants/images';
import { UNITS } from '../../data/units';
import { useRouter } from 'expo-router';

export default function Home() {
    const { user } = useUser();
    const insets = useSafeAreaInsets();
    const router = useRouter();
    
    // Get language from Zustand store
    const { activeLanguageId } = useLanguageStore();
    
    // Find the active language object or fallback to Spanish
    const activeLang = SUPPORTED_LANGUAGES.find((l) => l.id === activeLanguageId) || SUPPORTED_LANGUAGES[0] || { id: 'es', name: 'Spanish', flag: '🇪🇸' };
    
    // Find the current unit for this language
    const activeUnit = UNITS && UNITS[activeLang.id] && UNITS[activeLang.id][0]
        ? UNITS[activeLang.id][0]
        : { id: `${activeLang.id}_unit_1`, unitNumber: 1, title: 'Unit 1' };

    return (
        <View className="flex-1 bg-white">
            {/* HEADER */}
            <View 
                className="w-full flex-row justify-between items-center px-5 pb-4 bg-white border-b-2 border-slate-200"
                style={{ paddingTop: Math.max(insets.top, 20) + 10 }}
            >
                <TouchableOpacity 
                    className="flex-row items-center gap-x-2"
                    onPress={() => router.push('/language-selection')}
                    activeOpacity={0.7}
                >
                    <Image
                        source={{ uri: `https://flagcdn.com/w40/${activeLang.id === 'ja' ? 'jp' : activeLang.id}.png` }}
                        className="w-8 h-8 rounded-full border border-slate-200"
                    />
                    <Text className="text-lg font-bold text-slate-800">
                        Hola, {user?.firstName || 'Alex'}! 👋
                    </Text>
                </TouchableOpacity>
                <View className="flex-row items-center gap-x-5">
                    <View className="flex-row items-center gap-x-1">
                        <MaterialCommunityIcons name="fire" size={24} color="#FF9600" />
                        <Text className="text-base font-bold text-slate-500">12</Text>
                    </View>
                    <Feather name="bell" size={24} color="#64748B" />
                </View>
            </View>

            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View className="px-5 w-full flex-col gap-y-6 pb-24">
                    
                    {/* DAILY GOAL CARD */}
                    <View className="w-full bg-[#FFF9EE] rounded-3xl p-5 flex-row justify-between items-center mt-5">
                        <View className="flex-1">
                            <Text className="text-slate-600 font-bold text-base mb-1">Daily goal</Text>
                            <View className="flex-row items-baseline gap-x-1">
                                <Text className="text-3xl font-black text-slate-800">15</Text>
                                <Text className="text-base font-bold text-slate-400">/ 20 XP</Text>
                            </View>
                            <View className="h-3 w-40 bg-orange-200 rounded-full mt-3 overflow-hidden">
                                <View className="h-full w-[75%] bg-[#FF9600] rounded-full" />
                            </View>
                        </View>
                        <Image 
                            source={images.treasure} 
                            style={{ width: 80, height: 80 }}
                            resizeMode="contain"
                        />
                    </View>

                    {/* CONTINUE LEARNING CARD */}
                    <View className="w-full bg-[#6B5FFF] rounded-3xl p-6 overflow-hidden relative min-h-[180px]">
                        <Image 
                            source={images.palace} 
                            style={{ width: 130, height: 130, position: 'absolute', bottom: -16, right: -16, opacity: 0.9 }}
                            resizeMode="contain"
                        />
                        <Text className="text-white/90 font-semibold text-base mb-1">Continue learning</Text>
                        <Text className="text-white text-3xl font-black mb-1">{activeLang.name}</Text>
                        <Text className="text-white/90 font-medium text-sm mb-5">
                            A1 • Unit {activeUnit.unitNumber}
                        </Text>
                        
                        <TouchableOpacity 
                            className="bg-white py-3 px-6 rounded-2xl self-start"
                            activeOpacity={0.8}
                            onPress={() => router.push('/learn')}
                        >
                            <Text className="text-[#6B5FFF] font-bold text-base">Continue</Text>
                        </TouchableOpacity>
                    </View>

                    {/* TODAY'S PLAN SECTION */}
                    <View className="w-full mt-2">
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-xl font-bold text-slate-800">{"Today's plan"}</Text>
                            <TouchableOpacity onPress={() => router.push('/learn')}>
                                <Text className="text-base font-bold text-[#6B5FFF]">View all</Text>
                            </TouchableOpacity>
                        </View>

                        <View className="flex-col gap-y-4">
                            {/* Task 1: Lesson */}
                            <TouchableOpacity 
                                activeOpacity={0.7} 
                                className="flex-row items-center justify-between"
                                onPress={() => router.push('/learn')}
                            >
                                <View className="flex-row items-center gap-x-4">
                                    <View className="w-14 h-14 bg-[#6B5FFF] rounded-2xl items-center justify-center shadow-sm">
                                        <Feather name="book-open" size={24} color="white" />
                                    </View>
                                    <View>
                                        <Text className="text-lg font-bold text-slate-800">Lesson</Text>
                                        <Text className="text-slate-500 font-medium mt-0.5">At the café</Text>
                                    </View>
                                </View>
                                <View className="w-7 h-7 bg-[#6B5FFF] rounded-full items-center justify-center">
                                    <Feather name="check" size={16} color="white" />
                                </View>
                            </TouchableOpacity>

                            {/* Task 2: AI Conversation */}
                            <TouchableOpacity 
                                activeOpacity={0.7} 
                                className="flex-row items-center justify-between"
                                onPress={() => router.push('/chat')}
                            >
                                <View className="flex-row items-center gap-x-4">
                                    <View className="w-14 h-14 bg-[#9162FE] rounded-2xl items-center justify-center shadow-sm">
                                        <Feather name="headphones" size={24} color="white" />
                                    </View>
                                    <View>
                                        <Text className="text-lg font-bold text-slate-800">AI Conversation</Text>
                                        <Text className="text-slate-500 font-medium mt-0.5">Talk about your day</Text>
                                    </View>
                                </View>
                                <View className="w-7 h-7 rounded-full border-2 border-slate-300" />
                            </TouchableOpacity>

                            {/* Task 3: New words */}
                            <TouchableOpacity 
                                activeOpacity={0.7} 
                                className="flex-row items-center justify-between"
                                onPress={() => router.push('/learn')}
                            >
                                <View className="flex-row items-center gap-x-4">
                                    <View className="w-14 h-14 bg-[#FF7979] rounded-2xl items-center justify-center shadow-sm">
                                        <FontAwesome5 name="smile-wink" size={24} color="white" />
                                    </View>
                                    <View>
                                        <Text className="text-lg font-bold text-slate-800">New words</Text>
                                        <Text className="text-slate-500 font-medium mt-0.5">10 words</Text>
                                    </View>
                                </View>
                                <View className="w-7 h-7 rounded-full border-2 border-slate-300" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* NEXT UP CARD */}
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={() => router.push('/ai')}
                        className="w-full bg-[#F0F8EC] rounded-3xl p-5 flex-row justify-between items-center mt-2 border border-slate-100"
                    >
                        <View className="flex-1">
                            <Text className="text-slate-500 font-bold text-sm mb-1">Next up</Text>
                            <Text className="text-slate-800 text-xl font-bold mb-1">AI Video Call</Text>
                            <Text className="text-slate-500 font-medium">Practice speaking</Text>
                        </View>
                        
                        <View className="relative">
                            <Image 
                                source={{ uri: images.teacherPlaceholder }} 
                                className="w-20 h-20 rounded-full border-4 border-white"
                                resizeMode="cover"
                            />
                            <View className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#58CC02] rounded-full items-center justify-center border-2 border-white shadow-sm">
                                <Feather name="video" size={18} color="white" />
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContent: {
        width: '100%',
        alignItems: 'center',
    }
});