import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../../AppContext';
const TitleBar = (props) => {
    const navigation = useNavigation();
    const {Browser, setBrowser} = useContext(AppContext);
    const { title } = props;
    let all = [...Browser];
    return (
        <View style={[styles.container,{marginBottom: (title === 'Home' || title === 'Browser') ? 100 : 0}]}>
            <View style={styles.Header}>
                <Text style={styles.Title}>{title}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart',{listaddress:""})}>
                    <Image style={{ width: 30, height: 30 }} source={{ uri: "https://i.imgur.com/vaNk6IZ.png" }} />
                </TouchableOpacity>
            </View>

            {(title === 'Home' || title === 'Browser') &&
                <View style={[styles.Header, styles.centerView]}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Nhập tìm kiếm' />

                    {title === 'Browser' &&
                        <View style={styles.viewSort}>
                            <TouchableOpacity style={styles.btnSort}>
                                <Image style={styles.iconSort} source={require('../../../../assets/images/sort.png')} />
                                <Text style={styles.textSort}>Sort by</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>}
        </View>
    )
}

export default TitleBar

const styles = StyleSheet.create({
    viewSort:{
        width: '100%',
        alignItems: 'flex-start',
    },
    textSort: {
        fontSize: 14,
        color: 'white',
    },
    btnSort: {
        height: 31,
        width: '32%',
        backgroundColor: '#33907C',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        paddingLeft: 10,
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    iconSort: {
        width: 16,
        height: 16
    },
    centerView: {
        justifyContent: 'center',
        flexDirection: 'column'
    },
    textInput: {
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 10,
    },
    container: {
        width: '100%',
        height: 100,
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