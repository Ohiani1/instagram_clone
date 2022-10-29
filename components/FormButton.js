import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import React from 'react'


function FormButton({onPress,text,style}){
    return(
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center',
        width:'100%',
        height: '5%',
        backgroundColor: '#3891DD',
        borderRadius: 6
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
        textDecorationLine:'underline'
    }
})

export default FormButton;