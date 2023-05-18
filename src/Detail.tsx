import React from 'react';
import {View, Text, SafeAreaView,StyleSheet, Image, TouchableOpacity} from "react-native";
import Download from './assets/icons/download.svg'
import Decscription from './assets/icons/description.svg'
const Detail = () => {

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
                <TouchableOpacity style={styles.button}>
                   <Text style={styles.text1}>DESCRIPTION</Text> 
                    <Decscription/>
                </TouchableOpacity>
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
});