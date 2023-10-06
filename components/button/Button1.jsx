import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, THEME } from '../../constants'

const Button1 = ({ style, onPress, label, labelStyle, flex = false, unactive = false}) => {
    return (
        <TouchableOpacity style={[styles.container, style, flex && {flex: 1}, unactive && {opacity: 0.5}]} onPress={onPress}>
            <Text style={[styles.label, labelStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button1

const styles = StyleSheet.create({
    container: {
        backgroundColor:COLORS.dark_purple,
        borderRadius:10,
        padding:10,
    },
    label: {
        fontSize:THEME.font.size.m,
        color:COLORS.white,
        textAlign: "center"
    },
})