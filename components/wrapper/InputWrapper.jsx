import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { COLORS, THEME } from '../../constants'

const InputWrapper = ({ children, style, label = null, column = false }) => {
    return (
        <View style={[styles.container, style, column && {flexDirection: "column", alignItems: "flex-start"}]} >
            {label && <Text style={styles.label} >{label}:</Text>}
            {children}
        </View>
    )
}

export default InputWrapper


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: THEME.border.m,
        padding: THEME.spacing.s,
        marginBottom: THEME.spacing.s,
        flexDirection: "row",
        alignItems: "center",
        gap: THEME.spacing.s,
    },
    label: {
        fontSize: THEME.font.size.m,
        fontWeight: THEME.font.weight.bold,
    }
})