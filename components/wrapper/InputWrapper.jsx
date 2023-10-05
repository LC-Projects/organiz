import { View, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, THEME } from '../../constants'

const InputLayout = ({ children }) => {
    return (
        <View style={styles.container} >
            {children}
        </View>
    )
}

export default InputLayout


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: THEME.border.s,
        padding: THEME.spacing.s,
        marginBottom: THEME.spacing.s
    }
})