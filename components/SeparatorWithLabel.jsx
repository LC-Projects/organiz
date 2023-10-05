import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { COLORS } from '../constants'
import { appContext } from '../context/appContext'

const SeparatorWithLabel = ({ label }) => {
    // Context
    const { backgroundColor } = useContext(appContext)

    // Render
    return (
        <View style={styles.container}>
            <Text style={[styles.textBetween, backgroundColor ? { backgroundColor: COLORS.dark, color: COLORS.light } : { backgroundColor: COLORS.light, color: COLORS.dark }]}>{label}</Text>
            <Text style={[styles.horizontalBar, backgroundColor ? { backgroundColor: COLORS.light } : { backgroundColor: COLORS.dark }]}></Text>
        </View>
    )
}

export default SeparatorWithLabel

// Style
const styles = StyleSheet.create({
    container: {
        position: "relative",
        alignItems: "baseline",
        textAlign: "center"
    },
    textBetween: {
        margin: 'auto',
        fontWeight: "600",
        padding: 10,
        alignSelf: "center",
        zIndex: 1,
    },
    horizontalBar: {
        height: 2,
        borderRadius: 5,
        position: "absolute",
        left: 20,
        right: 20,
        top: '50%',
    },
});