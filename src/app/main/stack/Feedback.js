import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TitleBar from './TitleBar'

const FeedBack = () => {
    const [data, setData] = useState([
        { id: 1, img: "https://i.imgur.com/Wb3ux6q.png", date_time: "12:00 22/10/2023", evaluate: 1, name: "Coca Cola" },
        { id: 2, img: "https://i.imgur.com/Wb3ux6q.png", date_time: "11:00 22/10/2023", evaluate: 2, name: "Pessi" },
        { id: 3, img: "https://i.imgur.com/Wb3ux6q.png", date_time: "10:00 22/10/2023", evaluate: 3, name: "Monsta" },
        { id: 4, img: "https://i.imgur.com/Wb3ux6q.png", date_time: "13:00 22/10/2023", evaluate: 4, name: "Fanta" },
        { id: 5, img: "https://i.imgur.com/Wb3ux6q.png", date_time: "14:00 22/10/2023", evaluate: 5, name: "7 Up" },
        { id: 6, img: "https://i.imgur.com/Wb3ux6q.png", date_time: "15:00 22/10/2023", evaluate: 3, name: "Stronbow" }
    ]);

    const Remove = (value) => {
        const updatedData = data.filter(item => item.id !== value.id);
        setData(updatedData);
    };
    const Render_Feedback = (item) => {
        return (
            <View style={styles.Item}>
                <View style={styles.Box_item_image}>
                    <Image style={styles.Image_item} source={{ uri: item.img }} />
                </View>
                <View style={styles.Box_item_content}>
                    <Text style={styles.Text_item_name}>{item.name}</Text>
                    <View style={styles.Box_item_evaluate}>
                        <Text style={styles.Text_item_evaluate}>{item.evaluate}</Text>
                        <Image style={styles.Image_item_evaluate} source={{ uri: "https://i.imgur.com/jP6PybW.png" }} />
                    </View>
                    <Text style={styles.Text_item_datetime}>{item.date_time}</Text>
                </View>
                <View style={styles.Box_item_Remove}>
                    <TouchableOpacity style={styles.Button_item_remove} onPress={() => Remove(item)} >
                        <Text style={styles.Text_item_remove}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.Container}>
            <TitleBar title={"Feedback"} />
            <FlatList style={styles.Flat_list}
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (Render_Feedback(item))}
            />
        </View>
    )
}

export default FeedBack

const styles = StyleSheet.create({
    Text_item_remove: {
        color: 'white',
        fontWeight: '500'
    },
    Button_item_remove: {
        backgroundColor: '#33907C',
        padding: 2,
        paddingHorizontal: 10,
        borderRadius: 50
    },
    Box_item_Remove: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text_item_datetime: {
        fontSize: 15,
        color: '#33907C',
        fontWeight: '500'
    },
    Image_item_evaluate: {
        width: 16,
        height: 16,
        resizeMode: 'cover',
        marginLeft: 10
    },
    Text_item_evaluate: {
        fontSize: 20,
        color: '#FFC107',
        fontWeight: '500'
    },
    Box_item_evaluate: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline'
    },
    Text_item_name: {
        fontSize: 20,
        color: '#33907C',
        fontWeight: 'bold'
    },
    Box_item_content: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    Image_item: {
        width: 70,
        height: 70,
        resizeMode: 'cover'
    },
    Box_item_image: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    Container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#33907C'
    },
    Item: {
        height: 100,
        padding: 3,
        marginBottom: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    Flat_list: {
        padding: 10
    },

})