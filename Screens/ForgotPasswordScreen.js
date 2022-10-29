import {View, StyleSheet, SafeAreaView,Text,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {SimpleLineIcons} from '@expo/vector-icons'
import FormTextInput from '../components/FormTextInput';
import FormButton from '../components/FormButton';
import NumberFormInput from '../components/NumberFormInput';
import {Entypo} from '@expo/vector-icons'

function ForgotPasswordScreen({navigation}){

    const [setUsername,updateUsername] = useState(true);
    const [setPhone,updatePhone] = useState(false);

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={{marginBottom:'8%'}}>
                    <SimpleLineIcons name='lock' size={80}/>
                </View>
                <Text style={styles.headerText}>Trouble logging in?</Text>
                {setUsername ? <Text style={styles.smallerText} numberOfLines={3}>Enter your username or email and we'll send you a link to get back into your account.</Text> : <Text style={styles.smallerText} numberOfLines={3}>Enter your phone number and we'll send you a login code to get back into your account.</Text>}
                <View style={styles.usernameORphone}>
                    <TouchableWithoutFeedback onPress={()=> {updateUsername(true); updatePhone(false);}}>
                        <View style={{width:'50%', alignItems:'center'}}>
                            {setUsername ? <Text style={styles.HighlightText}>Username</Text> : <Text style={styles.NormalText}>Username</Text> }
                            {setUsername ? <View style={styles.highlightbar}></View> : <View style={styles.Normalbar}></View>}
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=> {updateUsername(false); updatePhone(true);}}>
                        <View style={{width:'50%',alignItems:'center'}}>
                            {setPhone ? <Text style={styles.HighlightText}>Phone</Text> : <Text style={styles.NormalText}>Phone</Text> }
                            {setPhone ? <View style={styles.highlightbar}></View> : <View style={styles.Normalbar}></View>}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {setUsername ? <FormTextInput placeholder={'Username or email'} style={{height:50}}/> : <NumberFormInput placeholder={'Phone number'} style={{height:50}}/>}
                <FormButton text={'Next'} style={{height:50}}/>
                <TouchableOpacity>
                    <Text style={styles.needHelp}>Need more help?</Text>
                </TouchableOpacity>
                <View style={styles.ORcontainer}>
                    <View style={{borderWidth:'0.4', width:'40%',height:'0.2%'}}></View>
                    <Text style={{paddingHorizontal:'7%', fontWeight: '700', fontSize:12}}>OR</Text>
                    <View style={{borderWidth:'0.4', width:'40%',height:'0.2%'}}></View>
                </View>
                <TouchableOpacity style={{flexDirection:'row',marginTop:'4%'}} onPress={()=> console.log('button pressed')}>
                    <Entypo name='facebook' size={20} color='#3891DD'/>
                    <Text style={styles.text}>Log In With Facebook</Text>
                </TouchableOpacity>
                <SafeAreaView style={{position:'absolute', flexDirection:'column-reverse', width:'100%', alignItems:'center', bottom: 10}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
                        <Text style={styles.text}>Back To Log In</Text>
                    </TouchableOpacity>
                    <View style={{borderWidth:0.4, width:'200%', marginBottom:20}}></View>
                </SafeAreaView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        width:'100%'

    },
    innerContainer: {
        flex:1,
        width:'90%',
        alignItems:'center',
        marginTop:'10%',
    },
    headerText: {
        fontSize: 20,
        fontWeight:'700',
        marginBottom: '5%'
    },
    smallerText: {
        width:'80%',
        textAlign:'center',
        fontSize: 15,
        fontWeight:'500',
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
    content: {
        width:'100%'
    },
    needHelp: {
        color:'#3891DD',
        textDecorationLine:'underline',
        fontWeight:'500',
        marginTop: '8%',
        marginBottom:'8%'
    },
    ORcontainer: {
        flexDirection: 'row',
        width:'100%',
        marginTop: 20,
        alignItems:'center',
        marginBottom:25
    },
    text: {
        color: '#3891DD',
        fontSize: 15,
        fontWeight: '700',
        textDecorationLine:'underline',
        paddingLeft:10
    },
})

export default ForgotPasswordScreen;