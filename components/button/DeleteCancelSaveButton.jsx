import { View, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { COLORS, THEME } from '../../constants'
import { appContext } from '../../context/appContext';
import Button1 from './Button1';

const DeleteCancelSaveButton = ({ onPressDelete, onPressCancel, onPressSave }) => {
    const { backgroundColor } = useContext(appContext);

    return (
        <View style={styles.actionsButton}>
            <Button1 flex label="Delete" style={{ backgroundColor: COLORS.red }} onPress={onPressDelete} />
            <Button1 flex label="Cancel" onPress={onPressCancel} />
            <Button1 flex label="Save"
                style={[backgroundColor ? { backgroundColor: COLORS.white } : { backgroundColor: COLORS.green }]}
                labelStyle={backgroundColor ? { color: COLORS.black } : { color: COLORS.white }}
                onPress={onPressSave}
            />
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