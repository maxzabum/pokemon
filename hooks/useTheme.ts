/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors';
import { Appearance, ColorSchemeName } from '@/hooks/useColorScheme';
import { useState } from 'react';
import { useColorScheme } from './useColorScheme.web';

export function useTheme() {
    return {
        setTheme: (theme: ColorSchemeName) => Appearance.setColorScheme(theme),
    }
}
