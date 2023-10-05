import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, THEME } from '../constants'

const ProgressBar = ({ percentage }) => {
    return (
        <View style={styles.container}>
            <View style={styles.ProgessBarParent}>
                <View style={[styles.ProgessBarChild, { width: `${percentage}%` }]} />
            </View>
            <Text style={styles.percentage} >68 %</Text>
        </View>
    )
}

export default ProgressBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: THEME.spacing.s,
        paddingLeft: THEME.spacing.s,
        paddingRight: THEME.spacing.s,
    },
    ProgessBarParent: {
        backgroundColor: COLORS.medium_purple,
        position: 'relative',
        borderRadius: 10,
        flex: 7,
        height: 10,
    },
    ProgessBarChild: {
        position: 'absolute',
        backgroundColor: COLORS.dark_purple,
        borderRadius: 10,
        height: 10,
    },
    percentage: {
        flex: 1
    }
})