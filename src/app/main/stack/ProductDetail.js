import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useCallback, useState } from 'react'
import Swiper from 'react-native-swiper';
import TitleBar from './TitleBar';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AxiosInstance from '../../../helper/AxiosInstance';

const ProductDetail = ({ route }) => {
    const navigation = useNavigation();
    const { product } = route.params;

    const images = product.image;
    const nameProduct = product.nameProduct;
    const cost = product.price;
    const sale = product.sale;
    const describe = product.describe;
    const condition = product.condition;
    const priceType = product.pricetype;
    const category = product.category;
    const location = product.location;

    const [users, setusers] = useState([]);


    function generateRandomId(prefix, length) {
        var randomId = prefix + '_';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            randomId += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return randomId;
    }

    function datas(){
        return {
            id: generateRandomId('id', 6),
            idproduct: product.id,
            nameProduct: product.nameProduct,
            price: product.price,
            image: product.image,
            quantity: product.quantity,
            evaluate: product.evaluate,
            sale: product.sale,
            describe: product.describe,
            condition: product.condition,
            pricetype: product.pricetype,
            category: product.category,
            location: product.location,
        };
    }

    const addfavorite = async () => {
        const data = datas();
        try {
            let datafavorite = users.favorites;
            console.log(datafavorite);

            if (datafavorite.length == 0 || !datafavorite.some(pr => pr.idproduct === product.id)) {
                datafavorite = [...datafavorite, { ...data }];
                Alert.alert("Đã thêm yêu thích");
            } else {
                datafavorite = datafavorite.filter(pr => pr.idproduct !== product.id);
                Alert.alert("Đã gỡ yêu thích");
            }


            setusers({ ...users, favorites: datafavorite });
            const result = await AxiosInstance()
                .put(`/users/1`, { ...users, favorites: datafavorite });

        } catch (error) {
            console.log(error)
        }

    }

    const getUser = async () => {
        console.log('on get Favorites');
        try {
            const result = await AxiosInstance()
                .get(`/users/1`, null);
            if (result !== null) {
                setusers(result);
            }
            else {
                console.log("lỗi kết nối")
            }
        } catch (error) {
            console.log(error);
        }
    }

    useFocusEffect(
        useCallback(() => {
            getUser();
        }, [])
    )

    const addtoCart = async () =>{
        let data = datas();
        data = {...data, count: 1}

        try {
            let datacart = users.carts;
            if (datacart === null || !datacart.some(pr => pr.idproduct === product.id)) {
                datacart = [...datacart, { ...data }];
            } else {
                datacart = datacart.map(pr => {
                    if(pr.idproduct === product.id){
                        pr.count++;
                    }
                    return pr;
                });
            }
            console.log(datacart);
            await getUser();
            Alert.alert("Đã thêm giỏ hàng thành công");

            setusers({ ...users, carts: datacart });
            const result = await AxiosInstance()
                .put(`/users/1`, { ...users, carts: datacart });

        } catch (error) {
            console.log(error)
        }
    }

    const renderItem = () => {

        return images.map((imag, index) => (
            <View key={index}>
                <Image
                    style={{ width: '100%', height: '100%', }}
                    source={{ uri: imag.img }} />
            </View>
        ))
    }

    return (
        <View style={styles.fullScreen}>
            <View style={styles.heightTopBar}>
                {/* task bar */}
                <View style={styles.containerTopBar}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image
                            style={[styles.iconTopBar, styles.left]}
                            source={require('../../../../assets/images/back.png')} />
                        <Image
                            style={[styles.iconElcipTopBar, styles.left]}
                            source={require('../../../../assets/images/Ellipse.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => addfavorite()}>
                        <Image
                            style={[styles.iconTopBar, styles.right]}
                            source={require('../../../../assets/images/love.png')} />
                        <Image
                            style={[styles.iconElcipTopBar, styles.right]}
                            source={require('../../../../assets/images/Ellipse.png')} />
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
                                <Text style={[styles.smallText, styles.textFirstPrice]}>${cost} </Text>
                                <Text style={styles.smallText}>{sale}% off</Text>
                            </View>}
                    </View>
                </View>

                <View style={styles.marginViewTextDescripe}>
                    <Text style={[styles.text, styles.smallText]}>{describe}</Text>
                </View>

                <View style={styles.marginViewTextDescripe}>
                    <Text style={styles.textDetail}>Details</Text>
                    <View style={styles.flexRow}>
                        <View>
                            <Text style={styles.textDetail2}>Condition</Text>
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
                    onPress={()=>addtoCart()}
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
    textButton: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#33907C',
        width: '90%',
        height: 50,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallText: {
        fontSize: 14
    },
    textFirstPrice: {
        textDecorationLine: 'line-through',
        marginLeft: 14,
    },
    flexRow: {
        flexDirection: 'row'
    },
    textprice: {
        fontSize: 18,
        color: '#33907C'
    },
    viewprice: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    textname: {
        fontSize: 16,
        color: '#4F4F4F',
    },
    right: {
        right: 0,
    },
    left: {
        left: 0,
    },
    iconElcipTopBar: {
        width: 32,
        height: 32,
        position: 'absolute',
        margin: -8
    },
    iconTopBar: {
        width: 18,
        height: 15,
        zIndex: 10
    },
    containerTopBar: {
        width: '100%',
        padding: 20,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 3,
    },
    heightTopBar: {
        height: 230,
    },
    fullScreen: {
        backgroundColor: 'white',
        flex: 1
    },
    marginViewTextDescripe: {
        margin: 25,
    },
    textDetail2: {
        lineHeight: 20,
        color: '#4F4F4F',
        fontSize: 14,
        marginBottom: 10,
    },
    textDetail2Right: {
        marginLeft: 32
    },
    textDetail: {
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