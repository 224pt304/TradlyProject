import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../../AppContext';
import AxiosInstance from '../../../helper/AxiosInstance';
const TitleBar = (props) => {
    const navigation = useNavigation();
    const {Browser, setBrowser} = useContext(AppContext);
    const [databrowser, setdatabrowser] = useState(Browser);
    const [search, setsearch] = useState("");
    const { title } = props;

    
    useEffect(() =>{
        setdatabrowser(Browser);
    },[Browser]);

    const getAllproduct =async ()=>{
        try {
            result = await AxiosInstance()
                    .get(`/products`, null);
            if(result !== null){
                setBrowser(result);
            }else{
                console.log("lỗi kết nối")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getBrowserproduct = async () =>{
        try {
            result = await AxiosInstance()
                    .get(`/products?nameProduct=${search}`, null);
            if(result !== null){
                setBrowser(result);
            }else{
                console.log("lỗi kết nối")
            }
        } catch (error) {
            console.log(error)
        }

    }

    const submit = () =>{
        if(title !== 'Browser'){
            navigation.navigate('Browser');
        }

        if(search.trim !== null){
            getBrowserproduct();
        }else{
            getAllproduct();
        }
    }

    return (
        <View style={[styles.container,{marginBottom: (title === 'Home' || title === 'Browser') ? 100 : 0}]}>
            <View style={styles.Header}>
                <Text style={styles.Title}>{title}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart',{listaddress:""})}>
                    <Image style={{ width: 30, height: 30 }} source={{ uri: "https://i.imgur.com/vaNk6IZ.png" }} />
                </TouchableOpacity>
            </View>

            {(title === 'Home' || title === 'Browser') &&
                <View style={[styles.Header, styles.centerView]}>
                    <TextInput
                        value={search}
                        onChangeText={(text) => setsearch(text)}
                        style={styles.textInput}
                        placeholder='Nhập tìm kiếm'
                        onSubmitEditing={()=>submit()} />

                    {title === 'Browser' &&
                        <View style={styles.viewSort}>
                            <TouchableOpacity style={styles.btnSort}>
                                <Image style={styles.iconSort} source={require('../../../../assets/images/sort.png')} />
                                <Text style={styles.textSort}>Sort by</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>}
        </View>
    )
}

export default TitleBar

const styles = StyleSheet.create({
    viewSort:{
        width: '100%',
        alignItems: 'flex-start',
    },
    textSort: {
        fontSize: 14,
        color: 'white',
    },
    btnSort: {
        height: 31,
        width: '32%',
        backgroundColor: '#33907C',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        paddingLeft: 10,
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    iconSort: {
        width: 16,
        height: 16
    },
    centerView: {
        justifyContent: 'center',
        flexDirection: 'column'
    },
    textInput: {
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 10,
    },
    container: {
        width: '100%',
        height: 100,
        flexDirection: 'column',
    },
    Header: {
        width: '100%',
        height: '100%',
        backgroundColor: '#33907C',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
    },
    Title: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 1,
    },
})