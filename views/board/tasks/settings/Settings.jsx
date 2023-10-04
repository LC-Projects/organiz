import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { COLORS, THEME } from "../../../../constants";
import { appContext } from "../../../../context/appContext";
import ProgressBar from "../../../../components/ProgressBar";

const Settings = ({ route }) => {
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
        <View style={[styles.container, backgroundColor ? {backgroundColor:COLORS.dark} : {backgroundColor:COLORS.light}]}>
            {/* <View style={styles.containerProgressBar}>
                <ProgressBar percentage={68} />
                <Text style={styles.percent}>{percentage} %</Text>
            </View> */}
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Create Homepage</Text>
                <Text style={styles.horizontalBar}></Text>
            </View>
            <View style={styles.containerStatus}>
                <Text style={styles.title}>Move :</Text>
                <Button style={[styles.button, status == 1 ? {backgroundColor:COLORS.dark_purple} : {backgroundColor:COLORS.medium_purple}]} title="TODO" onPress={(event) => selectStatus(event, 1)}></Button>
                <Button style={[styles.button, status == 2 ? {backgroundColor:COLORS.dark_purple} : {backgroundColor:COLORS.medium_purple}]} title="DOING" onPress={(event) => selectStatus(event, 2)}></Button>
                <Button style={[styles.button, status == 3 ? {backgroundColor:COLORS.dark_purple} : {backgroundColor:COLORS.medium_purple}]} title="DONE" onPress={(event) => selectStatus(event, 3)}></Button>
            </View>
            <View style={styles.containerColor}>
                <Text style={styles.title}>Color :</Text>
                <Text style={styles.horizontalBar}></Text>
                <Text style={styles.colorIamge}></Text>
            </View>
            <View style={styles.containerImage}>
                <Text style={styles.title}>Image :</Text>
                <Text style={styles.inputURLImage}></Text>
                <Button style={styles.uploadButton} title="Upload" onPress={(event) => uploadImage(event)}></Button>
            </View>
            <View style={styles.containerDescription}>
                <Text style={styles.title}>Description :</Text>
                <TextInput style={styles.description} placeholder="Add a description to your task"></TextInput>
            </View>
            <View>
                <Button style={styles.button} title="Delete" onPress={(event) => deleteTask(event)}></Button>
                <Button style={styles.button} title="Delete" onPress={() => {}}></Button>
                <Button style={[styles.button, backgroundColor ? {backgroundColor:COLORS.white} : {backgroundColor:COLORS.green}]} title="Save" onPress={(event) => saveTask(event)}></Button>
            </View>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding:10,
    },
    containerProgressBar: {
        margin:5,
        height: 10,
        backgroundColor:COLORS.white,
        borderRadius:5,
    },
    percent: {
        fontSize:THEME.font.size.m,
        fontWeight:'bold',
        flex: 1
    },
    containerTitle: {
        backgroundColor:COLORS.white,
        borderRadius:10,
        padding:10,
    },
    title: {

    },
    containerStatus: {
        backgroundColor:COLORS.white,
        borderRadius:10,
        padding:10,
    },
    button: {
        backgroundColor:COLORS.dark_purple,
        borderRadius:10,
        padding:10,
        margin:20,
        textAlign:'center',
        fontSize:THEME.font.size.l,
        fontWeight:'bold'
    },
    containerColor: {
        backgroundColor:COLORS.white,
        borderRadius:10,
        padding:10,
    },
    colorIamge: {

    },
    containerImage: {
        backgroundColor:COLORS.white,
        borderRadius:10,
        padding:10,
    },
    inputURLImage: {

    },
    uploadButton: {

    },
    containerDescription: {
        backgroundColor:COLORS.white,
        borderRadius:10,
        padding:10,
    },
    description: {

    },
    horizontalBar: {
        height: 2,
        borderRadius:5,
        margin:10,
        left:40,
        right:40,
    },
});
