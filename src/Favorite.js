import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { useNavigation } from '@react-navigation/native'
import TitleBar from './TitleBar';

const Favorite = () => {
    const navigation = useNavigation();
    const js = '[{ "id": 1, "name": "Bernadene", "price": 69, "sale": 25, "img": "http://dummyimage.com/106x100.png/dddddd/000000" }, { "id": 2, "name": "Tan", "price": 685, "sale": 44, "img": "http://dummyimage.com/124x100.png/5fa2dd/ffffff" }, { "id": 3, "name": "Gayleen", "price": 591, "sale": 96, "img": "http://dummyimage.com/213x100.png/ff4444/ffffff" }, { "id": 4, "name": "Rosabel", "price": 595, "sale": 35, "img": "http://dummyimage.com/213x100.png/ff4444/ffffff" }, { "id": 5, "name": "Malcolm", "price": 461, "sale": 25, "img": "http://dummyimage.com/241x100.png/cc0000/ffffff" }, { "id": 6, "name": "Micaela", "price": 472, "sale": 85, "img": "http://dummyimage.com/246x100.png/cc0000/ffffff" }, { "id": 7, "name": "Alberta", "price": 666, "sale": 38, "img": "http://dummyimage.com/138x100.png/dddddd/000000" }, { "id": 8, "name": "Tanitansy", "price": 580, "sale": 74, "img": "http://dummyimage.com/199x100.png/ff4444/ffffff" }, { "id": 9, "name": "Constantine", "price": 319, "sale": 5, "img": "http://dummyimage.com/240x100.png/ff4444/ffffff" }, { "id": 10, "name": "Koressa", "price": 963, "sale": 9, "img": "http://dummyimage.com/224x100.png/ff4444/ffffff" }]';
    const data = JSON.parse(js);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ProductDetail', { product: item })}>
                    <Image
                        style={styles.img}
                        source={{ uri: item.img }} />
                    <View style={{ padding: 11 }}>
                        <Text style={styles.name}>{item.name}</Text>

                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, flexDirection: 'row', alignItems: 'baseline' }}>
                            <Text style={[{ fontSize: 18, color: '#33907C', fontWeight: 'bold', }]}>${item.sale != 0 ? (item.price - (item.price * item.sale / 100)).toFixed(2) : item.price} </Text>
                            {item.sale &&
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ textDecorationLine: 'line-through', fontSize: 14 }}>${item.price} </Text>
                                    <Text style={{ fontSize: 14 }}>{item.sale}% off</Text>
                                </View>}
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    };


    
    return (
        <View style={{marginBottom: 70}}>
            <TitleBar title={'Favorite'} />
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
    name: {
        color: "#4A4A4A",
        fontSize: 14
    },
    img: {
        width: "100%",
        height: 127,
        borderRadius: 10
    },
    container: {
        width: "43%",
        height: 220,
        margin: 15,
        backgroundColor: "white",
        borderRadius: 10
    },
})

export default Favorite