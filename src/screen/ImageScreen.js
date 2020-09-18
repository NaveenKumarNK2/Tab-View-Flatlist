import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {Text, StyleSheet} from 'react-native';
import ImageDetail from '../Components/ImageDetail';


const ImageScreen = () => {

    const images = [
    
        {imagesource : require('../../assets/forest.jpg') , imagesource1: require('../../assets/mountain.jpg')}, 
        {imagesource : require('../../assets/beach.jpg') ,imagesource1 : require('../../assets/rose.jpg')},
        {imagesource : require('../../assets/mountain.jpg'),imagesource1 :require('../../assets/tree.jpg')},
        
        ];

    return(
        < FlatList
        keyExtractor = {image => image.imagesource}
        data = {images}
    renderItem = {({item}) => <ImageDetail imagesource ={item.imagesource} imagesource1 ={item.imagesource1} />}   
     />                
                
        );
             
    };
    
    export default ImageScreen;    





