import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const TitleBar = (props) => {
    const navigation = useNavigation();
    const { title } = props;
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.Title}>{title}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Image style={{width: 30, height: 30}} source={{uri: "https://i.imgur.com/vaNk6IZ.png"}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TitleBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '12%',
        flexDirection: 'column',
    },
    Header: {
        width: '100%',
        height: '100%',
        backgroundColor: '#33907C',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
    },
    Title: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 1,
    },
})