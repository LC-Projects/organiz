import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { THEME } from '../../constants'

const Input1 = ({ onChangeText, value, placeholder}) => {
    return (
        <KeyboardAvoidingView>
            <TextInput style={styles.input} onChangeText={onChangeText} value={value} placeholder={placeholder} />
        </KeyboardAvoidingView>
    )
}

export default Input1

const styles = StyleSheet.create({
    input: {
        textAlign: 'center',
        borderBottomWidth: 2,
        fontSize: THEME.font.size.l,
        flex: 1,
    },
});