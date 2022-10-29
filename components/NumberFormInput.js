import {View, TextInput,StyleSheet,TouchableOpacity,Text} from 'react-native'
import React from 'react'

function NumberFormInput({placeholder, onChangeText,style,...otherprops}){
    return(
        <View style={[styles.container,style]}>
            <TouchableOpacity style={{marginRight:15}}>
                <Text style={styles.numberCode}>US +1</Text>
            </TouchableOpacity> 
            <View style={{borderRightWidth:0.3, height:'60%',marginRight:15}}></View> 
            <TextInput style={styles.textInput} onChangeText={onChangeText} placeholder={placeholder}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: '6%',
        borderWidth: 1,
        borderColor: '#D5D2D2',
        borderRadius: 6,
        backgroundColor: '#F9F9F9',
        justifyContent: 'center',
        marginBottom: 10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 20
        
    },
    textInput: {
        width:'80%', 
        height:'80%',
    },
    numberCode: {
        color:'#3891DD',
        textDecorationLine:'underline',
        fontWeight:'500'
    }

})

export default NumberFormInput;