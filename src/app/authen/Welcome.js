import { StyleSheet, Text, View, StatusBar,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation = useNavigation();

  setTimeout(()=>{
    navigation.navigate('Onboarding');
  },3000)
  return (
    <View>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#33907C'}></StatusBar>
        <View>
            <Image style={styles.T}
            source={require('../../../assets/images/Copy.png')}/>
            <Text style={styles.Title1}>Welcome</Text>
        </View>
    </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#33907C',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    Title1: {
        fontSize: 30,
        color: 'white',
    }
})