import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import TitleBar from './TitleBar';
import { useNavigation } from '@react-navigation/native';

const ProductDetail = ({ route }) => {
    const navigation = useNavigation();
    const { product } = route.params;
    const images = [
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/168111/Originals/hinh%20nen%20may%20tinh%20dep%20(13)(1).jpg',
        'https://i.pinimg.com/originals/60/61/b2/6061b23e28ce01e869244655d735c3c2.jpg',
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/168111/Originals/hinh%20nen%20may%20tinh%20dep%20(13)(1).jpg',
        'https://i.pinimg.com/originals/60/61/b2/6061b23e28ce01e869244655d735c3c2.jpg',
    ];

    const nameProduct = product.name;
    const cost = product.price;
    const sale = product.sale;
    const describe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis cras placerat diam ipsum ut. Nisi vel adipiscing massa bibendum diam. Suspendisse mattis dui maecenas duis mattis. Mattis aliquam at arcu, semper nunc, venenatis et pellentesque eu. Id tristique maecenas tristique habitasse eu elementum sed. Aliquam eget lacus, arcu, adipiscing eget feugiat in dolor sagittis Non commodo, a justo massa porttitor sed placerat in. Orci tristique etiam tempus sed. Mi varius morbi egestas dictum tempor nisl. In ";
    const condition = 'Organic';
    const priceType = 'Fixed'
    const category = 'Beverages';
    const location = 'Kualalumpur, Malysia';


    const renderItem = () =>{
        return images.map((imag, index) => (
            <View key={index}>
                <Image
                    style={{ width: '100%', height: '100%', }}
                    source={{ uri: imag }} />
            </View>
        ))
    }

    return (
        <View style={styles.fullScreen}>
            <View style={styles.heightTopBar}>
                {/* task bar */}
                <View style={ styles.containerTopBar}>
                    <TouchableOpacity 
                    onPress={()=> navigation.goBack()}>
                        <Image
                            style={[styles.iconTopBar,styles.left]}
                            source={require('../assets/images/back.png')} />
                        <Image
                            style={[styles.iconElcipTopBar,styles.left]}
                            source={require('../assets/images/Ellipse.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={[styles.iconTopBar,styles.right] }
                            source={require('../assets/images/love.png')} />
                        <Image
                            style={[styles.iconElcipTopBar,styles.right]}
                            source={require('../assets/images/Ellipse.png')} />
                    </TouchableOpacity>
                </View>



                <Swiper 
                    showsButtons={false} autoplay
                    showsPagination={true}
                    autoplayTimeout={3}
                    dotStyle={styles.paginationDot}
                    activeDotStyle={styles.activePaginationDot}>
                    {renderItem()}
                </Swiper>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16 }}>
                    <Text style={[styles.textname, styles.textBold]}>{nameProduct}</Text>
                    <View style={styles.viewprice}>
                        <Text style={[styles.textprice, styles.textBold]}>${sale != 0 ? (cost - (cost * sale / 100)).toFixed(2) : cost}</Text>
                        {sale &&
                            <View style={styles.flexRow}>
                                <Text style={[styles.smallText,styles.textFirstPrice]}>${cost} </Text>
                                <Text style={styles.smallText}>{sale}% off</Text>
                            </View>}
                    </View>
                </View>

                <View style={styles.marginViewTextDescripe}>
                    <Text style={[styles.text,styles.smallText]}>{describe}</Text>
                </View>

                <View style={styles.marginViewTextDescripe}>
                    <Text style={styles.textDetail}>Details</Text>
                    <View style={styles.flexRow}>
                        <View>
                            <Text style={styles.textDetail2 }>Condition</Text>
                            <Text style={styles.textDetail2}>Price Type</Text>
                            <Text style={styles.textDetail2}>Category</Text>
                            <Text style={styles.textDetail2}>Location</Text>
                        </View>
                        <View>
                            <Text style={[styles.textDetail2, styles.textDetail2Right]}>{condition}</Text>
                            <Text style={[styles.textDetail2, styles.textDetail2Right]}>{priceType}</Text>
                            <Text style={[styles.textDetail2, styles.textDetail2Right]}>{category}</Text>
                            <Text style={[styles.textDetail2, styles.textDetail2Right]}>{location}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.button}>
                        <Text
                            style={styles.textButton}>
                            Add to Cart
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    textButton:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    button:{
        backgroundColor: '#33907C',
        width: '90%',
        height: 50,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallText:{
        fontSize: 14 
    },
    textFirstPrice:{
        textDecorationLine: 'line-through',
         marginLeft: 14, 
    },
    flexRow:{
        flexDirection: 'row'
    },
    textprice:{
        fontSize: 18, 
        color: '#33907C'
    },
    viewprice:{
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    textname:{
        fontSize: 16, 
        color: '#4F4F4F',
    },
    right:{
        right: 0,
    },
    left:{
        left: 0, 
    },
    iconElcipTopBar:{
        width: 32, 
        height: 32, 
        position: 'absolute', 
        margin: -8 
    },
    iconTopBar:{
        width: 18,
        height: 15, 
    },
    containerTopBar:{
        width: '100%',
        padding: 20, 
        position: 'absolute', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        zIndex: 3,
    },
    heightTopBar:{
        height: 230,
    },  
    fullScreen:{
        backgroundColor: 'white', 
        flex: 1
    },
    marginViewTextDescripe:{
        margin: 25 ,
    },
    textDetail2:{
        lineHeight: 20,
        color: '#4F4F4F',
        fontSize: 14,
        marginBottom: 10,
    },
    textDetail2Right:{
        marginLeft: 32
    },
    textDetail:{
        fontSize: 18, 
        marginBottom: 15, 
        color: 'black', 
        fontWeight: '600', 
        lineHeight: 20 
    },
    text: {
        lineHeight: 20,
        color: '#4F4F4F',
    },
    textBold: {
        fontWeight: 'bold',
    },
    activePaginationDot: {
        backgroundColor: '#33907C',
        width: 8,
        height: 8,
    },
    paginationDot: {
        backgroundColor: '#FFFFFF',
        opacity: 0.5,
        width: 6,
        height: 6,
    },
});

export default ProductDetail