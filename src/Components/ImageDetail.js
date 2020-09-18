import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

    const ImageDetail = props => {
    

        return (
            
            <View style = {styles.flatView}>
               <View style = {styles.imageView}>
               <Image
         style={{
            resizeMode: "contain",
            height: 100,
            width: 200,
            alignItems:'flex-start',
            alignSelf:'flex-start'
          }} 
               source = { props.imagesource}  /> 
                </View>


            <View style = {styles.rightImage}>
            <Image style = {{
                resizeMode:"contain",
                height:100,
                width: 200,
                alignSelf:'flex-end'
           }} source = { props.imagesource1} />  </View> 
    
            </View>
        );
    
    };
  const styles = StyleSheet.create({
      flatView:{
         alignSelf:"stretch",
         backgroundColor:'yellow',
         height:100,
         marginBottom:20
      },
      imageView:{
          height:100,
          width:100,
          alignSelf:'flex-start',
          backgroundColor:'red'
      },
      rightImage:{
          alignSelf:'flex-end',
          backgroundColor:'blue',
          height:100,
          width:100
      }

  })  ;



export default ImageDetail;