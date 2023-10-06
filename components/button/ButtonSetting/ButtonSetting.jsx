import React from 'react'
import Dots from './Dots'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ButtonSetting = ({ onPress, color = null, horizontal = false, style = null }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{padding: 25}, style]}>
            <Dots horizontal={horizontal} color={color} />
        </TouchableOpacity>
    )
}

export default ButtonSetting
