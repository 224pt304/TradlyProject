import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const Create = () => {
    return (
        <View>
            <View style={myStyle.dau}>
                <Image
                    resizeMode='contain'
                    source={require('../assets/images/Back.png')}
                    style={myStyle.hinh}
                />
                <Text style={myStyle.txtWelcome} >Welcom to Lungo!!</Text>
                <Text style={myStyle.CLogin}>Register to Continue</Text>
                <TextInput style={myStyle.TextInput1} placeholder='Full Name' placeholderTextColor='#e0e0eb'></TextInput>
                <TextInput style={myStyle.TextInput2} placeholder='Email' placeholderTextColor='#e0e0eb'></TextInput>
                <View >
                    <TextInput style={myStyle.TextInput2} placeholder='Password' placeholderTextColor='#e0e0eb'>
                    </TextInput>
                    <Image
                        source={require('../assets/images/eye.png')}
                        style={myStyle.eyeContainer}
                    />
                </View>
                <View >
                    <TextInput style={myStyle.TextInput2} placeholder='Re-enter Password' placeholderTextColor='#e0e0eb'>
                    </TextInput>
                    <Image
                        source={require('../assets/images/eye.png')}
                        style={myStyle.eyeContainer}
                    />
                </View>

                <TouchableOpacity style={myStyle.ButtonL}><Text style={myStyle.txtCreate}>Create</Text></TouchableOpacity>
                <View style={myStyle.Register}>
                    <Text style={myStyle.Register}>Have an account ? </Text>
                    <Text style={myStyle.Register1}>Sign in</Text>
                </View>
            </View>
        </View>
    )
}

export default Create

const myStyle = StyleSheet.create({
    txtCreate: {
        color: '#13B58C',
        fontSize: 24,
        fontWeight: 'bold'
    },
    Register1: {
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'white',
        marginTop: 15,
        fontSize: 18,
    },
    Register: {
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#e6e6e6',
        marginTop: 15,
        fontSize: 18
    },
    ButtonL: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 30,
        backgroundColor: 'white',
        height: 50
    },
    eyeContainer: {
        position: 'absolute',
        right: 20,
        bottom: 12

    },
    eyeIcon: {

        width: 29,
        height: 18,
    },
    TextInput2: {
        borderRadius: 12,
        paddingLeft: 17,
        marginTop: 20,
        borderColor: '#e0e0eb',
        borderWidth: 1,
        color: '#d1d1e0'
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
        fontSize: 20,
        marginLeft: 120,
        marginTop: 55,
        color: '#d1d1e0'
    },

    txtWelcome: {
        marginTop: 85,
        marginLeft: 80,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white'
    },
    hinh: {
        marginTop: 19,
        marginLeft: 20,
        width: 25,
        height: 25
    },

    dau: {
        width: '100%',
        height: '100%',
        backgroundColor: '#33907C'
    },
})