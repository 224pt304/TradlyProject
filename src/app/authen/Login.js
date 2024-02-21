import { StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AxiosInstance from '../../helper/AxiosInstance';
import { AppContext } from '../../AppContext';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
  const navigation = useNavigation()

  const { user, setuser, setisLogin } = useContext(AppContext);

  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailvalid, setemailvalid] = useState(false);
  const [passwordvalid, setpasswordvalid] = useState(false);

  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    if (!Email || Email.trim().length == 0) {
      setemailError('Email is null');
      setemailvalid(false);
    } else if (!Email.match(emailRegex)) {
      setemailError('This is not email addressp ');
      setemailvalid(false);
    }
    else {
      setemailError('');
      setemailvalid(true);
    }

    if (!password || password.trim().length == 0) {
      setpasswordError('Password is null');
      setpasswordvalid(false);
    } else {
      setpasswordError('');
      setpasswordvalid(true);
    }
  };

  useEffect(() => {
    if (passwordvalid && emailvalid) {
      onPressLogin();
    }
  }, [passwordvalid, emailvalid, Email, password]);

  const [checkPass, setCheckPass] = useState(true);
  const toogleCheckPass = () => {
    setCheckPass(!checkPass);
  };

  const onPressLogin = async () => {
    try {
      console.log('onPressLogin')
      //xử lí gọi api
      const body = {
        email: Email,
        password: password
      }
      // đồng bộ
      // bất đồng bộ
      //xử lý bất đồng bộ như đồng bộ
      const result = await AxiosInstance()
        .get(`/users?email=${Email}&&password=${password}`, null);


      if (result.length != 0) {
        setisLogin(true);
        console.log(result);
      } else {
        Alert.alert('Thông báo', 'Đăng nhập không thành công');
        setisLogin(false);
      }
    }
    catch (error) {
      console.log(error);
      Alert.alert('Thông Báo', 'Đăng nhập không thành công');
      setisLogin(false);
    }
  }



  return (
    <View style={myStyle.container}>
      <Text style={myStyle.TXTWTT}>Welcome to tradly</Text>
      <Text style={myStyle.TXTWTT1}>Login to your account</Text>

      <TextInput style={myStyle.TextInput1} placeholder='Email'
        placeholderTextColor='#e0e0eb'
        type="email" value={Email} onChangeText={text => setEmail(text)}></TextInput>

      <View style={{ width: '90%' }}>
        {emailError &&
          <Text style={[{ color: 'red', fontSize: 14 }]}>{emailError}</Text>}
      </View>

      <TextInput style={myStyle.TextInput1} placeholder='Password'
        placeholderTextColor='#e0e0eb'
        type="password" value={password} onChangeText={text => setPassword(text)}></TextInput>

      <View style={{ width: '90%' }}>
        {passwordError &&
          <Text style={[{ color: 'red', fontSize: 14 }]}>{passwordError}</Text>}
      </View>

      <TouchableOpacity style={myStyle.ButtonL} onPress={() => validate()}>
        <Text style={{ color: '#13B58C', fontSize: 24, fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Send_Otp')}>
        <Text style={myStyle.txtFYP}>Forgot your password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <View style={myStyle.Reset}>
          <Text style={myStyle.Reset}>Don't have an account? </Text>
          <Text style={myStyle.Reset1}>Sign up</Text>
        </View>
      </TouchableOpacity>


    </View>

  )
}

export default Login

const myStyle = StyleSheet.create({
  Reset: {
    flexDirection: 'row',
    justifyContent: 'center',
    color: '#e6e6e6',
    marginTop: 15,
    fontSize: 20
  },

  Reset1: {
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'white',
    marginTop: 15,
    fontSize: 20
  },
  txtFYP: {
    marginLeft: 89,
    fontSize: 20,
    marginTop: 25,
    color: '#e6e6e6'
  },
  ButtonL: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: 'white',
    height: 60
  },
  TextInput1: {
    borderRadius: 12,
    paddingLeft: 17,
    marginTop: 31,
    borderColor: '#e0e0eb',
    borderWidth: 1,
    color: '#d1d1e0'
  },
  TXTWTT1: {
    marginLeft: 120,
    marginTop: 40,
    fontSize: 15,
    color: 'white'
  },
  TXTWTT: {
    marginLeft: 80,
    marginTop: 140,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  container: {
    padding: 20,
    width: '100%',
    height: '100%',
    backgroundColor: '#33907C'
  },
})