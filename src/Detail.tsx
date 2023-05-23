import React, { useState } from 'react';
import {View, Text, SafeAreaView,
      StyleSheet,
      Image,
      TouchableOpacity,
      Animated,
      Button,
      LayoutAnimation,
    } from "react-native";

import Download from './assets/icons/download.svg'
import Decscription from './assets/icons/description.svg'
import { Use } from 'react-native-svg';

const Detail = () => {


    const animationController = React.useRef(new Animated.Value(0)).current;
    const [isShow, setIsShow] = React.useState(false);

    const rotateTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    const handleDropDownPress = (): void => {
        const duration = 300;
        const config = {
            duration,
            toValue: isShow ? 0 : 1,
            useNativeDriver: true,
        };
        Animated.timing(animationController, config).start();
          setIsShow(!isShow);
    };

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.textcontainer} >
                <Image style= {styles.audible}
                source={require('./assets/images/audible-logo.png')}/>
                </View>
              <View style={styles.container1}>
                <Image style= {styles.bookphoto}
                source={require('./assets/images/bookphoto.png')}/>
                </View>
                <View style={styles.buttoncontainer} >
                <View style={styles.textcontainer}>     
                <Text style={styles.text}>Book Name:</Text>  
                <Text style={styles.text1}>TA MORT A MOI</Text>              
                <Text style={styles.text}>Written by :</Text>  
                <Text style={styles.text1}>David Goudreault</Text>              
                <Text style={styles.text}>Rating:</Text>  
                <Text style={styles.text1}>7.5</Text> 
                </View>             
            <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.button}
                onPress ={() => handleDropDownPress()}>
                   <Text style={styles.text1}>DESCRIPTION</Text> 
                   <Animated.View style={{transform: [{rotateZ: rotateTransform}]}}>
                    <Decscription/>
                    </Animated.View>
                </TouchableOpacity>
                </View>
                {isShow ? (
                <View style={styles.container1}>
                    <Text style={styles.text2}>Kitab haqqinda melumat.Kitab haqqinda melumat.Kitab haqqinda melumat</Text>
                   
                </View>   
                ) : null}
                <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.button}>
                <Download />    
                </TouchableOpacity>
            </View>
            
            </View>
          
        </SafeAreaView>
    )
};

export default Detail;

const styles = StyleSheet.create({

    container:{
        flex:1,
        marginTop:15
    
    },
   container1:{
        alignItems:'center'
    },
    textcontainer:{
        marginHorizontal:25,
        flexWrap:'wrap',
        flexDirection:'row',
    },
    buttoncontainer:{
        gap:20,
        marginHorizontal:10,
    },
    container5:{
        flexDirection:'row',
    },
    audible:{
        justifyContent:'center',
        height:60,
        width:160,
        alignItems:'center'
    },
    bookphoto:{
       alignItems:'center',
       height:300,
       width:300,
    },
    text:{
       color:'#00235B',
       fontSize:24,
       fontWeight: '500'
        },
    text1:{
        color:'#00235B',
        fontSize:24,
        fontWeight: '900'
        },
    button:{
        backgroundColor:'#DBDFEA',
        borderRadius:20,
        height:45,
        width:350,
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:0,
        justifyContent:'space-around'          
       },
    icon:{
        width:20,
        height:20,
         },
    download:{
        width:40,
        height:40,
         },
    navigator:{
        height:60,
        width:395,
        backgroundColor:'#00235B',
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'center',
        marginTop:89,
         },
         text2:{
            fontSize:17,
            fontWeight:'500', 
            color:'#27374D'
         },
});