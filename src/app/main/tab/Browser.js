import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native"
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import TitleBar from "../stack/TitleBar";
import AxiosInstance from "../../../helper/AxiosInstance";
import { AppContext } from "../../../AppContext";

const Browser = () => {
  const navigation = useNavigation();
  const {Browser} = useContext(AppContext);
  const [data, setproduct] = useState(Browser);

  useFocusEffect(
    useCallback(()=>{
      setproduct(Browser);
    },[])
  )

  useEffect(()=>{
    setproduct(Browser);
  },[Browser]);

  const renderItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetail', { product: item })}>
                <Image
                    style={styles.img}
                    source={{ uri: item.image[0].img}} />
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
      <TitleBar title={'Browser'}/>
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
    height: 230,
    margin: 15,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
})

export default Browser