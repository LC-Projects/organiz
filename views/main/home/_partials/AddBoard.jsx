import { View, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { COLORS, THEME } from "../../../../constants";
import ButtonsActions from "../../../../components/button/ButtonsActions";

const AddBoard = ({ cancel, add, title, setTitle }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior= {(Platform.OS === 'ios')? "padding" : null}>
      <TextInput
        style={styles.title}
        value={title}
        onChangeText={setTitle}
      ></TextInput>
      <ButtonsActions cancel={cancel} add={add} />
    </KeyboardAvoidingView>
  );
};

export default AddBoard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.gray,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginLeft: THEME.spacing.m,
    marginRight: THEME.spacing.m,
    padding: THEME.spacing.m,

    borderTopLeftRadius: THEME.border.m,
    borderTopRightRadius: THEME.border.m,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 1,
    elevation: 10,
    borderTopWidth: 2,
    borderTopColor: COLORS.dark_purple,
  },
  title: {
    fontSize: THEME.font.size.xl,
    padding: THEME.spacing.s,
    marginBottom: THEME.spacing.m,
    borderBottomWidth: 2,
  },
});
