import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfilePlaceholder() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Nunito_800ExtraBold',
    color: '#1E293B',
  },
});
