import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const Send_Otp = () => {
    
    return (
        <View style={myStyle.dau}>
            <Image
                resizeMode='contain'
                source={require('../../../assets/images/Back23.png')}
                style={myStyle.hinh}
            />
            <Text style={myStyle.txtWelcome} >Verify your phone number</Text>
            <Text style={myStyle.CLogin}>We have sent you an SMS with a code to
                enter number</Text>
            <TextInput style={myStyle.TextInput1} placeholder='Please enter phone number for verification' placeholderTextColor='#e0e0eb'></TextInput>
            <TouchableOpacity style={myStyle.ButtonL}><Text style={{ color: '#13B58C', fontSize: 24, fontWeight: 'bold' }}>Next</Text></TouchableOpacity>
        </View>
    )
}

export default Send_Otp

const myStyle = StyleSheet.create({
    ButtonL: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 102,
        borderRadius: 30,
        backgroundColor: 'white',
        height: 50
    },
    TextInput1: {
        borderRadius: 12,
        paddingLeft: 17,
        marginTop: 31,
        borderColor: '#e0e0eb',
        borderWidth: 1,
        color: '#d1d1e0'
    },
    CLogin: {
        alignSelf: 'center',
        textAlign:'center',
        fontSize: 19,
        marginTop: 55,
        color: '#d1d1e0'
    },
    txtWelcome: {
        marginTop: 85,
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white'
    },
    hinh: {
        marginTop: 10,
        marginLeft: 5,
        width: 25,
        height: 25
    },

    dau: {
        padding: 20,
        width: '100%',
        height: '100%',
        backgroundColor: '#33907C'
    },

})