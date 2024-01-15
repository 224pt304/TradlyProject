import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TitleBar from './TitleBar'
import { useNavigation } from '@react-navigation/native'

const EditProfile = ({ route }) => {
    const { profile } = route.params;
    const navigation = useNavigation();
    const Save_info = () => {
        Alert.alert("Save done");
        setTimeout(() => {
            navigation.goBack();
        }, 1500);
    }
    return (
        <View style={styles.Container}>
            <TitleBar title={"Edit profile"} />
            <View style={styles.Form_edit}>
                <TextInput style={styles.Input_form} value={profile.name} />
                <TextInput style={styles.Input_form} value={profile.phone} />
                <TextInput style={styles.Input_form} value={profile.email} />
                <TextInput style={styles.Input_form} value={profile.password} secureTextEntry={true} />
            </View>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => Save_info()} style={{ backgroundColor: '#33907C', width: '70%', alignItems: 'center', padding: 3, borderRadius: 50 }}>
                    <Text style={{color: 'white', fontSize: 18}}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F6F9FF',
    },
    Input_form: {
        borderColor: '#33907C',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 20,
    },
    Form_edit: {
        padding: 15,
        marginTop: 30,
    }
})