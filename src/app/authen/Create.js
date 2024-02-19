import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../AppContext';
import AxiosInstance from '../../helper/AxiosInstance';

const Create = () => {
    const navigation = useNavigation()
    const { setisLogin, setuser } = useContext(AppContext);
    const [onclcick, setonclcick] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [name, setName] = useState('');

    const [emailValid, setemailvalid] = useState(false);
    const [passwordValid, setPasswordvalid] = useState(false);
    const [confirmPasswordvalid, setConfirmpasswordvalid] = useState(false);
    const [nameValid, setNamevalid] = useState(false);

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmpasswordError, setconfirmpasswordError] = useState('');
    const [nameError, setNameError] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validate = () => {
        if (!name || name.trim().length == 0) {
            setNameError('Name is null');
            setNamevalid(false);
        } else {
            setNameError('');
            setNamevalid(true);
        }

        if (!email || email.trim().length == 0) {
            setEmailError('Email is null');
            setemailvalid(false);
        } else if (!email.match(emailRegex)) {
            setEmailError('This is not email addressp ');
            setemailvalid(false);
            console.log('a')
        }
        else {
            setEmailError('');
            setemailvalid(true);
        }

        if (!password || password.trim().length == 0) {
            setPasswordError('Password is null');
            setPasswordvalid(false);
        } else {
            setPasswordError('');
            setPasswordvalid(true);
        }
        if (!confirmpassword || confirmpassword.trim().length == 0) {
            setconfirmpasswordError('Confirm Password is null');
            setConfirmpasswordvalid(false);
        } else if (password !== confirmpassword) {
            setconfirmpasswordError('Re-tyle password not same password');
            setConfirmpasswordvalid(false);
        } else {
            setconfirmpasswordError('');
            setConfirmpasswordvalid(true);
        }

        setonclcick(!onclcick);
    };

    const onPressRegister = async () => {
        try {
            const body = {

                username: name,
                email: email,
                phone: null,
                password: password,
                carts: [],
                favorites: [],
                histories: [],
                feedbacks: [],
            }
            const result = await AxiosInstance()
                .post('/users', body);
            console.log(result);
            if (result.length != 0) {
                console.log(result);
                setuser(result)
                setisLogin(true);
            }
            else {
                Alert.alert('Thông báo', 'Đăng nhập không thành công');
                setisLogin(false)
            }
        }
        catch (error) {
            console.log(error);
            Alert.alert('Thông Báo', 'Đăng nhập không thành công');
            setisLogin(false);
        }


    }
    useEffect(() => {
        if (passwordValid && emailValid && nameValid && confirmPasswordvalid) {
            Alert.alert('thành công');
            onPressRegister();
            setisLogin(true);
        } else {
            console.log('loi');
        }
    }, [onclcick]);



    return (
        <View>
            <View style={myStyle.dau}>
                <Image
                    resizeMode='contain'
                    source={require('../../../assets/images/Back23.png')}
                    style={myStyle.hinh}
                />
                <Text style={myStyle.txtWelcome} >Welcom to Lungo!!</Text>
                <Text style={myStyle.CLogin}>Register to Continue</Text>
                <TextInput style={myStyle.TextInput1} placeholder='Full Name' placeholderTextColor='#e0e0eb'
                    value={name} onChangeText={text => setName(text)}></TextInput>
                <View style={{ width: '90%' }}>
                    {nameError &&
                        <Text style={[{ color: 'red', fontSize: 14 }]}>{nameError}</Text>}
                </View>
                <TextInput style={myStyle.TextInput2} placeholder='Email' placeholderTextColor='#e0e0eb'
                    value={email} onChangeText={text => setEmail(text)}></TextInput>
                <View style={{ width: '90%' }}>
                    {emailError &&
                        <Text style={[{ color: 'red', fontSize: 14 }]}>{emailError}</Text>}
                </View>
                <View >
                    <TextInput style={myStyle.TextInput2} placeholder='Password' placeholderTextColor='#e0e0eb'
                        type="password" value={password} onChangeText={text => setPassword(text)}>
                    </TextInput>
                    <Image
                        source={require('../../../assets/images/eye.png')}
                        style={myStyle.eyeContainer}
                    />
                </View>

                <View style={{ width: '90%' }}>
                    {passwordError &&
                        <Text style={[{ color: 'red', fontSize: 14 }]}>{passwordError}</Text>}
                </View>

                <View >
                    <TextInput style={myStyle.TextInput2} placeholder='Re-enter Password' placeholderTextColor='#e0e0eb'
                        type="confirmpassword" value={confirmpassword} onChangeText={text => setconfirmpassword(text)}>
                    </TextInput>
                    <Image
                        source={require('../../../assets/images/eye.png')}
                        style={myStyle.eyeContainer}
                    />
                </View>

                <View style={{ width: '90%' }}>
                    {confirmpasswordError &&
                        <Text style={[{ color: 'red', fontSize: 14 }]}>{confirmpasswordError}</Text>}
                </View>

                <TouchableOpacity style={myStyle.ButtonL} onPress={() => validate()}><Text style={myStyle.txtCreate}>Create</Text></TouchableOpacity>
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