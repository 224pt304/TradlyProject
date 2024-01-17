import { StyleSheet, Text, View, TouchableOpacity, Pressable, StatusBar, Image, FlatList } from 'react-native'
import React, { useState } from 'react'


const Order_details = () => {

    const [list, setlistorder] = useState(DATA);
    const renderitemOrder = (item) => {
        return (
            <View style={myStyle.backgroundsp}>
                <View style={myStyle.sp}>
                    <View><Image style={myStyle.imgsp} source={require('../assets/images/img_cocacola.png')} /></View>
                    <View style={myStyle.viewsp}>
                        <Text style={myStyle.namesp}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                            <Text style={myStyle.price}>{item.price}$</Text>
                            <Text style={myStyle.sale}>{item.sale}% off</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={myStyle.textqly}>Qly:</Text>
                            <Text style={myStyle.numquanlity}>{item.quanlity}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={myStyle.container}>
            <StatusBar backgroundColor={'#33907C'}></StatusBar>
            <View style={myStyle.tarbar}>
                <Text style={myStyle.textAddress}>Order Details</Text>
                <Image
                    style={myStyle.x}
                    source={require('../assets/images/x.png')}
                />
            </View>
            <View>
                <Image
                    style={myStyle.successOrder}
                    source={require('../assets/images/successOrder.png')} />
                <Text style={myStyle.textOrder}>Thanks for Order</Text>
            </View>
            <FlatList
                // style={{backgroundColor:'red'}}
                data={list}
                renderItem={({ item }) => renderitemOrder(item)}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
            <View style={myStyle.delivery}>
                <Text style={[myStyle.textdelivery, { fontSize: 20 }]}>Delivery Address</Text>
                <View style={myStyle.viewAddress}>
                    <Text style={myStyle.tradly}>Tradly team</Text>
                    <Text style={[myStyle.text, { marginVertical: 10 }]}>Flat Number 512, Eden Garden, Rewari</Text>
                    <Text style={myStyle.text}>
                        <Text>Mobile</Text>{' :  '}
                        <Text>9876543210</Text>
                    </Text>
                </View>
            </View>
            <View>
                <Pressable style={myStyle.pressable}>
                    <Text style={myStyle.textpressable}>Back to Home</Text>
                </Pressable>
            </View>








        </View>
    )
}

export default Order_details

const myStyle = StyleSheet.create({
    textpressable: {
        color: '#212121',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        padding: 15
    },
    pressable: {
        height: 70,
        alignItems: 'center',
        justifyContent: "center",
    },
    tradly: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
        color: '#212121'
    },
    text: {
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '500',
        color: '#606A7B'
    },
    viewAddress: {
        paddingHorizontal: 15
    },
    textdelivery: {
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: 'black',
        borderBottomWidth: 0.5,
        borderColor: '#7d7d7d',
        alignItems: 'center',
        padding: 15,
        width: '100%',
    },
    delivery: {
        backgroundColor: 'white',
        height: 158,


    },
    textqly: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold',
        marginRight: 10
    },
    numquanlity: {
        fontSize: 17,
        color: '#4F4F4F',
        marginHorizontal: 10
    },
    sale: {
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#4F4F4F',
        marginLeft: 14

    },
    price: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#33907C'
    },
    namesp: {
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    sp: {
        flexDirection: 'row',

    },
    backgroundsp: {
        backgroundColor: 'white',
        marginTop: 10,
        elevation: 5,
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 15,
        marginBottom: 10
    },
    viewsp: {
        marginLeft: 20
    },
    imgsp: {
        height: 120,
        width: 120,
        borderRadius: 15
    },
    textOrder: {
        color: '#4F4F4F',
        fontSize: 24,
        fontWeight: '700',
        fontStyle: 'normal',
        alignSelf: 'center'
    },
    successOrder: {
        alignSelf: 'center',
        marginVertical: 20
    },
    textAddress: {
        fontSize: 24,
        color: 'white',
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    x: {
        height: 15,
        width: 15,
        resizeMode: 'contain'

    },
    tarbar: {
        backgroundColor: '#33907C',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#F6F9FF'
    }
})
var DATA = [
    {
      "id": 1,
      "name": "Madelaine",
      "price": 100,
      "sale": 40,
      "quanlity": 5,
      "img": "Female"
    }, {
      "id": 2,
      "name": "Lynde",
      "price": 20,
      "sale": "10",
      "quanlity": 3,
      "img": "Female"
    }, {
      "id": 3,
      "name": "Leanor",
      "price": 10,
      "sale": "8",
      "quanlity": 1,
      "img": "Female"
    }, {
      "id": 4,
      "name": "Grant",
      "price": 28,
      "sale": "11",
      "quanlity": 2,
      "img": "Male"
    }, {
      "id": 5,
      "name": "Kellby",
      "price": 38,
      "sale": "4",
      "quanlity": 1,
      "img": "Male"
    }, {
        "id": 6,
        "name": "Kellby",
        "price": 38,
        "sale": "4",
        "quanlity": 1,
        "img": "Male"
      }]