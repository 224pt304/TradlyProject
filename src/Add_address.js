import { StyleSheet, Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, StatusBar, Image, TextInput, Pressable, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';


const Add_address = () => {

    const navigation = useNavigation();

    const [name, setname] = useState('');
    const [phone, setPhone] = useState('');
    const [streetaddress, setstreetaddress] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [zipcode, setZipCode] = useState('');


    const save = () => {
        const listaddress = 
            {
                name: name,
                phone: phone,
                streetaddress: streetaddress,
                city: city,
                state: state,
                zipcode: zipcode,
            }
        
        navigation.navigate('Cart', { listaddress: listaddress })
    }





    return (
        <View style={myStyle.container}>
            <StatusBar backgroundColor={'#33907C'}></StatusBar>
            <View style={myStyle.tarbar}>
                <Pressable
                    onPress={() => navigation.goBack()} >
                    <Image
                        style={myStyle.back}
                        source={require('../assets/images/back.png')}
                    />
                </Pressable>
                <Text style={myStyle.textAddress}>Add a new address</Text>
                <Image style={myStyle.back} />
            </View>
            <View style={myStyle.btnlocation}>
                <Image style={myStyle.location} source={require('../assets/images/location.png')} />
                <Text style={myStyle.textlocation}>Use current location</Text>
            </View>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'height':'padding'}
            >
                <ScrollView>
                <View style={myStyle.viewInput}>
                <Text myStyle={myStyle.textname}>Name</Text>
                <TextInput
                    style={myStyle.textinput}
                    value={name}
                    keyboardType='default'
                    onChangeText={(name) => setname(name)}
                />
                <Text myStyle={myStyle.textname}>Phone</Text>
                <TextInput
                    style={myStyle.textinput}
                    value={phone}
                    keyboardType='number-pad'
                    onChangeText={(phone) => setPhone(phone)}
                />
                <Text myStyle={myStyle.textname}>Street address</Text>
                <TextInput
                    style={myStyle.textinput}
                    value={streetaddress}
                    keyboardType='default'
                    onChangeText={(streetaddress) => setstreetaddress(streetaddress)}
                />
                <Text myStyle={myStyle.textname}>City</Text>
                <TextInput
                    style={myStyle.textinput}
                    value={city}
                    keyboardType='default'
                    onChangeText={(city) => setcity(city)}
                />
                <Text myStyle={myStyle.textname}>State</Text>
                <TextInput
                    style={myStyle.textinput}
                    value={state}
                    keyboardType='default'
                    onChangeText={(state) => setstate(state)}
                />
                <Text myStyle={myStyle.textname}>Zipcode</Text>
                <TextInput
                    style={myStyle.textinput}
                    value={zipcode}
                    keyboardType='number-pad'
                    onChangeText={(zipcode) => setZipCode(zipcode)}
                />
                <View style={myStyle.viewSave}>
                    <TouchableOpacity style={myStyle.touchableOpacity} onPress={() => save()}>
                        <Text style={myStyle.textSave}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
                </ScrollView>
            </KeyboardAvoidingView>

        </View>
    )
}

export default Add_address

const myStyle = StyleSheet.create({
    textinput: {
        borderBottomWidth: 0.5,
        borderColor: '#d6d6d6',
        height: 40,
        marginBottom: 20,
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: '#333A42'


    },
    textname: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        color: '#4F4F4F',
    },
    viewInput: {
        height: '100%',
        backgroundColor: 'white',
        padding: 20,

    },
    textSave: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',

    },
    touchableOpacity: {
        height: 48,
        backgroundColor: '#33907C',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    viewSave: {
        backgroundColor: 'white',
        height: 88,
        padding: 20,
    },
    location: {
        resizeMode: 'cover',
        height: 30,
        width: 30
    },
    btnlocation: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 10,
        marginBottom: 10
    },
    textlocation: {
        color: '#4EA0FF',
        fontSize: 18,
        fontStyle: 'normal',
        fontFamily: 'Montserrat',
        marginLeft: 10
    },
    textAddress: {
        fontSize: 24,
        color: 'white',
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    back: {
        height: 20,
        width: 20,

    },
    tarbar: {
        backgroundColor: '#33907C',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#F6F9FF'
    }
})