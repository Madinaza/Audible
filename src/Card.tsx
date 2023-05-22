import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import Downloads from './assets/icons/download.svg';

// view stilleri - mainContainer, mediaWrapper, headerContainer, childContainer, chidlWrapper ...
// text stilleri - headerTitle, descriptionTitle...
// button stilleri - mainButton, deleteButton, buttonWrap

const Card = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.bookimage}
                source={require('./assets/images/bookphoto.png')} />
            <View style={styles.datemedia}>
                <View>
                    <Text style={styles.bookname}>
                        TA MORT A MOI
                    </Text>
                    <Text style={styles.writername}>
                        David  Goudreault
                    </Text>
                    <Text>
                        4h .20min |12 Chapters
                    </Text>
                </View>
                <TouchableOpacity>
                    <Downloads width={35} height={35} />
                </TouchableOpacity>
            </View>
        </View>
    )
};
export default Card;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    bookimage: {
        height: 170,
        width: 150,
        

    },
    bookname: {
        color: '#00156B',
        fontSize: 22,
        fontFamily: 'MavenProExtraBold'

    },
    writername: {
        fontWeight: '500',
    },
    datemedia: {
        borderWidth: 1,
        borderColor: 'grey',
        width: '70%',
        height: 85,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        gap: 60,
        right: 28
      
    }

})