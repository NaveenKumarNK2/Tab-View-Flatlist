import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {Text, StyleSheet} from 'react-native';



const ListScreen = () => {

    const friends = [
    
        {name : 'Naveenkumar'}, 
        {name : 'Senthil'},
        {name : 'santhosh'},
        {name : 'John'},
        {name : 'ashik'},
        {name : 'karthi'},
        {name : 'Senthilkumar'},
        {name : 'Kumar'},
        {name : 'Vinoth'},
        {name : 'Vicky'},
        {name : 'AjithKumar'},
        {name : 'VijayKumar'},
      
    ];

    return(
        < FlatList
        keyExtractor = {friend => friend.name}
        data = {friends}
        renderItem = {({item}) => <Text style={styles.textStyle}> {item.name}  </Text> }/>    
                     
                
        );
             
    };
    const styles = StyleSheet.create({
    textStyle:{
        fontSize:35,
        fontStyle:'italic',
        marginVertical:25
        
    }
    });
    export default ListScreen;    


                      