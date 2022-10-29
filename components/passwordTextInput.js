import {View, TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import {useState} from 'react'
import { backgroundColor, shadowColor, Text } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {Entypo} from '@expo/vector-icons';
import showPassword from './showPassword';
import hidePassword from './hidePassword';

function PasswordTextInput({placeholder, onChangeText,style,editing,icon,...otherprops}){

    const [viewEntry,setViewEntry] = useState(false);
    visiblePassword = viewEntry;

    
    {editing ? styling = styles.editingContainer : styling = styles.container}
    return(
        <View style={[styling,style]}>
            <TextInput style={styles.textInput} onChangeText={onChangeText} placeholder={placeholder} {...otherprops}/>
            {icon ? icon : null}
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
        alignItems:'center',
        marginBottom: 10,
        flexDirection:'row',

        
    },
    textInput: {
        width:'50%', 
        height:'80%',
        paddingHorizontal: 20,
    },
    editingContainer: {
        width:'100%',
        height: '6%',
        borderWidth: 1,
        borderColor: '#3891DD',
        borderRadius: 6,
        backgroundColor: '#F9F9F9',
        alignItems:'center',
        marginBottom: 10,
        flexDirection:'row',
        shadowColor:'#3891DD',
        shadowOpacity: 0.5,
        shadowRadius:10,
        shadowOffset:{width:0,height:2}
    }

})

export default PasswordTextInput;