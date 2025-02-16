import {Pressable, StyleSheet} from 'react-native';

import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {IconSymbol} from "@/components/ui/IconSymbol";

type ItemProps = { title: string, archived?: boolean };

export default function TodoItem({title, archived = false}: ItemProps) {
  const checkIcon = archived ? 'checkbox-unchecked' : 'checkbox-checked';

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.leftContainer}>
        <Pressable>
          <IconSymbol name={checkIcon} color={'#80ed84'}/>
        </Pressable>
        <ThemedText type={"default"} numberOfLines={1}
                    ellipsizeMode="tail" style={[styles.title, archived && styles.strikethrough]}>{title}</ThemedText>
      </ThemedView>
      <Pressable>
        <IconSymbol name={'trash'} color={'#ed8480'}/>
      </Pressable>
    </ThemedView>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
  },
  title: {
    flex: 1
  },
  strikethrough: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
