import React from 'react';
import {TouchableOpacity} from 'react-native'
import {Entypo} from '@expo/vector-icons'

function showPassword({onpress})
{
    return(
        <TouchableOpacity onPress={onpress}>
            <Entypo name="eye" size={24} color="black" />
        </TouchableOpacity>
    );
}

export default showPassword;