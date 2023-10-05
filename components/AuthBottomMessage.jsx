import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { COLORS, ROUTES } from '../constants'
import { appContext } from '../context/appContext'

const AuthBottomMessage = ({ message, button, link }) => {
    const { backgroundColor } = useContext(appContext)

    return (
        <View style={styles.message}>
            <Text style={[styles.text, backgroundColor ? { color: COLORS.light } : { color: COLORS.dark }]}>{message}</Text>
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