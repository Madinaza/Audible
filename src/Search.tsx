import React, { useRef, useState } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image, ViewBase } from 'react-native';
import SearchButton from './assets/icons/searchnormal1.svg'
import CancelButton from './assets/icons/cancel-close-delete-svgrepo-com (1) 1.svg'

const url = 'https://librivox.org/api/info'

const Search = () => {
    const [value, setValue] = useState("");
    const [search, setSearch] = useState([]);
    const scrollRef = useRef<ScrollView>(null)
    const getSearch = async () => {
        const apiUrl = await fetch(url, { method: 'GET' });
        const result = await apiUrl.json();
        console.log(result);
        setSearch(result);
    }

    const onChanheText = (text: string) => {
        setValue(text);
    };
    const Clear = () => {
        setSearch([]);
        setValue("")
    };
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={styles.logo}>
                <Image source={require('./assets/images/Logo.png')} />
            </View>
            <View style={styles.commonContainer}>

                <View style={styles.searchcontainer}>

                    <View style={styles.textinput}>
                        <SearchButton style={styles.iconPadding} />
                        <TextInput
                            value={value}
                            onChangeText={onChanheText}
                            placeholder='search'
                            placeholderTextColor='black' />
                    </View>
                    <CancelButton style={styles.iconPadding} />
                </View>
            </View>
            <View>
                {value ? (
                    <><TouchableOpacity onPress={getSearch}>
                        <Text>SEARCH</Text>
                    </TouchableOpacity><TouchableOpacity onPress={Clear}>
                            <Text>CLEAR</Text>
                        </TouchableOpacity></>
                ) : null}
            </View>
            {/* <ScrollView ref={scrollRef}> 
        {book?.map((item, index) => ( 
          <View key={index} > 
            <Image style={styles.image} 
              source={{ uri: item?.show?.image?.medium || '' }} 
            /> 
            <Text> {item?.show?.name}</Text> 
          </View> 
        ))} 
        </ScrollView> */}
            <View style={styles.book}>
                <Image
                    source={require('./assets/images/Book.png')} />
                <Text style={styles.text}>PLEASE,ENTER BOOK NAME OR AUTHOR NAME .</Text>
            </View>
            {/* <View style={styles.errorpng}>
                <Image source={require('./assets/images/Error.png')}/>
                <Text style={styles.text}>UPS!... NO RESULTS FOUND</Text>
            </View> */}
        </View>
    )
};
export default Search;
const styles = StyleSheet.create({
    searchcontainer: {
        backgroundColor: '#DBDFEA',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 17,
        fontSize: 26,

    },
    textinput: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,

    },

    logo: {
        justifyContent: 'center'
    },

    commonContainer: {
        alignItems: 'center',
        padding: 20
    },

    iconPadding: {
        paddingHorizontal: 20,

    },
    book: {
        alignItems: 'center',
        padding: '30%'
    },
    errorpng: {
        alignItems: 'center',
        padding: '20%'
    },
    text: {
        fontFamily: 'Maven Pro',
        fontSize: 30,
        width: '900',
        color: '#00156B',
        padding: 10,


    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 12
    }
})