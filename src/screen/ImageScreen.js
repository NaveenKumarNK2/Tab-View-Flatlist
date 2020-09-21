import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {Text, StyleSheet} from 'react-native';
import ImageDetail from '../Components/ImageDetail';


const ImageScreen = () => {

    const images = [
    
        {imagesource : 'file:///storage/emulated/0/WhatsApp/Media/WhatsApp Images/IMG-20200920-WA0004.jpg'},
        {imagesource : require('../../assets/beach.jpg') ,imagesource1 : require('../../assets/rose.jpg')},
        {imagesource : require('../../assets/mountain.jpg'),imagesource1 :require('../../assets/tree.jpg')},
        
        ];

        const checkPermission = async () => {
        
            if (Platform.OS === 'android') {
              ImageScreen();
            } else {
              try {
                const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.READ_PHONE_STORAGE,
                  {
                    title: 'Storage Permission Required',
                    message: 'This app needs access to your storage to view Photos',
                  }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  
                  console.log('Storage Permission Granted.');
                  ImageScreen();
                } else {
                  alert('Storage Permission Not Granted');
                }
              } catch (err) {
                console.warn(err);
              }
            }
          };
        

    return(
        < FlatList
        keyExtractor = {image => image.imagesource}
        data = {images}
    renderItem = {({item}) => <ImageDetail imagesource ={item.imagesource} imagesource1 ={item.imagesource1} />}   
     />                
                
        );
             
    };
    
    export default ImageScreen;    





