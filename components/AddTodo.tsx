import {Pressable, StyleSheet} from 'react-native';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import React, {useState} from "react";
import {useThemeColor} from "@/hooks/useThemeColor";
import {ThemedInput} from "@/components/ThemedInput";
import {addTodo} from "@/utils/SupaLegend";

export const AddTodo = () => {
  const [text, setText] = useState('');

  const handleSave = () => {
    setText('')
    addTodo(text)
  }

  return (
    <>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Add Todo</ThemedText>
      </ThemedView>
      <ThemedView style={styles.contentContainer}>
        <ThemedInput
          value={text}
          onChangeText={setText}
        />
        <Pressable style={styles.button} onPress={handleSave}>
          <ThemedText type='default'>Save</ThemedText>
        </Pressable>
      </ThemedView>
    </>
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
    marginBottom: 48,
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
