import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { TabView, SceneMap } from 'react-native-tab-view';

  const friends = [
  
      {name : 'Naveenkumar'}, 
      {name : 'Senthil'},
      {name : 'santhosh'},
      {name : 'John'},
      {name : 'ashik'},
      {name : 'karthi'},
      {name : 'Senthilkumar'},
    
  ];

    const FirstRoute = () =>  (
    < FlatList
    keyExtractor = {friend => friend.name}
    data = {friends}
    renderItem = {({item}) => {
      return
             <Text name = {item.name} />
             
       } } 
            />
         );
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);
 
const initialLayout = { width: Dimensions.get('window').width };
 
export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'Third'}
  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  });
 
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});


