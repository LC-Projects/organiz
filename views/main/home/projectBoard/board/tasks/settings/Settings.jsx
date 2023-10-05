import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import { COLORS, THEME } from "../../../../../../../constants";
import { appContext } from "../../../../../../../context/appContext";
import ProgressBar from "../../../../../../../components/ProgressBar";
import { userContext } from "../../../../../../../context/userContext";
import { modifyTask } from "../../../../../../../api/firebase/realTime/tasks";

const Settings = ({ navigation, route }) => {
    const [boardId, setBoardId] = useState(route.params?.boardId);
    const [column, setColumn] = useState(route.params?.column)
    const [title, setTitle] = useState(route.params?.title);
    const [status, setStatus] = useState(1);
    const [tag, setTag] = useState(route.params?.tag);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const { backgroundColor } = useContext(appContext);
    const [data, setData] = useState(null);
    const [taskId, setTaskId] = useState();
    const { user, setUser } = useContext(userContext);

    useEffect(() => {
        setBoardId(route.params?.boardId);
        setColumn(route.params?.column);
        setTaskId(route.params?.taskId);
        setTitle(route.params?.title);
        setTag(route.params?.tag);
        // TODO: Créer la CRUD de modification et de suppression
        // (async () => {
        // try {
        //     const a = await getTasks(user.uid, taskId);
        //     if (a) {
        //     setData(a);
        //     }
        // } catch (err) {
        //     Alert.alert("err");
        // }
        // })();
    }, [route.params]);

    function deleteTask(event){
    }

    function saveTask(event){
        const task = {
            title:title,
            status:status,
            tag:tag,
            description:description
        }
        modifyTask(user.uid, boardId, column, taskId, task);
    }

    function uploadImage(event){

    }

    function selectStatus(event, value){
        event.preventDefault();
        switch(value)
        {
            case 1:
                setStatus(1)
                break;
            case 2:
                setStatus(2)
                break;
            case 3:
                setStatus(3)
                break;
        }
    }
    
    return (
        <ScrollView style={[styles.container, backgroundColor ? {backgroundColor:COLORS.dark} : {backgroundColor:COLORS.light}]}>
            <View style={styles.containerProgressBar}>
                <ProgressBar percentage={68} />
                <Text style={styles.percent}>68 %</Text>
            </View>


            <View style={styles.containerTitle}>
                <TextInput style={styles.name} onChangeText={setTitle}>{title}</TextInput>
            </View>

            <View style={styles.containerStatus}>
                <Text style={styles.title}>Move :</Text>
                <TouchableOpacity style={[styles.button, status == 1 ? {backgroundColor:COLORS.dark_purple} : {backgroundColor:COLORS.medium_purple}]} onPress={(event) => selectStatus(event, 1)}>
                    <Text style={styles.titleButtonStatus}>To do</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, status == 2 ? {backgroundColor:COLORS.dark_purple} : {backgroundColor:COLORS.medium_purple}]} onPress={(event) => selectStatus(event, 2)}>
                  <Text style={styles.titleButtonStatus}>In progess</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, status == 3 ? {backgroundColor:COLORS.dark_purple} : {backgroundColor:COLORS.medium_purple}]} onPress={(event) => selectStatus(event, 3)}>
                    <Text style={styles.titleButtonStatus}>Done</Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.containerColor}>
                <Text style={styles.title}>Color :</Text>
                <View style={styles.colorInput}>
                    <TextInput style={styles.name} onChangeText={setTag} placeholder="#FFFFFF">{tag}</TextInput>
                    <View style={styles.colorIamge} />
                </View>
            </View>

            <View style={styles.containerImage}>
                <Text style={styles.title}>Image :</Text>
                <Text style={styles.name}></Text>
                <TouchableOpacity style={styles.uploadButton} onPress={(event) => uploadImage(event)}>
                    <Text style={styles.titleButton}>Upload</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.containerDescription}>
                <Text style={styles.title}>Description :</Text>
                <TextInput style={styles.description} onChangeText={setDescription} placeholder="Add a description to your task">{description}</TextInput>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonAction} onPress={(event) => deleteTask(event)}>
                    <Text style={styles.titleButton}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonAction}  onPress={() => navigation.goBack()}>
                    <Text style={styles.titleButton}>Cancel</Text>    
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonAction, backgroundColor ? {backgroundColor:COLORS.white} : {backgroundColor:COLORS.green}]} onPress={(event) => saveTask(event)}>
                    <Text style={[styles.titleButton, backgroundColor ? {color:COLORS.black} : {color:COLORS.white}]}>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding:10,
    },
    containerProgressBar: {
        alignItems:'center',
        flex:2,
        flexDirection:"row",
        margin:10,
        gap:10,
        padding:2,
        height: 22,
        backgroundColor:COLORS.white,
        borderRadius:15,
    },
    percent: {
        marginRight:10,
        fontSize:THEME.font.size.m,
        fontWeight:'bold',
    },
    containerTitle: {
        backgroundColor:COLORS.white,
        borderRadius:10,
        padding:10,
        margin:10,
    },
    name: {
        textAlign:'center',
        borderBottomWidth: 2,
        fontSize: THEME.font.size.l,
        flex: 1,
    },
    title: {
        fontSize:THEME.font.size.m,
        fontWeight:'600',
    },
    containerStatus: {
        alignItems:'center',
        flexDirection:"row",
        backgroundColor:COLORS.white,
        borderRadius:10,
        margin:10,
        padding:10,
        gap: 20,
    },
    button: {
        backgroundColor:COLORS.dark_purple,
        borderRadius:10,
        padding:10,
    },
    titleButtonStatus: {
        fontSize:THEME.font.size.m,
        color:COLORS.white,
    },
    containerColor: {
        flexDirection:"row",
        gap:10,
        backgroundColor:COLORS.white,
        borderRadius:10,
        padding:10,
        margin:10,
        alignItems: "center"
    },
    colorInput: {
        flex: 2,
        flexDirection: "row",
        gap: 20,
        alignItems: "center"
    },  
    colorIamge: {
        backgroundColor:COLORS.green,
        padding:10,
        height:25,
        width:25,
        borderRadius: THEME.border.xs
    },
    containerImage: {
        flex:2,
        flexDirection:'row',
        backgroundColor:COLORS.white,
        borderRadius:10,
        padding:10,
        margin:10,
    },
    inputURLImage: {
        flex:1,
    },
    uploadButton: {
        flex:1,
        backgroundColor: "black"
    },
    containerDescription: {
        backgroundColor:COLORS.white,
        borderRadius:10,
        padding:10,
        margin:10,
    },
    description: {
        margin:10,
        paddingLeft:10,
        paddingRight:10,
        color:COLORS.black
    },
    containerButton: {
        flexDirection:'row',
        flex:1,
        gap:20,
        padding: 10,
    },
    buttonAction: {
        backgroundColor:COLORS.dark_purple,
        borderRadius:10,
        padding:15,
        flex: 1
    },
    titleButton: {
        fontSize:THEME.font.size.l,
        fontWeight:'600',
        color:COLORS.white,
        textAlign: "center"
    },
});
