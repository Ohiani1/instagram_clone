import React from 'react';
import {TouchableOpacity} from 'react-native'
import {Entypo} from '@expo/vector-icons'

function hidePassword({onpress})
{
    return(
        <TouchableOpacity onPress={onpress}>
            <Entypo name="eye-with-line" size={24} color="black" />
        </TouchableOpacity>
    );
}

export default hidePassword;