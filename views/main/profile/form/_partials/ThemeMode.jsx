import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { appContext } from '../../../../../context/appContext'
import { COLORS, THEME } from '../../../../../constants'

const ThemeMode = () => {
    // Context
    const { mode, setMode } = useContext(appContext)

    // Render
    return (
        <>
            <Text style={[styles.subtitle, { color: mode.contrastText }]}>Background color</Text>

            <View style={styles.buttons}>
                <TouchableOpacity style={[styles.button, { backgroundColor: mode.button.dark }]} onPress={() => setMode(true)} >
                    <Text style={[styles.textButton, styles.dark]}>Dark</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: mode.button.light }]} onPress={() => setMode(false)} >
                    <Text style={[styles.textButton, styles.light, { color: mode.text }]}>Light</Text>
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
        borderWidth: 1,
    },
    textButton: {
        fontSize: THEME.font.size.l,
        fontWeight: '800',
    },

    dark: {
        color: COLORS.white
    },
    light: {
        color: COLORS.black,
        borderColor: COLORS.ultralight_gray
    }
})