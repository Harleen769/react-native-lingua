import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Platform, StyleSheet, SafeAreaView } from 'react-native';
import CustomTabBar from '../../components/CustomTabBar';

export default function TabsLayout() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.mobileCard}>
        <Tabs
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{
            headerShown: false,
          }}
        >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: 'Learn',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: 'AI Teacher',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="robot-outline" size={size + 2} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      </Tabs>
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
    overflow: 'hidden',
    ...Platform.select({
      web: {
        shadowColor: '#0F172A',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 24,
      },
    }),
  },
});
