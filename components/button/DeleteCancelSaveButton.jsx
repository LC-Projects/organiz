import { View, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { THEME } from '../../constants'
import { appContext } from '../../context/appContext';
import Button1 from './Button1';

const DeleteCancelSaveButton = ({ onPressDelete, onPressCancel, onPressSave }) => {
    const { mode } = useContext(appContext);

    return (
        <View style={styles.actionsButton}>
            <Button1 flex label="Delete" style={{ backgroundColor: mode.button.delete }} onPress={onPressDelete} />
            <Button1 flex label="Cancel" style={{ backgroundColor: mode.button.cancel }} onPress={onPressCancel} />
            <Button1 flex label="Save" style={{ backgroundColor: mode.button.save }} onPress={onPressSave} />
        </View>
    )
}

export default DeleteCancelSaveButton

const styles = StyleSheet.create({
    actionsButton: {
        flexDirection: "row",
        flex: 1,
        gap: 20,
        paddingTop: THEME.spacing.s,
        paddingBottom: 80
    },
});