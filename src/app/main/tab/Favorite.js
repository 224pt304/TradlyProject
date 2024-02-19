import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native"
import React, { useCallback, useContext, useState } from "react"
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import TitleBar from '../stack/TitleBar';
import { AppContext } from "../../../AppContext";
import AxiosInstance from "../../../helper/AxiosInstance";

const Favorite = () => {
    const {favrite, setfavrite, user} = useContext(AppContext);
    const navigation = useNavigation();
    const id = user.id;
    // const js = '[{ "id": 1, "name": "Bernadene", "price": 69, "sale": 25, "img": "http://dummyimage.com/106x100.png/dddddd/000000" }, { "id": 2, "name": "Tan", "price": 685, "sale": 44, "img": "http://dummyimage.com/124x100.png/5fa2dd/ffffff" }, { "id": 3, "name": "Gayleen", "price": 591, "sale": 96, "img": "http://dummyimage.com/213x100.png/ff4444/ffffff" }, { "id": 4, "name": "Rosabel", "price": 595, "sale": 35, "img": "http://dummyimage.com/213x100.png/ff4444/ffffff" }, { "id": 5, "name": "Malcolm", "price": 461, "sale": 25, "img": "http://dummyimage.com/241x100.png/cc0000/ffffff" }, { "id": 6, "name": "Micaela", "price": 472, "sale": 85, "img": "http://dummyimage.com/246x100.png/cc0000/ffffff" }, { "id": 7, "name": "Alberta", "price": 666, "sale": 38, "img": "http://dummyimage.com/138x100.png/dddddd/000000" }, { "id": 8, "name": "Tanitansy", "price": 580, "sale": 74, "img": "http://dummyimage.com/199x100.png/ff4444/ffffff" }, { "id": 9, "name": "Constantine", "price": 319, "sale": 5, "img": "http://dummyimage.com/240x100.png/ff4444/ffffff" }, { "id": 10, "name": "Koressa", "price": 963, "sale": 9, "img": "http://dummyimage.com/224x100.png/ff4444/ffffff" }]';
    const [data, setdata] = useState([]);

    const getFavorite = async () =>{
      console.log('on get Favorites');
      try {
        const result = await AxiosInstance()
          .get(`/users/`+id, null); 
        if (result !== null) {
         setdata(result.favorites);
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
        getFavorite();
      },[])
    )

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetail', { product: item })}>
                <Image
                    style={styles.img}
                    source={{ uri: item.image[0].img }} />
                <View style={styles.paddingView}>
                    <Text style={styles.name}>{item.nameProduct}</Text>

                    <View style={styles.containerPrice}>
                        <Text style={styles.textPrice}>${item.sale != 0 ? (item.price - (item.price * item.sale / 100)).toFixed(2) : item.price} </Text>
                        {item.sale &&
                            <View style={styles.flexRow}>
                                <Text style={[styles.textPricefirts,styles.smallText]}>${item.price} </Text>
                                <Text style={styles.smallText}>{item.sale}% off</Text>
                            </View>}
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        )
    };


    
    return (
        <View style={styles.fullscreen}>
        <TitleBar title={'Favorite'}/>
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id}
          data={data}
          renderItem={renderItem}
  
        />
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
    containerPrice: {
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      marginTop: 10, 
      flexDirection: 'row', 
      alignItems: 'baseline'
    },
    paddingView:{
      padding: 11,
    },
    fullscreen:{
      flex: 1,
    },  
    name: {
      color: "#4A4A4A",
      fontSize: 14
    },
    img: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      height: 127,
    },
    container: {
      width: "43%",
      height: 220,
      margin: 15,
      backgroundColor: "white",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
  })
  

export default Favorite