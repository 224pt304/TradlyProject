import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import TitleBar from '../stack/TitleBar'
import AxiosInstance from '../../../helper/AxiosInstance'
import Onboarding from '../../authen/Onboarding'
import { AppContext } from '../../../AppContext'

const Profile = () => {
    const [users, setusers] = useState([]);
    const {isLogin, setisLogin, user} = useContext(AppContext);
    const id = user.id;
    //Lấy data người dùng
    const getUser = async () => {
        try {
            const result = await AxiosInstance()
                .get(`/users/`+id, null);
            if (result !== null) {
                setusers(result);
            }
            else {
                console.log("lỗi kết nối")
            }
        } catch (error) {
            console.log(error);
        }
    }
    const [options, setOptions] = useState([
        { id: 1, name: "Edit profile", img:"https://i.imgur.com/C2U2Wy2.png" },
        { id: 2, name: "About our", img:"https://i.imgur.com/OXks1mz.png" },
        { id: 3, name: "Feedback" , img:"https://i.imgur.com/spDNy9h.png"},
        { id: 4, name: "Help", img:"https://i.imgur.com/cdMIOrH.png" },
        { id: 5, name: "Setting", img:"https://i.imgur.com/LQj7Jov.png" },
        { id: 0, name: "Logout", img:"https://i.imgur.com/rFU0zl6.png" },
    ])

    useEffect(() => {
        getUser()
    })
    function Logout() {
        setisLogin(false);
    }
    const navigation = useNavigation();
    const avata = users.username+'';
    const onSettingnavigate = (value) => {
        switch (value.id) {
            case 1:
                navigation.navigate('EditProfile', {userId : users});
                break;
            case 2:
                navigation.navigate('About');
                break;
            case 3:
                navigation.navigate('FeedBack');
                break;
            case 0:
                Logout();
                break;
            default:
                break;
        }
    };
    const render_Opntion = ({item}) => {
        return (
            <TouchableOpacity onPress={() => onSettingnavigate(item)} style={styles.Item}>
                <View>
                <Image style={{width: 20, height: 20, resizeMode: 'cover', marginHorizontal: 10}} source={{uri: item.img}}/>
                </View>
                <Text style={styles.Text_option}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.Container}>
            <TitleBar title={"Profile"} />
            <View style={styles.Box_infomation}>
                <View style={styles.Box_avata}>
                    <Image style={styles.Image_avata} source={{ uri: "https://i.imgur.com/t6abmk3.jpg" }} />
                    <Text style={styles.Text_avata}>{avata.substring(0,1)}</Text>
                </View>
                <View style={styles.Box_content_infomation}>
                    <View style={{ flex: 2, justifyContent: 'space-evenly' }}>
                        <Text style={styles.Name}>{users.username}</Text>
                        <Text style={styles.Phone}>{users.phone}</Text>
                        <Text style={styles.Email}>{users.email}</Text>
                    </View>
                    <View style={{ flex: 5 }}></View>
                </View>
            </View>
            <View style={styles.Box_options}>
                <FlatList style={styles.Flatlist_option}
                    data={options}
                    renderItem={({ item }) => render_Opntion({ item })}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    Text_option: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black'
    },
    Flatlist_option: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    Box_options: {
        marginTop: '-40%',
        flex: 7,
        padding: 20
    },
    Box_content_infomation: {
        flex: 4,
        flexDirection: 'column',
        padding: 10
    },
    Text_avata: {
        position: 'absolute',
        fontSize: 65,
        alignSelf: 'center',
        color: 'white'
    },
    Image_avata: {
        width: 90,
        height: 90,
        resizeMode: 'cover',
        borderRadius: 360,
        alignSelf: 'center'
    },
    Box_avata: {
        flex: 2
    },
    Box_infomation: {
        marginTop: -25,
        flex: 4,
        backgroundColor: '#33907C',
        flexDirection: 'row'
    },
    Item: {
        padding: 10,
        paddingVertical: 20,
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: 1,
        flexDirection: 'row'
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
        lineHeight: 16,
        color: 'white',
    },
    Email: {
        fontSize: 12,
        lineHeight: 16,
        color: 'white',
    }
})