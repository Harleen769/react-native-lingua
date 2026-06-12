import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, LayoutChangeEvent, Easing } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const [tabWidth, setTabWidth] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerWidth > 0 && state?.routes) {
      const width = containerWidth / state.routes.length;
      setTabWidth(width);

      Animated.timing(slideAnim, {
        toValue: (state.index || 0) * width,
        useNativeDriver: true,
        duration: 200,
        easing: Easing.out(Easing.ease),
      }).start();
    }
  }, [state?.index, containerWidth, state?.routes?.length]);

  const onLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
  };

  return (
    <View 
      style={[
        styles.tabBarContainer, 
        insets.bottom > 0 ? { paddingBottom: insets.bottom, height: 64 + insets.bottom } : {}
      ]}
      onLayout={onLayout}
    >
      {tabWidth > 0 && (
        <Animated.View
          style={[
            styles.activeCircle,
            {
              width: 48,
              height: 48,
              borderRadius: 24,
              transform: [
                { translateX: slideAnim },
                // Offset by half tab width minus half circle width to center it in the tab
                { translateX: (tabWidth - 48) / 2 }
              ],
            },
          ]}
        />
      )}
      
      {state?.routes?.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={(options as any).tabBarTestID}
            onPress={onPress}
            style={styles.tabItem}
            activeOpacity={0.8}
          >
            <View style={styles.iconContainer}>
              {options.tabBarIcon && options.tabBarIcon({ 
                focused: isFocused, 
                color: isFocused ? '#fff' : '#64748B', 
                size: 24 
              })}
            </View>
            
            {/* Show label only when inactive */}
            {!isFocused && (
              <Text style={styles.tabLabel}>
                {label as string}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 8,
    paddingBottom: 8,
    position: 'relative',
    justifyContent: 'space-around',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    height: 64, // Reduced from 72 to remove bottom blank space
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    zIndex: 1,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
  },
  tabLabel: {
    fontSize: 11,
    fontFamily: 'Nunito_700Bold',
    color: '#64748B',
    marginTop: 2,
  },
  activeCircle: {
    position: 'absolute',
    top: 8, // Centers the 48px circle perfectly in the 72px tab bar minus padding
    left: 0, // CRITICAL: required so translateX works from the absolute left edge!
    backgroundColor: '#5F5CF0',
    zIndex: 0,
    // Size is now dynamic, initialized inline
  },
});
