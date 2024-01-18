import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, StyleSheet, StatusBar, Button, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const Onboarding = () => {
    const images = [
        "../",
        'https://i.imgur.com/woAaEn6.png',
        'https://i.imgur.com/RdPZHIE.png'
    ];

    const [index, setIndex] = useState(0);
    const navigation = useNavigation();

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <StatusBar backgroundColor={'#33907C'}></StatusBar>
            <Swiper style={{ 
                height: '100%' 
            }}
                index={index}
                onIndexChanged={num => setIndex(num)}
                loop={false}>

                {images.map((imag, index) => (
                    <View key={index} style={styles.slide}>
                        <Image style={styles.image} source={require('../assets/images/Onboarding1.png')} />
                    </View>
                ))}

            </Swiper>
            <View style={styles.button1}>
                <TouchableOpacity style={styles.button} onPress={() => index < 2 ? setIndex(index + 1) : navigation.navigate('Tabs')}>
                    <Text style={styles.buttonText}>{index == 2 ? 'Finsh' : 'Next'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    button1: {
        alignItems: 'center',
        marginBottom: 20,
    },

    button: {
        width: 306,
        height: 47,
        backgroundColor: '#33907C',
        padding: 10,
        borderRadius: 24,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    image: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
});

export default Onboarding;