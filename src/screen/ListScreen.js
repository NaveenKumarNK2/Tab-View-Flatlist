import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import TabsScreen from '../screen/TabsScreen';



const ListScreen = () => {

    const friends = [
    
        {name : 'Naveenkumar'}, 
        {name : 'Senthil'},
        {name : 'santhosh'},
        {name : 'John'},
        {name : 'ashik'},
        {name : 'karthi'},
        {name : 'Senthilkumar'},
      
    ];

    return(
        < FlatList
        keyExtractor = {friend => friend.name}
        data = {friends}
        renderItem = {({item}) => {
            return (
                <View>
                 <TabsScreen name = {item.name} />
                 </View>
                    );
          
                }}
                />
             );
             
          };

export default ListScreen;
                      