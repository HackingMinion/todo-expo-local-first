import {observer} from '@legendapp/state/react'
import {todos$ as _todos$} from '@/utils/SupaLegend'
import {FlatList, StyleSheet} from "react-native";
import {Tables} from "@/utils/database.types";
import {TodoItem} from "@/components/TodoItem";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";

export const Todos = observer(({todos$}: { todos$: typeof _todos$ }) => {
  // Get the todos from the state and subscribe to updates
  const todos = todos$.get()
  const renderItem = ({item: todo}: { item: Tables<'todos'> }) => <TodoItem todo={todo}/>
  if (!todos) {
    return <></>

  }
  return (
    <>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Todos</ThemedText>
      </ThemedView>
      <FlatList data={Object.values(todos)} renderItem={renderItem} keyExtractor={item => item.id}/>
    </>
  )
})


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
