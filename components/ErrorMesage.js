import React from 'react';
import {Text, StyleSheet} from 'react-native';

function ErrorMessage({error,visible}){
    if (!error || !visible) return null;

    return(
        <Text style={styles.text}>{error}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
        width:'100%'
    }
})

export default ErrorMessage;




