import { useColorScheme, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'
// import { useTheme } from '@/hooks/useTheme';
import { Colors } from '@/constants/Colors';
import { useTheme } from '@/hooks';
export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export default function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const theme = useColorScheme()
  const progress = useDerivedValue(() => {
    return theme === "dark" ? withTiming(1, {
      duration: 150
    }) : withTiming(0, {
      duration: 150
    })
  }, [theme])


  const rStyle = useAnimatedStyle(() => {
    const animateBackgroundColor = interpolateColor(progress.value, [0, 1], [Colors.light.background, Colors.dark.background])
    return {
      backgroundColor: animateBackgroundColor
    }
  })
  return <Animated.View style={[rStyle, style]} {...otherProps} />;
}
