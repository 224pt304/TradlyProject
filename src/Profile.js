import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import TitleBar from './TitleBar'

const Profile = () => {
    const [data, setData] = useState({
        id: 1,
        name: 'Nguyễn Xuân Quỳnh',
        phone: '0623456785',
        email: 'quynhga@gmail.com',
        password: 'quynhga123'
    });

    const [options, setOptions] = useState([
        { id: 1, name: "Edit profile" },
        { id: 2, name: "About our" },
        { id: 3, name: "Feedback" },
        { id: 4, name: "Logout" },
    ])

    const navigation = useNavigation();
    const avata = data.name.substring(0, 1);
    const Chosse = (value) => {
        switch (value.id) {
            case 1:
                navigation.navigate('EditProfile', { profile: data });
                break;
            case 2:
                navigation.navigate('About');
                break;
            case 3:
                navigation.navigate('FeedBack');
                break;
            case 4:
                navigation.navigate('Login');
                break;
            default:
                break;
        }
    }
    return (
        <View style={styles.Container}>
            <TitleBar title={"Profile"} />
            <View style={{ width: '100%', height: '35%', backgroundColor: '#33907C', flexDirection: 'row' }}>
                <View style={{ flex: 2 }}>
                    <Image style={{ width: 90, height: 90, resizeMode: 'cover', borderRadius: 360, alignSelf: 'center' }} source={{ uri: "https://i.imgur.com/t6abmk3.jpg" }} />
                    <Text style={{ position: 'absolute', fontSize: 65, alignSelf: 'center', color: 'white' }}>{avata}</Text>
                </View>
                <View style={{ flex: 4, flexDirection: 'column', padding: 10 }}>
                    <View style={{ flex: 2, justifyContent: 'space-evenly' }}>
                        <Text style={styles.Name}>{data.name}</Text>
                        <Text style={styles.Phone}>{data.phone}</Text>
                        <Text style={styles.Email}>{data.email}</Text>
                    </View>
                    <View style={{ flex: 5 }}></View>
                </View>
            </View>
            <View style={{ marginTop: '-40%', width: '100%', height: 'auto', padding: 20 }}>
                <FlatList style={{ backgroundColor: 'white', borderRadius: 10 }}
                    data={options}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => Chosse(item)} style={styles.Item}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    Item: {
        padding: 15,
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: 1,
    },
    Container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#3F6F9FF'
    },
    Name: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    Phone: {
        fontSize: 12,
        color: 'white',
    },
    Email: {
        fontSize: 12,
        color: 'white',
    }
})