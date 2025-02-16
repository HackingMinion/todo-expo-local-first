import {FlatList, Image, Platform, StyleSheet} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import TodoItem from "@/components/TodoItem";

export default function HomeScreen() {
  const todos = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Todo',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Todo',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Todo Third Todo Third Todo Third Todo Third Todo Third Todo Third Todo Third Todo ',
    },
  ];

  const archivedTodos = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Fourth Todo',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fifth Todo',
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Todos</ThemedText>
      </ThemedView>
      <ThemedView style={styles.contentContainer}>
        <FlatList
          data={todos}
          renderItem={({item}) => <TodoItem title={item.title} />}
          keyExtractor={item => item.id}
        />
      </ThemedView>
      <ThemedView style={styles.contentContainer}>
        <FlatList
          data={archivedTodos}
          renderItem={({item}) => <TodoItem title={item.title} archived={true}/>}
          keyExtractor={item => item.id}
        />
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
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
