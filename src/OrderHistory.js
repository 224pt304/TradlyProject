import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import TitleBar from './TitleBar'

const OrderHistory = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([
        { id: 1, name: "Coca Cola", Costs: 25, statusFeedback: 1, statusSale: 1 },
        { id: 2, name: "Pessi", Costs: 20, statusFeedback: 1, statusSale: 0 },
        { id: 3, name: "Panta", Costs: 15, statusFeedback: 0, statusSale: 1 },
        { id: 4, name: "Stronbow", Costs: 5, statusFeedback: 0, statusSale: 0 },
        { id: 5, name: "Soju", Costs: 9, statusFeedback: 1, statusSale: 0 },
        { id: 6, name: "Tigger", Costs: 4, statusFeedback: 0, statusSale: 0 },
        { id: 7, name: "Heleken", Costs: 5, statusFeedback: 0, statusSale: 1 },
        { id: 8, name: "Soyya", Costs: 20, statusFeedback: 0, statusSale: 0 },
    ])
    return (
        <View style={styles.container}>
            <TitleBar title={"Order History"} />
            <View style={styles.Main}>
                <Text style={styles.Transaction}>Transactions </Text>
                <Text style={{ backgroundColor: '#E6ECF0', padding: 4, borderRadius: 10, color: '#33907C', fontWeight: '900', letterSpacing: 1, marginLeft: 10 }}>Januari 2022</Text>
            </View>
            <FlatList data={data}
                renderItem={({ item }) => (
                    <View style={styles.Item}>
                        <View style={{ flex: 7, flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Image style={{ width: 37, height: 37 }} source={{ uri: "https://i.imgur.com/eAkedmy.jpg" }} />
                            <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                                <Text style={styles.Name}>{item.name}</Text>
                                {item.statusSale == 1 ?
                                    <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                        <Text style={styles.Costs}>${item.Costs}</Text>
                                        <Text style={{textDecorationLine: 'line-through', marginHorizontal: 5}}>50%</Text>
                                        <Text>Off</Text>
                                    </View>
                                    :
                                    <Text style={styles.Costs}>${item.Costs}</Text>
                                }

                            </View>
                        </View>
                        <View style={{ flex: 3, justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                            {item.statusFeedback == 1 ?
                                < TouchableOpacity style={{ width: 75, justifyContent: 'center', flexDirection: 'row', backgroundColor: '#33907C', borderRadius: 50, paddingVertical: 1 }}>
                                    <Text style={{ color: 'white' }}>Done</Text>
                                </TouchableOpacity>
                                :
                                < TouchableOpacity onPress={() => navigation.navigate('Create_Feedback', {product: item}, {status: true})} style={{ justifyContent: 'center', flexDirection: 'row', borderRadius: 50, paddingVertical: 1, borderWidth: 1, borderBlockColor: '#33907C' }}>
                                    <Text style={{ color: '#33907C', marginHorizontal: 20 }}>Feedback</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                )
                }
                ListEmptyComponent={() => (
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text>No results found</Text>
                    </View>
                )}
            />
        </View >
    )
}

export default OrderHistory

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: '#F6F9FF'
    },
    Main: {
        width: '100%',
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    Transaction: {
        color: 'black',
        fontSize: 20,
        fontWeight: '900',
        marginLeft: '2%'
    },
    Item: {
        height: 68,
        marginTop: 6,
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    Name: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black'
    },
    Costs: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#33907C'
    }

})