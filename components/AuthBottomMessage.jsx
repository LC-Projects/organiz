import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { COLORS } from '../constants'
import { appContext } from '../context/appContext'

const AuthBottomMessage = ({ message, button, link }) => {
    const { mode } = useContext(appContext)

    return (
        <View style={styles.message}>
            <Text style={[styles.text, { color: mode.text }]}>{message}</Text>
            <Text style={styles.redirect} onPress={link}>{button}</Text>
        </View>
    )
}

export default AuthBottomMessage

const styles = StyleSheet.create({
    text: {
        marginTop: 20,
        textAlign: "center",
    },
    redirect: {
        textAlign: "center",
        fontWeight: "800",
        color: COLORS.purple,
    },
    message: {
        marginTop: 50
    }
});