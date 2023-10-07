import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import InputWrapper from '../../../../../../../../../components/wrapper/InputWrapper'
import { COLORS, THEME } from '../../../../../../../../../constants'

const Description = ({ value, onChangeText }) => {
    return (
        <InputWrapper label="Description" column={true} >
            <TextInput multiline={true} numberOfLines={4} style={styles.textArea} value={value} onChangeText={onChangeText} placeholder="Add a description to your task"></TextInput>
        </InputWrapper>
    )
}

export default Description

const styles = StyleSheet.create({
    textArea: {
        padding: 10,
        color: COLORS.black,
        borderWidth: 1,
        borderColor: COLORS.ultralight_gray,
        width: "100%",
        borderRadius: THEME.border.s,
        textAlignVertical: "top",
    },
});