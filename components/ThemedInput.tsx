import {Text, type TextProps, StyleSheet, StyleProp, TextStyle, TextInput} from 'react-native';

import {useThemeColor} from '@/hooks/useThemeColor';
import React from "react";

export type ThemedInputProps = {
  style?: StyleProp<any>;
  lightColor?: string;
  darkColor?: string;
} & React.ComponentProps<typeof TextInput>;

export function ThemedInput({style, lightColor, darkColor, ...otherProps}: ThemedInputProps) {
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

  return (
    <TextInput
      style={[
        {color, borderColor: color},
        styles.default,
        style,
      ]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});
