import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import TitleBar from '../stack/TitleBar'

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
    ]);

    const render_History = ({ item }) => {
        return (
            <View style={styles.Item}>
                <View style={styles.Box_item_content}>
                    <Image style={styles.Image_item} source={{ uri: "https://i.imgur.com/eAkedmy.jpg" }} />
                    <View style={styles.Box_item_infomation}>
                        <Text style={styles.Name}>{item.name}</Text>
                        {item.statusSale == 1 ?
                            <View style={styles.Box_item_costs}>
                                <Text style={styles.Costs}>${item.Costs}</Text>
                                <Text style={styles.Text_item_sale}>50%</Text>
                                <Text>Off</Text>
                            </View>
                            :
                            <Text style={styles.Costs}>${item.Costs}</Text>
                        }

                    </View>
                </View>
                <View style={styles.Box_item_button}>
                    {item.statusFeedback == 1 ?
                        < TouchableOpacity style={styles.Button_item_done}>
                            <Text style={styles.Text_button_done}>Done</Text>
                        </TouchableOpacity>
                        :
                        < TouchableOpacity style={styles.Button_item_feedback} onPress={() => navigation.navigate('Create_Feedback', { product: item })} >
                            <Text style={styles.Text_button_feedback}>Feedback</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <TitleBar title={"Order History"} />
            <View style={styles.Main}>
                <Text style={styles.Transaction}>Transactions </Text>
                <Text style={styles.Text_main_datetime}>Januari 2022</Text>
            </View>
            <FlatList data={data}
                renderItem={({ item }) => render_History({ item })}
                ListEmptyComponent={() => (
                    <View style={styles.Flatlist_main_emty}>
                        <Text>No results found</Text>
                    </View>
                )}
            />
        </View >
    )
}

export default OrderHistory

const styles = StyleSheet.create({
    Flatlist_main_emty: {
        alignItems: 'center',
        marginTop: 20
    },
    Text_main_datetime: {
        backgroundColor: '#E6ECF0',
        padding: 4,
        borderRadius: 10,
        color: '#33907C',
        fontWeight: '900',
        letterSpacing: 1,
        marginLeft: 10
    },
    Text_button_done: {
        color: 'white'
    },
    Text_button_feedback: {
        color: '#33907C',
        marginHorizontal: 20
    },
    Button_item_feedback: {
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 50,
        paddingVertical: 1,
        borderWidth: 1,
        borderBlockColor: '#33907C'
    },
    Button_item_done: {
        width: 75,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#33907C',
        borderRadius: 50,
        paddingVertical: 1
    },
    Box_item_button: {
        flex: 3,
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    Text_item_sale: {
        textDecorationLine: 'line-through',
        marginHorizontal: 5
    },
    Box_item_costs: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    Box_item_infomation: {
        flexDirection: 'column',
        marginLeft: 20
    },
    Image_item: {
        width: 37,
        height: 37
    },
    Box_item_content: {
        flex: 7,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    container: {
        flex: 1,
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