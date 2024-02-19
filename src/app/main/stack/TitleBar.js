import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { AppContext } from '../../../AppContext';
import AxiosInstance from '../../../helper/AxiosInstance';
const TitleBar = (props) => {
    const navigation = useNavigation();
    const route = useRoute();
    const { Browser, setBrowser } = useContext(AppContext);
    const [databrowser, setdatabrowser] = useState([]);
    const [search, setsearch] = useState("");
    const { title } = props;

    useFocusEffect(
        useCallback(() => {
            try {
                const { text } = route.params;
                if (text !== undefined) {
                    setsearch(text);
                    getBrowserproduct(text);
                }
            } catch (error) {
                
            }
            
        }, [route.params])
    );


    useEffect(() => {
        setdatabrowser(Browser);
    }, [Browser]);

    const getAllproduct = async () => {
        try {
            result = await AxiosInstance()
                .get(`products`, null);
            if (result !== null) {
                setBrowser(result);
            } else {
                console.log("lỗi kết nối")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getBrowserproduct = async (data) => {
        console.log("on find product")
        try {
            result = await AxiosInstance()
                .get(`products?nameProduct=${data}`, null);
            if (result.length !== 0) {
                setBrowser(result);
                console.log(result)
            } else {
                getBrowsercatalog(data);
            }
        } catch (error) {
            console.log(error)
        }

    }

    const getBrowsercatalog = async (data) => {
        console.log("on find catalog")
        try {
            result = await AxiosInstance()
                .get(`products?category=${data}`, null);
            if (result !== null) {
                setBrowser(result);
            } else {
                console.log("lỗi kết nối")
            }
        } catch (error) {
            console.log(error)
        }

    }

    const submit = () => {
        if (title !== 'Browser') {
            navigation.navigate('Browser', { text: search });
        }
        else{
            if (search.trim !== null) {
                getBrowserproduct(search);
            } else {
                getAllproduct();
            }
        }
    }

    return (
        <View style={[styles.container, { marginBottom: (title === 'Home' || title === 'Browser') ? 100 : 0 }]}>
            <View style={styles.Header}>
                <Text style={styles.Title}>{title}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart', { listaddress: "" })}>
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
                        onSubmitEditing={() => submit()} />

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
    viewSort: {
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