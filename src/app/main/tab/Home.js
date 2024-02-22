import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import TitleBar from '../stack/TitleBar';
import Swiper from 'react-native-swiper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AxiosInstance from '../../../helper/AxiosInstance';
import { AppContext } from '../../../AppContext';
import SlideShow from '../../authen/SlideShow';
const Home = () => {
  const [image, setimage] = useState(JSON.parse(imagejs));
  const [catalog, setcatalog] = useState(JSON.parse(catalogjs));
  const [product, setproduct] = useState([]);
  const {setBrowser} = useContext(AppContext);
  const navigation = useNavigation();

  const getProducts = async () =>{
    console.log('on get Products');
    try {
      const result = await AxiosInstance()
        .get(`products`, null); 
      if (result !== null) {
       setproduct(result);
       setBrowser(result);
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
      <TouchableOpacity key={item.id} onPress={()=> navigation.navigate("Browser",{text: item.name})}>
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
          onPress={() => navigation.navigate('ProductDetail', { product: item,where: 'Home' })}>
          <Image
            style={styles.img}
            source={{ uri: item.image[0].img }} />
            
          <View style={styles.containerDetail}>
            <Text style={styles.name} numberOfLines={1}>{item.nameProduct}</Text>

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
          <SlideShow data={image}/>
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
    marginTop: 10,
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
    height: 230,
    margin: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default Home


var imagejs = '["https://file.hstatic.net/200000722513/file/mua_pc_tang_ram_998e059c1c4545768a059696a099d724.jpg","https://file.hstatic.net/200000722513/file/pc_tet_-_slider_45be4c3cc88d4da2a6eb06459ba271c2.jpg","https://file.hstatic.net/200000722513/file/gearvn-laptop-gaming-slider_4419ba0801564e6e8a7540c8dbdc8c41.jpg","https://file.hstatic.net/200000722513/file/banner_gearvn_-_slider_a8894c9824534ce0811280a8c684e861.jpg"]';


var catalogjs = '[{ "id": 1, "name": "CPU", "img": "https://product.hstatic.net/200000722513/product/n22360_png_36691178908b435494f526d804c4b249_grande.png" }, { "id": 2, "name": "Main Intel", "img": "https://product.hstatic.net/200000722513/product/5_8fcec763d4204707990d69ec0d8d3f4c_3bedf3f6dd8046769ea2bd41e86b2de9.jpg" }, { "id": 3, "name": "Main AMD", "img": "https://product.hstatic.net/200000722513/product/gearvn-bo-mach-chu-gigabyte-z790-aorus-elite-x-wifi7-ddr5-1_d92aafa53a774347bb6c187e512fc6c7.png" }, { "id": 4, "name": "VGA", "img": "https://product.hstatic.net/200000722513/product/h732__21__c5f8bf827e534df89012c1fef3b7b9ee.png" }, { "id": 5, "name": "CASE", "img": "https://product.hstatic.net/200000722513/product/z-tower_gallery_01_80336ac900f34cd8b0fb7aa1ce5f1a64_fb389a69bbfb4684a6fc3cde9e0fbd85.jpg" }, { "id": 6, "name": "Nguồn", "img": "https://product.hstatic.net/200000722513/product/h732_d28f32102b2c4fb6ab2a5bfa31f95b41_30899e2f85eb4ecca967eee77a147ccc.png" }, { "id": 7, "name": "Phụ Kiện PC", "img": "https://product.hstatic.net/200000722513/product/rog-xh01-herculx-graphics-card-holder_451e28b7337444b7944471355dda9bb3_cd8022c35ea14f149ede46d4d973214b.jpg" }, { "id": 8, "name": "SSD", "img": "https://product.hstatic.net/200000722513/product/om-products-ssd-samsung-860-qvo-4tb_3_d420e6ef97f046398599c649863a8e19_51fb14d9ddae4f2fae0e1727dd8cee98.jpg" }, { "id": 9, "name": "Tản Nhiệt", "img": "https://product.hstatic.net/200000722513/product/icue_link_qx120_rgb_white_triple_artboard01_aa_b94fb52b889d4542a10a563bdefa30b1.png" }, { "id": 10, "name": "Ram", "img": "https://product.hstatic.net/200000722513/product/gearvn-ram-t-group-t-force-delta-1x16gb-3600-rgb-white-2_f2b442f7a66148538ce8a09aff32f201.png" }]';
