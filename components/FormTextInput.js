import {View, TextInput,StyleSheet} from 'react-native'
import React from 'react'
import { shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function FormTextInput({placeholder, onChangeText,style,editing,...otherprops}){
    
    {editing ? styling = styles.editingContainer : styling = styles.container}
    return(
        <View style={[styling,style]}>
            <TextInput style={styles.textInput} onChangeText={onChangeText} placeholder={placeholder} {...otherprops}/>
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
        
    },
    textInput: {
        width:'100%', 
        height:'80%',
        paddingHorizontal: 20
    },
    editingContainer: {
        width:'100%',
        height: '6%',
        borderWidth: 1,
        borderColor: '#3891DD',
        borderRadius: 6,
        backgroundColor: '#F9F9F9',
        justifyContent: 'center',
        marginBottom: 10,
        shadowColor:'#3891DD',
        shadowOpacity: 0.5,
        shadowRadius:10,
        shadowOffset:{width:0,height:2}
    }

})

export default FormTextInput;