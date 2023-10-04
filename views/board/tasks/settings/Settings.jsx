import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { COLORS, ROUTES, THEME } from "../../../../constants";
import { appContext } from "../../../../context/appContext";
import ProgressBar from "../../../../components/ProgressBar";

const Settings = ({ navigation, route }) => {
    const { backgroundColor } = useContext(appContext)
    const [status, setStatus] = useState(1)
    const [data, setData] = useState(null);
    const [taskId, setTaskId] = useState()

    useEffect(() => {
        setTaskId(route.params?.taskId);
        (async () => {
        try {
            const a = await getTasks(user.uid, taskId);
            if (a) {
            setData(a);
            }
        } catch (err) {
            Alert.alert("err");
        }
        })();
    }, []);

    function deleteTask(event){
        
    }

    function saveTask(event){
        
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
                <Text style={styles.name}>Create Homepage</Text>
                <Text style={styles.horizontalBar}></Text>
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
                <TextInput style={styles.description} placeholder="#FFFFFF"></TextInput>
                <Text style={styles.colorIamge}></Text>
                <Text style={styles.horizontalBar}></Text>
            </View>
            <View style={styles.containerImage}>
                <Text style={styles.title}>Image :</Text>
                <Text style={styles.inputURLImage}></Text>
                <TouchableOpacity style={styles.uploadButton} onPress={(event) => uploadImage(event)}>
                    <Text style={styles.titleButton}>Upload</Text>
                </TouchableOpacity>
                <Text style={styles.horizontalBar}></Text>

            </View>
            <View style={styles.containerDescription}>
                <Text style={styles.title}>Description :</Text>
                <TextInput style={styles.description} placeholder="Add a description to your task"></TextInput>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonAction} onPress={(event) => deleteTask(event)}>
                    <Text style={styles.titleButton}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonAction}  onPress={() => navigation.navigate(ROUTES.TASK)}>
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
    },
    button: {
        backgroundColor:COLORS.dark_purple,
        borderRadius:10,
        padding:10,
        marginLeft:20,
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
    },
    colorIamge: {
        backgroundColor:COLORS.green,
        padding:10,
        height:10,
        width:10,
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
        borderRadius:10,
        borderColor:COLORS.light_gray,
        backgroundColor:COLORS.light_gray,
        color:COLORS.black
    },
    containerButton: {
        flexDirection:'row',
        flex:1,
        gap:20,
    },
    buttonAction: {
        backgroundColor:COLORS.dark_purple,
        borderRadius:10,
        padding:15,
        margin:10,
        paddingLeft:20,
        paddingRight:20,
    },
    titleButton: {
        fontSize:THEME.font.size.l,
        fontWeight:'600',
        color:COLORS.white,
    },
    horizontalBar: {
        backgroundColor:COLORS.black,
        height: 2,
        borderRadius:5,
        marginTop:5,
        marginBottom:10,
        width:'50%',
        alignSelf:"center",
    },
});
