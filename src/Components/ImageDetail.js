import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const ImageDetail = props => {


    return (

        <View style={styles.flatView}>
            <View style={styles.imageView}>
                <Image style={{
                    flex:1,
                    resizeMode: "cover",
                    height: null,
                    width: null,
                    alignItems: 'flex-start',
                    borderBottomLeftRadius:10,
                    borderBottomRightRadius:10,
                    borderTopLeftRadius:10,
                    borderTopRightRadius:10,
                    shadowColor: '#000000',
                    shadowOffset: { width: 2, height: 2 },
                    shadowOpacity: 0.9,
                    shadowRadius: 3,
                    

                }}
                       
        
                    source={props.imagesource} />
            </View>


            <View style={styles.rightImage}>
            <Image style={{
                    flex:2,
                    resizeMode: "cover",
                    height: null,
                    width: null,
                   
                    

                }}
                       
        
                    source={props.imagesource1} />
                 </View>

        </View>
    );

};
const styles = StyleSheet.create({
    flatView: {
        alignSelf: "stretch",
        width:100,
        height: 110,
        marginBottom: 20,
        flexDirection: 'row',
        marginVertical:30
    },
    imageView: {
        
        height:'120%',
        width: 150,
        alignSelf: 'flex-start',
        
        marginLeft:'10%',
        alignSelf: 'flex-start'
       
        
    },
    rightImage: {
        alignSelf: 'flex-end',
        height: 100,
        width: 130,
        alignItems:'flex-end',
        marginLeft:30,
        marginRight:40,
        backgroundColor:'red',
        marginTop:40
        
        
    }

});



export default ImageDetail;