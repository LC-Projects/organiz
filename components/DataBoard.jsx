import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { THEME } from '../constants'
import { appContext } from '../context/appContext'

const DataBoard = ({value, text, valueColor, separator = false}) => {
  // Context
  const { mode } = useContext(appContext)

  return (
    <View style={[styles.container, separator && {borderRightColor: mode.homepage.ratioBoardSeparator, borderRightWidth:1, paddingRight:THEME.spacing.m}]}>
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