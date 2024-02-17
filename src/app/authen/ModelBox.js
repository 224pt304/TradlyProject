import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../Data/AppContext'
import { useNavigation } from '@react-navigation/native';

const ModelBox = (props) => {
    const { postioncart, positionsize } = props;
    const navigation = useNavigation()
    const { setmodal, listcart, setlistcart } = useContext(AppContext)

    const deletecart = (indexcart, indexsize) => {
        if (listcart[postioncart - 1].productsize.length === 1) {
            const newcart = listcart.filter((cart) => cart.id !== indexcart)
            setlistcart(newcart);
            setmodal(false)
        } else {
            deleproductsize(indexsize);
            setmodal(false)
            console.log(indexsize)
        }
    }

    const deleproductsize = (indexsize) => {
        const undateproductsize = listcart.map(item => {
            const productsize = item.productsize.filter((size) => size.id !== indexsize)
            return { ...item, productsize: productsize }
        })
        setlistcart(undateproductsize)
    }

    return (
        <View style={myStyle.container}>
            <View style={myStyle.warning}>
                <View style={myStyle.viewwarning}>
                    <Image style={myStyle.img} source={require('../../assets/img/warning.png')} />
                    <Text style={myStyle.textwarning}>Cảnh báo</Text>
                </View>
                <Text style={myStyle.text}>Bạn có muốn xóa không ?</Text>
                <View style={myStyle.viewbtn}>
                    <Pressable style={myStyle.btnexit}
                        onPress={() => {
                            setmodal(false)
                        }}
                    >
                        <Text style={myStyle.textcancel}>Hủy</Text>
                    </Pressable>
                    <Pressable style={myStyle.btndelete}
                        onPress={() => {
                            deletecart(postioncart, positionsize);
                        }}
                    >
                        <Text style={myStyle.textcancel}>Xóa</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default ModelBox

const myStyle = StyleSheet.create({
    btndelete: {
        backgroundColor: 'red',
        borderRadius: 10
    },
    viewbtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    textcancel: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 50,
        marginVertical: 10,

    },
    btnexit: {
        backgroundColor: '#0062ff',
        borderRadius: 10
    },
    text: {
        fontSize: 16,
        color: 'black',
        marginVertical: 10,
        marginLeft: 20
    },
    textwarning: {
        color: 'black',
        marginLeft: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    viewwarning: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    warning: {
        backgroundColor: '#ebebeb',
        padding: 20,
        borderRadius: 20
    },
    img: {
        height: 40,
        width: 40,
        marginLeft: 20
    },
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'

    }
})