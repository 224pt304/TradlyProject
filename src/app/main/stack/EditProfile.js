import { Alert, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import TitleBar from './TitleBar'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AxiosInstance from '../../../helper/AxiosInstance'
import { AppContext } from '../../../AppContext'

const EditProfile = ({ route }) => {
    const { userId } = route.params;
    const {user, setuser} = useContext(AppContext);
    const id = user.id;
    const [username, setusername] = useState(userId.username);
    const [email, setemail] = useState(userId.email);
    const [phone, setphone] = useState(userId.phone);
    const [password, setpassword] = useState(userId.password);
    const navigation = useNavigation();

    const changeInfo = async () => {
        try {
            // Kiểm tra các trường thông tin nhập liệu
            if (username == '') {
                ToastAndroid.show("Please enter a username", ToastAndroid.SHORT);
                return;
            }
            if (email == '') {
                ToastAndroid.show("Please enter an email", ToastAndroid.SHORT);
                return;
            }
            // Kiểm tra định dạng email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.match(emailRegex)) {
                ToastAndroid.show("Please enter a valid email address", ToastAndroid.SHORT);
                return;
            }
            if (phone == '') {
                ToastAndroid.show("Please enter a phone number", ToastAndroid.SHORT);
                return;
            }
            // Kiểm tra độ dài password
            if (password.length < 6) {
                Alert.alert("Password must be at least 6 characters long", ToastAndroid.SHORT);
                return;
            }
    
            const updatedataUsers = {
                ...userId,
                username: username,
                email: email,
                phone: phone,
                password: password,
            }
            const result = await AxiosInstance().put('/users/'+id+'/', updatedataUsers)
            if (result !== null) {
                setuser(result)
                Alert.alert("Thay đổi thông tin tài khoản thành công");
                navigation.goBack();
            } else {
                // Xử lý trường hợp result === null
            }
        } catch (error) {
            console.log(error);
        }
    }
    const Save_info = () => {
        changeInfo();
    }
    return (
        <View style={styles.Container}>
            <TitleBar title={"Edit profile"} />
            <View style={styles.Form_edit}>
                <TextInput style={styles.Input_form} placeholder='Username' value={username} onChangeText={(value) => setusername(value)} />
                <TextInput style={styles.Input_form} placeholder='Email' value={email} onChangeText={(value) => setemail(value)} />
                <TextInput style={styles.Input_form} placeholder='Phone' value={phone} onChangeText={(value) => setphone(value)} />
                <TextInput style={styles.Input_form} placeholder='Password' value={password} secureTextEntry={true} onChangeText={(value) => setpassword(value)} />
            </View>
            <View style={styles.Save_Button_box}>
                <TouchableOpacity onPress={() => Save_info()} style={styles.Save_button}>
                    <Text style={styles.Save_Button_text}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#F6F9FF',
    },
    Input_form: {
        borderColor: '#33907C',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 20,
    },
    Form_edit: {
        padding: 15,
        marginTop: 30,
    },
    Save_button: {
        backgroundColor: '#33907C',
        width: '70%',
        alignItems: 'center',
        padding: 3,
        borderRadius: 50
    },
    Save_Button_box: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    Save_Button_text: {
        color: 'white',
        fontSize: 18
    },
})