import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';

const ProductDetail = ({route}) => {
    const {product} = route.params;

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

    return (
        <View style={{ backgroundColor: 'white', width: '100%', height: ' 100%' }}>

            <View style={{ height: 230 }}>
                {/* task bar */}
                <View style={{ width: '100%', padding: 20, position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', zIndex: 3, }}>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 18, height: 15, }}
                            source={require('../assets/images/back.png')} />
                        <Image
                            style={{ width: 32, height: 32, position: 'absolute', left: 0, margin: -8 }}
                            source={require('../assets/images/Ellipse.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={{ width: 18, height: 15, }}
                            source={require('../assets/images/love.png')} />
                        <Image
                            style={{ width: 32, height: 32, position: 'absolute', right: 0, margin: -8 }}
                            source={require('../assets/images/Ellipse.png')} />
                    </TouchableOpacity>
                </View>



                <Swiper style={{
                    width: '100%',
                    height: 230
                }}
                    showsButtons={false} autoplay
                    showsPagination={true}
                    autoplayTimeout={5}
                    dotStyle={styles.paginationDot}
                    activeDotStyle={styles.activePaginationDot}>
                    {images.map((imag, index) => (
                        <View key={index}>
                            <Image
                                style={{ width: '100%', height: '100%', }}
                                source={{ uri: imag }} />
                        </View>
                    ))}
                </Swiper>
            </View>
            <ScrollView
            showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16 }}>
                    <Text style={[{ fontSize: 16, color: '#4F4F4F', }, styles.textBold]}>{nameProduct}</Text>
                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'baseline' }}>
                        <Text style={[{ fontSize: 18, color: '#33907C', }, styles.textBold]}>${sale != 0 ? (cost - (cost * sale / 100)).toFixed(2) : cost}</Text>
                        {sale &&
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ textDecorationLine: 'line-through', marginLeft: 14, fontSize: 14 }}>${cost} </Text>
                                <Text style={{ fontSize: 14 }}>{sale }% off</Text>
                            </View>}
                    </View>
                </View>

                <View style={{ margin: 25 }}>
                    <Text style={styles.text}>{describe}</Text>
                </View>

                <View style={{ margin: 30 }}>
                    <Text style={{ fontSize: 18, marginBottom: 15, color: 'black', fontWeight: '600', lineHeight: 20 }}>Details</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={[styles.text, { marginBottom: 10 }]}>Condition</Text>
                            <Text style={[styles.text, { marginBottom: 10 }]}>Price Type</Text>
                            <Text style={[styles.text, { marginBottom: 10 }]}>Category</Text>
                            <Text style={[styles.text, { marginBottom: 10 }]}>Location</Text>
                        </View>
                        <View>
                            <Text style={{ marginLeft: 32, marginBottom: 10 }}>{condition}</Text>
                            <Text style={{ marginLeft: 32, marginBottom: 10 }}>{priceType}</Text>
                            <Text style={{ marginLeft: 32, marginBottom: 10 }}>{category}</Text>
                            <Text style={{ marginLeft: 32, marginBottom: 10 }}>{location}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#33907C',
                            width: '90%',
                            height: 50,
                            borderRadius: 24,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>
                            Add to Cart
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
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