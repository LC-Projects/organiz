import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { appContext } from '../../../../context/appContext'
import { COLORS, THEME } from '../../../../constants'

const ThemeMode = () => {
    // Context
    const { backgroundColor, setBackgroundColor } = useContext(appContext)

    // Render
    return (
        <>
            <Text style={[styles.subtitle, backgroundColor ? { color: COLORS.light } : { color: COLORS.dark }]}>Background color</Text>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={() => setBackgroundColor(true)} >
                    <Text style={[styles.textButton, styles.dark]}>Dark</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setBackgroundColor(false)} >
                    <Text style={[styles.textButton, styles.light]}>Light</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default ThemeMode

// Style
const styles = StyleSheet.create({
    subtitle: {
        marginTop: 20,
        fontSize: THEME.font.size.m,
        marginLeft: 20,
        fontWeight: "600",
    },
    buttons: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        flexDirection: "row",
        gap: 80,
    },
    button: {
        flex: 1,
        backgroundColor: COLORS.dark_purple,
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
    },
    textButton: {
        fontSize: THEME.font.size.l,
        fontWeight: '800',
    },

    dark: {
        color: COLORS.dark
    },
    light: {
        color: COLORS.light
    }
})