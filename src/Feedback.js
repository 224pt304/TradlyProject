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
    }
    return (
        <View style={styles.Container}>
            <TitleBar title={"Feedback"} />
            <FlatList style={{ padding: 10 }}
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.Item}>
                        <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ width: 70, height: 70, resizeMode: 'cover' }} source={{ uri: item.img }} />
                        </View>
                        <View style={{ flex: 6, flexDirection: 'column', justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: 20, color: '#33907C', fontWeight: 'bold' }}>{item.name}</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'baseline'}}>
                                <Text style={{ fontSize: 20, color: '#FFC107', fontWeight: '500' }}>{item.evaluate}</Text>
                                <Image style={{width: 16, height: 16, resizeMode: 'cover', marginLeft: 10}} source={{uri : "https://i.imgur.com/jP6PybW.png"}}/>
                            </View>
                            <Text style={{ fontSize: 15, color: '#33907C', fontWeight: '500' }}>{item.date_time}</Text>
                        </View>
                        <View  style={{ flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableOpacity onPress={() => Remove(item)} style={{backgroundColor:'#33907C', padding: 2, paddingHorizontal: 10, borderRadius: 50}}>
                                <Text style={{color: 'white', fontWeight: '500'}}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default FeedBack

const styles = StyleSheet.create({
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
    }
})