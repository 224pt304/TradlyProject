import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import TitleBar from '../stack/TitleBar';
import Swiper from 'react-native-swiper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AxiosInstance from '../../../helper/AxiosInstance';
const Home = () => {
  const [image, setimage] = useState(JSON.parse(imagejs));
  const [catalog, setcatalog] = useState(JSON.parse(catalogjs));
  const [product, setproduct] = useState([]);

  const navigation = useNavigation();

  const getProducts = async () =>{
    console.log('on get Products');
    try {
      const result = await AxiosInstance()
        .get(`/products`, null); 
      if (result !== null) {
       setproduct(result);
      }
      else {
        console.log("lỗi kết nối")
      }
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(()=>{
      getProducts();
    },[])
  )


  const renderItemCatalog = (({ item }) => {
    return (
      <TouchableOpacity key={item.id}>
        <View style={styles.containerrenderCata}>
          <Image style={styles.imgCata} source={{ uri: item.img }} />
          <Text style={styles.textCata}>{item.name}</Text>
          <View  style={[styles.imgCata, styles.backgroundCata]}></View>
        </View>
      </TouchableOpacity>
    );
  })

  const renderItem = ({ item }) => {
    return (
      <View style={styles.containerrender}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetail', { product: item })}>
          <Image
            style={styles.img}
            source={{ uri: item.image[0].img }} />
            
          <View style={styles.containerDetail}>
            <Text style={styles.name}>{item.nameProduct}</Text>

            <View style={styles.containerprice}>
              <Text style={styles.textPrice}>${item.sale != 0 ? (item.price - (item.price * item.sale / 100)).toFixed(2) : item.price} </Text>
              {item.sale &&
                <View style={styles.flexRow}>
                  <Text style={[styles.textPricefirts, styles.smallText]}>${item.price} </Text>
                  <Text style={styles.smallText}>{item.sale}% off</Text>
                </View>}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  };


  return (
    <View style={styles.fullScreen}>
      <TitleBar title={'Home'} />
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={styles.viewSwiper}>
          <Swiper
            showsPagination={true}
            autoplay
            autoplayTimeout={3}
            style={{ width: '100%', height: 165 }}>
            {
              image.map((imag, index) => (
                <View key={index}>
                  <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={{ uri: imag.img }} />
                </View>
              ))
            }
          </Swiper>
        </View>

        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal>
            <FlatList
              numColumns={catalog.length / 2}
              data={catalog}
              keyExtractor={item => item.id}
              renderItem={renderItemCatalog}
            />
          </ScrollView>
        </View>
        <View style={styles.container}>
          <Text style={styles.boldText}>New product</Text>
          <FlatList
            horizontal
            data={product}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />

          <Text style={styles.boldText}>Popular product</Text>
          <FlatList
            horizontal
            data={product}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        </View> 
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  smallText:{
    fontSize: 14
  },
  textPricefirts:{
    textDecorationLine: 'line-through',
  },
  flexRow:{
    flexDirection: 'row'
  },
  textPrice:{
    fontSize: 18, 
    color: '#33907C', 
    fontWeight: 'bold',
  },
  containerprice:{
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginTop: 10,
     alignItems: 'baseline'
  },
  containerDetail: {
    height: 60 , 
    padding: 11 
  },
  backgroundCata:{
    position: 'absolute', 
    backgroundColor: 'black', 
    opacity: 0.5,
    zIndex: 2
  },
  textCata:{
     position: 'absolute', 
     zIndex: 3, 
     color: 'white' 
  },
  imgCata:{
    width: 93, 
    height: 93
  },
  containerrenderCata:{
    alignItems: 'center', 
    justifyContent: 'center'
  },
  viewSwiper:{
    height: 165
  },
  fullScreen: {
    flex: 1,
    backgroundColor: '#F6F9FF', 
  },
  container: {
    padding: 20,
  },
  boldText:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  image: {
    backgroundColor: 'white',
    width: 302,
    height: 165,
    alignSelf: 'center',
    borderRadius: 10
  },
  name: {
    color: "#4A4A4A",
    fontSize: 14
  },
  img: {
    width: '100%',
    height: 127,
    borderRadius: 10
  },
  containerrender: {
    width: 160,
    height: 220,
    margin: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default Home


var imagejs = '[{ "id": 1, "img": "http://dummyimage.com/219x100.png/ff4444/ffffff" }, { "id": 2, "img": "http://dummyimage.com/238x100.png/5fa2dd/ffffff" }, { "id": 3, "img": "http://dummyimage.com/217x100.png/5fa2dd/ffffff" }, { "id": 4, "img": "http://dummyimage.com/167x100.png/ff4444/ffffff" }, { "id": 5, "img": "http://dummyimage.com/245x100.png/cc0000/ffffff" }, { "id": 6, "img": "http://dummyimage.com/177x100.png/cc0000/ffffff" }, { "id": 7, "img": "http://dummyimage.com/134x100.png/5fa2dd/ffffff" }, { "id": 8, "img": "http://dummyimage.com/235x100.png/ff4444/ffffff" }, { "id": 9, "img": "http://dummyimage.com/144x100.png/dddddd/000000" }, { "id": 10, "img": "http://dummyimage.com/250x100.png/5fa2dd/ffffff" }]';


var catalogjs = '[{ "id": 1, "name": "Dulcea", "img": "http://dummyimage.com/249x100.png/dddddd/000000" }, { "id": 2, "name": "Ransell", "img": "http://dummyimage.com/216x100.png/dddddd/000000" }, { "id": 3, "name": "April", "img": "http://dummyimage.com/234x100.png/dddddd/000000" }, { "id": 4, "name": "Bear", "img": "http://dummyimage.com/213x100.png/cc0000/ffffff" }, { "id": 5, "name": "Harwilll", "img": "http://dummyimage.com/248x100.png/5fa2dd/ffffff" }, { "id": 6, "name": "Ali", "img": "http://dummyimage.com/147x100.png/dddddd/000000" }, { "id": 7, "name": "Fania", "img": "http://dummyimage.com/161x100.png/cc0000/ffffff" }, { "id": 8, "name": "Velma", "img": "http://dummyimage.com/152x100.png/dddddd/000000" }, { "id": 9, "name": "Reilly", "img": "http://dummyimage.com/195x100.png/5fa2dd/ffffff" }, { "id": 10, "name": "Terry", "img": "http://dummyimage.com/227x100.png/5fa2dd/ffffff" }]';
var productjs = '[{ "id": 1, "name": "Bernadene", "price": 69, "sale": 25, "img": "http://dummyimage.com/106x100.png/dddddd/000000" }, { "id": 2, "name": "Tan", "price": 685, "sale": 44, "img": "http://dummyimage.com/124x100.png/5fa2dd/ffffff" }, { "id": 3, "name": "Gayleen", "price": 591, "sale": 96, "img": "http://dummyimage.com/213x100.png/ff4444/ffffff" }, { "id": 4, "name": "Rosabel", "price": 595, "sale": 35, "img": "http://dummyimage.com/213x100.png/ff4444/ffffff" }, { "id": 5, "name": "Malcolm", "price": 461, "sale": 25, "img": "http://dummyimage.com/241x100.png/cc0000/ffffff" }, { "id": 6, "name": "Micaela", "price": 472, "sale": 85, "img": "http://dummyimage.com/246x100.png/cc0000/ffffff" }, { "id": 7, "name": "Alberta", "price": 666, "sale": 38, "img": "http://dummyimage.com/138x100.png/dddddd/000000" }, { "id": 8, "name": "Tanitansy", "price": 580, "sale": 74, "img": "http://dummyimage.com/199x100.png/ff4444/ffffff" }, { "id": 9, "name": "Constantine", "price": 319, "sale": 5, "img": "http://dummyimage.com/240x100.png/ff4444/ffffff" }, { "id": 10, "name": "Koressa", "price": 963, "sale": 9, "img": "http://dummyimage.com/224x100.png/ff4444/ffffff" }]';
