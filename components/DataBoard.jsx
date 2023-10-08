import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, THEME } from '../constants'

const DataBoard = ({value, text, valueColor, separator = false}) => {
  return (
    <View style={[styles.container, separator && {borderRightColor: COLORS.ultralight_gray, borderRightWidth:1, paddingRight:THEME.spacing.m}]}>
        <Text style={[styles.valeur, {color: valueColor}]}>{value}</Text>
        <Text style={styles.board}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin:10,
    },
    valeur: {
        textAlign:'center',
        fontSize:THEME.font.size.xl,
    },
    board: {
        fontSize:THEME.font.size.l,
        textAlign:'center',
    }
  })

export default DataBoard