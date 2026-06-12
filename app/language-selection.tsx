// app/language-selection.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform
} from 'react-native';
import { Image } from 'expo-image';
import { SUPPORTED_LANGUAGES } from '../data/languages';
import { globalState } from '../utils/globalState';
import { images } from '../constants/images';

export default function LanguageSelection() {
  const router = useRouter();
  const [selectedLangId, setSelectedLangId] = useState(globalState.getActiveLanguageId());
  const [searchQuery, setSearchQuery] = useState('');

  const getCountryCode = (langId: string) => {
    switch (langId) {
      case 'ja': return 'jp';
      case 'ko': return 'kr';
      case 'zh': return 'cn';
      default: return langId;
    }
  };

  const handleSelectLanguage = (langId: string) => {
    setSelectedLangId(langId);
  };

  const handleContinue = () => {
    if (selectedLangId) {
      globalState.setActiveLanguageId(selectedLangId);
      router.replace('/(tabs)');
    }
  };

  const filteredLanguages = SUPPORTED_LANGUAGES.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.mobileCard}>
        {/* Header (No bottom divider as per the mockup design) */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#0F172A" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Choose a language</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Search input bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={18} color="#94A3B8" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search languages"
            placeholderTextColor="#94A3B8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Scrollable Language List */}
        <ScrollView style={styles.listContainer} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.listInner}>
            {searchQuery === '' && <Text style={styles.popularHeader}>Popular</Text>}

            <View style={styles.languagesWrapper}>
              {filteredLanguages.map((lang) => {
                const isSelected = lang.id === selectedLangId;
                return (
                  <TouchableOpacity
                    key={lang.id}
                    style={[
                      styles.languageCard,
                      isSelected && styles.selectedCard
                    ]}
                    onPress={() => handleSelectLanguage(lang.id)}
                  >
                    <Image
                      source={{ uri: `https://flagcdn.com/w80/${getCountryCode(lang.id)}.png` }}
                      style={styles.languageFlagImage}
                      contentFit="cover"
                    />
                    
                    <View style={styles.textContainer}>
                      <Text style={styles.languageName}>{lang.name}</Text>
                      <Text style={styles.learnerCount}>{lang.learnerCount || 'Active Learners'}</Text>
                    </View>

                    {isSelected ? (
                      <View style={styles.selectedCheckbox}>
                        <Ionicons name="checkmark" size={12} color="#ffffff" />
                      </View>
                    ) : (
                      <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
                    )}
                  </TouchableOpacity>
                );
              })}

              {filteredLanguages.length === 0 && (
                <Text style={styles.noResultsText}>No languages match your search.</Text>
              )}

              {searchQuery === '' && (
                <TouchableOpacity style={styles.seeAllRow} activeOpacity={0.8}>
                  <Ionicons name="globe-outline" size={22} color="#475569" style={styles.globeIcon} />
                  <Text style={styles.seeAllText}>See all languages</Text>
                  <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ScrollView>

        {/* Landmarks earth illustration anchored at the bottom of the card */}
        <Image
          source={images.earth}
          style={styles.earthIllustration}
          contentFit="contain"
          pointerEvents="none"
        />

        {/* Floating Continue Button */}
        {selectedLangId ? (
          <View style={styles.continueWrapper}>
            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
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
    backgroundColor: '#ffffff',
    borderRadius: Platform.OS === 'web' ? 24 : 0,
    paddingVertical: 10,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'flex-start',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: 'Nunito_800ExtraBold',
    color: '#0F172A',
    textAlign: 'center',
  },
  placeholder: {
    width: 32,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 14,
    marginHorizontal: 24,
    marginVertical: 10,
    paddingHorizontal: 16,
    height: 44,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    color: '#0F172A',
    fontFamily: 'Nunito_700Bold',
    padding: 0,
  },
  listContainer: {
    flex: 1,
    zIndex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 200, 
    flexGrow: 1,
  },
  listInner: {
    flex: 1,
  },
  popularHeader: {
    fontSize: 20,
    fontFamily: 'Nunito_800ExtraBold',
    color: '#0F172A',
    marginTop: 6,
    marginBottom: 12,
  },
  languagesWrapper: {
    gap: 8,
  },
  languageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 14,
    backgroundColor: '#ffffff',
  },
  selectedCard: {
    borderColor: '#5F5CF0',
    borderWidth: 2,
    backgroundColor: '#F5F3FF',
  },
  languageFlagImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  languageName: {
    fontSize: 18,
    fontFamily: 'Nunito_800ExtraBold',
    color: '#0F172A',
    marginBottom: 2,
  },
  learnerCount: {
    fontSize: 15,
    color: '#64748B',
    fontFamily: 'Nunito_700Bold',
  },
  selectedCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#5F5CF0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 14,
    backgroundColor: '#ffffff',
    marginTop: 4,
    marginBottom: 16,
  },
  globeIcon: {
    marginRight: 16,
  },
  seeAllText: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Nunito_800ExtraBold',
    color: '#0F172A',
  },
  earthIllustration: {
    position: 'absolute',
    bottom: 60, // Move earth up so buildings aren't covered by the button
    left: 0,
    right: 0,
    height: 200,
    width: '100%',
    zIndex: 0,
  },
  noResultsText: {
    textAlign: 'center',
    color: '#64748B',
    marginTop: 24,
    fontSize: 17,
    fontFamily: 'Nunito_700Bold',
  },
  continueWrapper: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 40 : 24,
    left: 24,
    right: 24,
    zIndex: 10,
  },
  continueButton: {
    backgroundColor: '#5F5CF0',
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  continueText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Nunito_800ExtraBold',
    letterSpacing: 0.5,
  },
});