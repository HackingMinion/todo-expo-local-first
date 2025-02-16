import {Image, Platform, Pressable, StyleSheet, TextInput} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import React, {useState} from "react";
import {useThemeColor} from "@/hooks/useThemeColor";
import {ThemedInput} from "@/components/ThemedInput";

export default function EditTodoScreen() {
  const [text, setText] = useState('');
  const color = useThemeColor({}, 'text');

  const saveTodo = () => {
    console.log('saveTodo');
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Add Todo</ThemedText>
      </ThemedView>
      <ThemedView style={styles.contentContainer}>
        <ThemedInput
          value={text}
          onChangeText={setText}
        />
        <Pressable style={styles.button} onPress={saveTodo}>
          <ThemedText type='default'>Save</ThemedText>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contentContainer: {
    gap: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a7ea4',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});
