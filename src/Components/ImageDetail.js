import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

    const ImageDetail = props => {
    

        return (
            
            <View style = {styles.imageView}>
            
                <Image source = { props.imageSource}  />
                
    
            </View>
        );
    
    };
  const styles = StyleSheet.create({
      imageView:{
         alignItems:'center'
      }

  })  ;



export default ImageDetail;