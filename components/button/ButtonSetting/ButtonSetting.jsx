import React from 'react'
import Dots from './Dots'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ButtonSetting = ({ onPress, color = null, horizontal = false }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{height: "100%", padding: 25}}>
            <Dots horizontal={horizontal} color={color} />
        </TouchableOpacity>
    )
}

export default ButtonSetting
