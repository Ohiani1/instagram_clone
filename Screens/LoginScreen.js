import {View, StyleSheet,Image, Text,TouchableWithoutFeedback,TouchableOpacity,SafeAreaView} from 'react-native'
import {useState} from 'react'
import {Entypo} from '@expo/vector-icons'
import {Formik} from 'formik';
import * as yup from 'yup';
import ErrorMessage from '../components/ErrorMesage';

import FormTextInput from '../components/FormTextInput';
import FormButton from '../components/FormButton';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import PasswordTextInput from '../components/passwordTextInput';

const validationScema = yup.object().shape({
    email: yup.string().email().required().label("Email"),
    password: yup.string().required().min(8).label("Password")
 });

function LoginScreen({navigation}) {

    const [emailPressIn,setEmailPressIn] = useState(false);
    const [passwordPressIn,setPasswordPressIn] = useState(false);

    const [showPassword,setShowPassword] = useState(false);

    return(
        <Formik
            initialValues={{email:'', password:''}}
            onSubmit={values => console.log(values)}
            validationSchema={validationScema}
        >
            {({handleChange, handleBlur, handleSubmit, values, setFieldTouched, touched,errors}) => (
                <SafeAreaView style={styles.container}>
                    <Image style={styles.loginLogo} source={require('C:/Users/ohian/OneDrive/Desktop/instagram_clone/insta-pics/instagram-logo.png')}/>
                    <FormTextInput
                         placeholder={'Phone number, username or email'}
                         onChangeText={handleChange('email')}
                         onBlur={() => setFieldTouched('email')}
                         value={values.email}
                         keyboardType='email-address'
                         textContentType='emailAddress'
                         clearButtonMode='while-editing'
                         onPressIn={() => setEmailPressIn(true)}
                         onEndEditing={() => setEmailPressIn(false)}
                         //onPressOut={() => setEmailPressIn(false)}
                         editing={emailPressIn}
                         autoCorrect={false}
                    />
                    <ErrorMessage error={errors.email} visible={touched.email}/>
                    <PasswordTextInput 
                        placeholder={'Password'}
                        onChangeText={handleChange('password')}
                        onBlur={() => setFieldTouched('password')}
                        value={values.password}
                        visiblePassword={false}
                        secureTextEntry={showPassword}
                        icon={
                            <TouchableWithoutFeedback onPress={() => {setShowPassword((prev) => !prev)}}>
                                {showPassword ? <Entypo name="eye-with-line" size={24} color="black" />  : <Entypo name="eye" size={24} color="black" />}
                            </TouchableWithoutFeedback>
                        }
                        textContentType='password'
                        onPressIn={() => setPasswordPressIn(true)}
                        onEndEditing={() => setPasswordPressIn(false)}
                        //onPressOut={() => setPasswordPressIn(false)}
                        editing={passwordPressIn}
                        autoCorrect='false'
                    /> 
                    <ErrorMessage error={errors.password} visible={touched.password}/>
                    <TouchableOpacity style={{width:'100%'}} onPress={()=> navigation.navigate('ForgotPasswordScreen')}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <FormButton onPress={handleSubmit} text={'Log In'}/>
                    <View style={styles.ORcontainer}>
                        <View style={{borderWidth:'0.3', width:'40%',height:'0.2%'}}></View>
                        <Text style={{paddingHorizontal:'7%', fontWeight: '700', fontSize:12}}>OR</Text>
                        <View style={{borderWidth:'0.3', width:'40%',height:'0.2%'}}></View>
                    </View>
                    <View style={{marginBottom:50}}>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> console.log('button pressed')}>
                            <Entypo name='facebook' size={20} color='#3891DD'/>
                            <Text style={styles.text}>Log In With Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{position:'absolute', flexDirection:'column-reverse', width:'100%', alignItems:'center', bottom: 30}}>
                        <View style={{flexDirection:'row'}}>
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity onPress={()=> navigation.navigate('SignUpEmailorPhone')}>
                                <Text style={styles.signUpText}>Sign Up.</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderWidth:0.4, width:'200%', marginBottom:20}}></View>
                    </View>
                </SafeAreaView>
            )}

        </Formik>
        
    );
}


const styles = StyleSheet.create({
    container: {
        flex:9,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        width: '90%'
    },
    loginLogo: {
        width: '50%',
        height: '10%',
        marginBottom: 20
    },
    forgotPassword: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#3891DD',
        width: '100%',
        textAlign: 'right',
        marginBottom: 20,
        textDecorationLine:'underline'
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
   signUpText: {
        color: '#3891DD',
        fontSize: 12,
        fontWeight: '700',
        textDecorationLine:'underline',
        paddingLeft:5
    }
})

export default LoginScreen;