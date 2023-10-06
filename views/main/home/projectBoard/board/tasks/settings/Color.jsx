import { View, StyleSheet } from 'react-native'
import React from 'react'
import InputWrapper from '../../../../../../../components/wrapper/InputWrapper'
import Input1 from '../../../../../../../components/form/Input1'
import { COLORS, THEME } from '../../../../../../../constants'

const Color = ({ value, onChangeText }) => {
    return (
        <InputWrapper label="Color">
            <View style={styles.colorInput}>
                <Input1 value={value} onChangeText={onChangeText} placeholder="#FFFFFF" />
                <View style={[styles.colorImage, {backgroundColor: value}]} />
            </View>
        </InputWrapper>
    )
}

export default Color


const styles = StyleSheet.create({
    colorInput: {
        flex: 2,
        flexDirection: "row",
        gap: 20,
        alignItems: "center"
    },
    colorImage: {
        backgroundColor: COLORS.green,
        padding: 10,
        height: 25,
        width: 25,
        borderRadius: THEME.border.xs,
        borderColor: COLORS.ultralight_gray,
        borderWidth: 1
    },
});