import { Alert, FlatList, Image, StyleSheet, Text, TextBase, TextInput, TextInputComponent, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import TitleBar from './TitleBar'
import AxiosInstance from '../../../helper/AxiosInstance'
import { AppContext } from '../../../AppContext'
import { useContext } from 'react'

const FeedBack = ({ route }) => {
    const [index, setIndex] = useState(5);
    const {user} = useContext(AppContext);
    const id = user.id;
    const [users, setusers] = useState([]);
    const [data, setdata] = useState([
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
        { id: 5, value: 5 },
    ])
    const { product } = route.params;
    const navigation = useNavigation();
    const updateInput = (value) => {
        setIndex(value);
    }
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
    function generateRandomId(prefix, length) {
        var randomId = prefix + '_';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            randomId += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return randomId;
    }
    //Thêm feedback mới và thay đổi trạng thái feedback trong lịch sử mua hàng

    const Sendfeedback = () => {
        const date = new Date();
        const feedback = {
            "id": generateRandomId('id', 6),
            "name": product.nameProduct,
            "img": product.image[0].img,
            "evaluate": index,
            "date_time": date.toString().substring(4, 15)
        }

        //gửi dữ liệu phản hồi
        const postFeedback = async () => {
            getUser();
            try {
                let dataHistory = users.histories
                dataHistory = dataHistory.map((el) =>
                    el.id == product.id ? { ...el, statusFeedback: 1 } : { ...el }
                )
                const updatedUser = {
                    ...users,
                    histories: dataHistory,
                    feedbacks: [...users.feedbacks, feedback]
                };
                const result = await AxiosInstance().put('users/'+id+'/', updatedUser);
                if (result !== null) {
                    getUser();
                }
            } catch (error) {
                console.log(error)
            }
        }
        postFeedback();
        Alert.alert("Your feedback about " + product.nameProduct + " was send. Thanks !");
        setTimeout(() => {
            navigation.goBack();
        }, 1500);
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <View style={styles.container}>
            <TitleBar title={"FeedBack"} />
            <View style={{ width: '100%', height: '100%' }}>
                <View style={{ width: '100%', height: '15%', backgroundColor: '#33907C' }}></View>
                <View style={{ width: '100%', height: '100%', position: 'absolute', alignItems: 'center', flexDirection: 'column' }}>
                    <Image style={{ borderWidth: 4, borderColor: 'white', width: 160, height: 160, borderRadius: 20, marginTop: '5%' }} source={{ uri: product.image[0].img }} />
                    <Text style={styles.Name}>{product.nameProduct}</Text>
                    <View style={{ height: 40 }}>
                        <FlatList
                            horizontal={true}
                            data={data}
                            renderItem={({ item }) => (
                                <View style={{ width: 35, height: 35, margin: 5 }}>
                                    {item.id <= index ?
                                        <TouchableOpacity onPress={() => updateInput(item.value)}>
                                            <Image style={{ width: 35, height: 35, resizeMode: 'cover' }} source={{ uri: "https://i.imgur.com/jP6PybW.png" }} />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={() => updateInput(item.value)}>
                                            <Image style={{ width: 35, height: 35, resizeMode: 'cover' }} source={{ uri: "https://i.imgur.com/SKAGA3c.png" }} />
                                        </TouchableOpacity>
                                    }
                                </View>
                            )}
                        />
                    </View>
                    <View style={{ marginTop: 30, backgroundColor: 'white', width: '90%', height: '30%', borderRadius: 15, textAlign: 'justify', justifyContent: 'flex-start', borderWidth: 1 }}>
                        <TextInput multiline={true} numberOfLines={10} />
                    </View>
                    <TouchableOpacity onPress={() => Sendfeedback()} style={{ backgroundColor: '#33907C', paddingHorizontal: 80, paddingVertical: 5, marginTop: 20, borderRadius: 50 }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default FeedBack

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: '#F6F9FF'
    },
    Name: {
        fontSize: 25,
        fontWeight: '500',
        color: 'black',
        letterSpacing: 1,
        marginTop: '2%',
    }
})