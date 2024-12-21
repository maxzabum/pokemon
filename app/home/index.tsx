import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';
import { ThemedView } from '@/components/core/layout';
import { ThemedText } from '@/components/core/ThemedText';
const Home = () => {
    const insets = useSafeAreaInsets();
    const headerHeight = useHeaderHeight();
    return (
        <ThemedView
            style={{
                paddingTop: headerHeight,
                paddingBottom: insets.bottom,
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Text>This is top text.</Text>
            <ThemedText >Home</ThemedText>
            <Text>This is bottom text.</Text>
        </ThemedView>
    );
}

export default Home

const styles = StyleSheet.create({})