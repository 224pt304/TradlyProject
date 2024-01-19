import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'

const Otp_verfitation = ({ onSubmit }) => {
    const [first1, setfirst1] = useState()
    const [first2, setfirst2] = useState()
    const [first3, setfirst3] = useState()
    const [first4, setfirst4] = useState()
    const [first5, setfirst5] = useState()
    const [first6, setfirst6] = useState()

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();


    return (

        <View style={myStyle.dau}>
            <Image
                resizeMode='contain'
                source={require('../assets/images/Back.png')}
                style={myStyle.hinh}
            />
            <Text style={myStyle.txtWelcome} >Phone Verification</Text>
            <Text style={myStyle.CLogin}>Enter your OTP code here</Text>
            <View style={myStyle.ViewOTP}>
                <TextInput style={myStyle.textIP}
                    ref={ref1}
                    onKeyPress={() => ref2.current.focus()}
                    keyboardType='phone-pad'
                    value={first1}
                    onChangeText={a => setfirst1(a)}
                />
                <TextInput style={myStyle.textIP}
                    ref={ref2}
                    onKeyPress={() => ref3.current.focus()}
                    keyboardType='phone-pad'
                    value={first2}
                    onChangeText={a => setfirst2(a)}
                />
                <TextInput style={myStyle.textIP}
                    ref={ref3}
                    onKeyPress={() => ref4.current.focus()}
                    keyboardType='phone-pad'
                    value={first3}
                    onChangeText={a => setfirst3(a)}
                />
                <TextInput style={myStyle.textIP}
                    ref={ref4}
                    onKeyPress={() => ref5.current.focus()}
                    keyboardType='phone-pad'
                    value={first4}
                    onChangeText={a => setfirst4(a)}
                />
                <TextInput style={myStyle.textIP}
                    ref={ref5}
                    onKeyPress={() => ref6.current.focus()}
                    keyboardType='phone-pad'
                    value={first5}
                    onChangeText={a => setfirst5(a)}
                />
                <TextInput style={myStyle.textIP}
                    ref={ref6}
                    keyboardType='phone-pad'
                    value={first6}
                    onChangeText={a => setfirst6(a)}
                />
            </View>
            <Text style={myStyle.CLogin}>Didn't you received any code? </Text>
            <Text style={{ fontSize: 20, color: '#d1d1e0', alignSelf: 'center', marginTop: 20 }}>Resent new code</Text>

            <TouchableOpacity style={myStyle.ButtonL}><Text style={{ color: '#13B58C', fontSize: 24, fontWeight: 'bold' }}>Next</Text></TouchableOpacity>
        </View >

    )
}

export default Otp_verfitation

const myStyle = StyleSheet.create({
    textIP:{
        alignSelf: 'center',
        marginTop: 50,
        letterSpacing: 20,
        fontSize: 20,
        fontWeight: 'bold',
        width: 50,
        height: 50,
        borderBottomWidth: 1,
        borderColor: 'white',
        color: 'white' 
    },
    ViewOTP: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    TextInput1: {
        borderRadius: 12,
        paddingLeft: 17,
        marginTop: 31,
        borderColor: '#e0e0eb',

        borderWidth: 1,
        color: '#d1d1e0'
    },
    ButtonL: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 102,
        borderRadius: 30,
        backgroundColor: 'white',
        height: 50
    },
    CLogin: {
        alignSelf: 'center',

        fontSize: 19,
        marginTop: 40,
        color: '#d1d1e0'
    },
    txtWelcome: {
        marginTop: 85,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30,
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
        width:'100%',
        height:'100%',
        backgroundColor: '#33907C'
    },
})