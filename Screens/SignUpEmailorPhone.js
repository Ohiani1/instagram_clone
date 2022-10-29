import {useState} from 'react';
import {StyleSheet,SafeAreaView,View,TouchableOpacity,Text,TouchableWithoutFeedback} from 'react-native'
import {Entypo} from '@expo/vector-icons';
import NumberFormInput from '../components/NumberFormInput';
import FormButton from '../components/FormButton';
import FormTextInput from '../components/FormTextInput';

function SignUpEmailorPhone({navigation}){
    const [setEmail,updateEmail] = useState(false);
    const [setPhone,updatePhone] = useState(true);

    return(
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.innerContainer}>
                <TouchableOpacity style={{ left:'-6%', width:'100%'}} onPress={()=> navigation.navigate('LoginScreen')}>
                    <Entypo name='chevron-left' size={40}/>
                </TouchableOpacity>
                <Text style={styles.EnterPhoneEmail}>Enter Phone or Email</Text>
                <View style={styles.usernameORphone}>
                    <TouchableWithoutFeedback onPress={()=> {updateEmail(false); updatePhone(true);}}>
                        <View style={{width:'50%', alignItems:'center'}}>
                            {setPhone ? <Text style={styles.HighlightText}>Phone</Text> : <Text style={styles.NormalText}>Phone</Text> }
                            {setPhone ? <View style={styles.highlightbar}></View> : <View style={styles.Normalbar}></View>}
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=> {updateEmail(true); updatePhone(false);}}>
                        <View style={{width:'50%',alignItems:'center'}}>
                            {setEmail ? <Text style={styles.HighlightText}>Email</Text> : <Text style={styles.NormalText}>Email</Text> }
                            {setEmail ? <View style={styles.highlightbar}></View> : <View style={styles.Normalbar}></View>}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {setPhone ? <NumberFormInput placeholder={'Phone number'} style={{height:'6%'}}/> : <FormTextInput  placeholder={'Email address'} style={{height:'6%'}}/>}
                <FormButton text={'Next'} style={{height:'6%'}}/>
                {setPhone ? <Text numberOfLines={2} style={styles.SMSsignup}>You may receive SMS updates from instagram and can opt out at any time.</Text> : <View></View>}

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flex:1,
        alignItems: 'center',
    },
    innerContainer: {
        width:'85%',
        alignItems:'center',
        height:'100%'
    },
    EnterPhoneEmail: {
        fontSize: 25,
        fontWeight: '400',
        marginBottom:'8%'
    },
    usernameORphone: {
        flexDirection: 'row',
        alignItems:'center',
        marginBottom: '3%'
    },
    HighlightText: {
        fontSize: 20,
        fontWeight:'700',
        textDecorationLine: 'underline',
        marginBottom: '3%'
    },
    NormalText: {
        fontSize: 20,
        fontWeight:'700',
        textDecorationLine: 'underline',
        marginBottom: '3%',
        color:'#A9ACAF'
    },
    Normalbar: {
        borderWidth:1, 
        width:'100%',
        borderColor:'#A9ACAF'
    },
    highlightbar: {
        borderWidth:1, 
        width:'100%',
    },
    SMSsignup: {
        textAlign:'center',
        fontSize:12,
        fontWeight:'500',
        color:'#6A6C6E',
        width:'70%',
        marginTop:'5%'
    }
})

export default SignUpEmailorPhone;