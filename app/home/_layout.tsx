import { NativeStack } from '@/components/core/layout';

export function HomeLayout() {
    return <NativeStack screenOptions={{
        headerShown: false,
    }}>
        <NativeStack.Screen name="index" options={{ title: 'Home Test' }} />
    </NativeStack>

}
export default HomeLayout;