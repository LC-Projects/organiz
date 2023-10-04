import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const ProgressBar = ({percentage}) => {
  return (
    <View style={styles.ProgessBarParent}>
        <Text></Text>
        <View style={[styles.ProgessBarChild, {width:percentage*3}]}>
            <Text></Text>
        </View>
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
    ProgessBarParent: {
        margin:10,
        backgroundColor:COLORS.medium_purple,
        position:'relative',
        borderRadius:10,
        flex:7,
        height:10,
    },
    ProgessBarChild : {
        position:'absolute',
        backgroundColor:COLORS.dark_purple,
        borderRadius:10,
        height:10,
    },
})