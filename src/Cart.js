import { Image, StyleSheet, Text, View, Pressable, FlatList, StatusBar, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Cart = () => {

  const navigation = useNavigation();
  const [list, setlistsp] = useState(DATA);
  const countprice = DATA.reduce((tong, data) => tong + data.price, 0);


  function updateQuantity(productId, action) {
    // Tìm sản phẩm trong mảng DATA dựa trên productId
    const product = DATA.find(item => item.id === productId);

    if (product) {
      // Cập nhật số lượng dựa vào hành động (tăng hoặc giảm)
      if (action === 'increase') {

        setlistsp(
          list.map((item) => (item.id === productId ? { ...item, quanlity: product.quanlity += 1 } : item))
        );
      } else if (action === 'decrease' && product.quanlity > 1) {
        product.quanlity -= 1;
        setlistsp(
          list.map((item) => (item.id === productId ? { ...item, quanlity: product.quanlity } : item))
        );
      }

      // Gọi hàm cập nhật giao diện hoặc làm các công việc khác cần thiết ở đây
    }
  }





  const renderItem = (item) => {
    console.log(item.quanlity);
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
              <Pressable onPress={() => {
                updateQuantity(item.id, 'decrease')
              }}>
                <Image
                  style={myStyle.leftquanlity}
                  source={require('../assets/images/left-arrow.png')} />
              </Pressable>
              <Text style={myStyle.numquanlity}>{item.quanlity}</Text>
              <Pressable onPress={() => {
                updateQuantity(item.id, 'increase')
              }}>
                <Image
                  style={myStyle.leftquanlity}
                  source={require('../assets/images/right-arrow.png')} />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{ borderWidth: 0.2, borderColor: '#4F4F4F', marginTop: 15 }}></View>
        <Pressable style={myStyle.btnremove}>
          <Text style={myStyle.textremove}>Remove</Text>
        </Pressable>
      </View>
    )
  }



  return (
    <View style={myStyle.container}>
      <StatusBar backgroundColor={'#33907C'}></StatusBar>
      <View style={myStyle.tarbar}>
        <Image
          style={myStyle.back}
          source={require('../assets/images/back.png')}
        />
        <Text style={myStyle.textCart}>My Cart</Text>
        <Image style={myStyle.back} />
      </View>
      <View style={myStyle.btnadd}>
        <Text style={myStyle.textadd}
          onPress={
            () => navigation.navigate("Add_address")
          }>+ Add New Address</Text>
      </View>
      <FlatList
        style={{ marginBottom: 10 }}
        data={list}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <View style={myStyle.detalts}>
        <Text style={[myStyle.textdetalt, { fontSize: 18 }]}>Price Detailt</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
          <Text style={[myStyle.textdetalt, { fontSize: 15 }]}>Price({DATA.length} item)</Text>
          <Text style={[myStyle.textdetalt, { fontSize: 15 }]}>{countprice}$</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={[myStyle.textdetalt, { fontSize: 15 }]}>Delivery Fee</Text>
          <Text style={[myStyle.textdetalt, { fontSize: 15 }]}>info</Text>
        </View>
        <View style={{ borderWidth: 0.2, borderColor: '#4F4F4F', marginTop: 15 }}></View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={[myStyle.textdetalt, { fontSize: 18 }]}>Delivery Fee</Text>
          <Text style={[myStyle.textdetalt, { fontSize: 18 }]}>{countprice}$</Text>
        </View>
        <TouchableOpacity style={myStyle.touchableOpacity}>
          <Text style={myStyle.textPayment}
          onPress={
            () => navigation.navigate("Order_details")
          }
          >Coninue to Payment</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Cart

const myStyle = StyleSheet.create({
  textPayment: {
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
    marginVertical: 20
  },
  textdetalt: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: 'black',
    fontfamily: 'Montserrat'
  },
  detalts: {
    backgroundColor: 'white',
    height: 240,
    padding: 20
  },
  textremove: {
    color: '#4F4F4F',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500'

  },
  btnremove: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    marginTop: 10
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
  rightquanlity: {
    width: 33,
    height: 20
  },
  leftquanlity: {
    width: 15,
    height: 15,
    resizeMode: 'cover'
  },
  sp: {
    flexDirection: 'row',

  },
  backgroundsp: {
    backgroundColor: 'white',
    marginTop: 10,
    elevation: 7,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10
  },
  viewsp: {
    marginLeft: 20
  },
  imgsp: {
    height: 120,
    width: 120,
    borderRadius: 15
  },

  btnadd: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 7,
    marginBottom: 10

  },
  textadd: {
    color: '#4F4F4F',
    fontSize: 18,
    fontStyle: 'normal',
    fontFamily: 'Montserrat'
  },
  textCart: {
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
  }]