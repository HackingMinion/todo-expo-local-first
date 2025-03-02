import {Pressable, StyleSheet} from 'react-native';
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {IconSymbol} from "@/components/ui/IconSymbol";
import {Tables} from "@/utils/database.types";
import {toggleDone} from '@/utils/SupaLegend'


export const TodoItem = ({ todo }: { todo: Tables<'todos'> }) => {
  const checkIcon = todo.done ? 'checkbox-unchecked' : 'checkbox-checked';

  const handlePress = () => {
    toggleDone(todo.id)
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.leftContainer}>
        <Pressable onPress={handlePress}>
          <IconSymbol name={checkIcon} color={'#80ed84'}/>
        </Pressable>
        <ThemedText type={"default"} numberOfLines={1}
                    ellipsizeMode="tail" style={[styles.title, todo.done && styles.strikethrough]}>{todo.text}</ThemedText>
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
