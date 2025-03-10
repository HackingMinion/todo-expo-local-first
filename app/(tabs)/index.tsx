import {Image, StyleSheet} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {Todos} from "@/components/Todos";
import {todos$ as _todos$} from '@/utils/SupaLegend';
import {AddTodo} from "@/components/AddTodo";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <AddTodo/>
      <Todos todos$={_todos$}/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
