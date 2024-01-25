import { StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={myStyle.container}>
      <Text style={myStyle.TXTWTT}>Welcome to tradly</Text>
      <Text style={myStyle.TXTWTT1}>Login to your account</Text>

      <TextInput style={myStyle.TextInput1} placeholder='Email' placeholderTextColor='#e0e0eb'></TextInput>
      <TextInput style={myStyle.TextInput1} placeholder='Password' placeholderTextColor='#e0e0eb'></TextInput>

      <TouchableOpacity style={myStyle.ButtonL}>
        <Text style={{ color: '#13B58C', fontSize: 24, fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>
      <Text style={myStyle.txtFYP}>Forgot your password ?</Text>
      <View style={myStyle.Reset}>
        <Text style={myStyle.Reset}>Don't have an account? </Text>
        <Text style={myStyle.Reset1}>Sign up</Text>
      </View>

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
  txtFYP:{
    marginLeft:89,
    fontSize:20,
    marginTop:25,
    color:'#e6e6e6'
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
    paddingLeft:17,
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
    padding:20,
    width: '100%',
    height: '100%',
    backgroundColor: '#33907C'
  },
})