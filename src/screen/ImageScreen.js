import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {Text, StyleSheet} from 'react-native';
import ImageDetail from '../Components/ImageDetail';


const ImageScreen = () => {

    const images = [
    
        {imagesource : "/../assets/forest.jpg"}, 
        {imagesource : '../../assets/beach.jpg'},
        {imagesource : '../../assets/mountain.jpg'},
        {imagesource : '../../assets/tree.jpg'},
        {imagesource : '../../assets/rose.jpg'},
        {imagesource : '../../assets/way.jpg'},
        
      
    ];

    return(
        < FlatList
        keyExtractor = {image => image.imagesource}
        data = {images}
    renderItem = {({item}) => <ImageDetail image source ={item.imagesource}/>}   
     />                
                
        );
             
    };
    
    export default ImageScreen;    





