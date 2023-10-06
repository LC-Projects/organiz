import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { COLORS, THEME } from '../../../constants'
import ProgressBar from '../../../components/ProgressBar'
import { appContext } from '../../../context/appContext'
import { calculatePercentage } from '../../../utils/maths'

const Board = ({data}) => {
    const [importanceColor, setImportanceColor] = useState(null)
    const [title, setTitle] = useState("")
    const { refresh, setRefresh } = useContext(appContext);
    const [percentage, setPercentage] = useState(0)
    let todo = ((data?.todo?.length) ? (data?.todo?.length) : 0);
    let doing = ((data?.doing?.length) ? (data?.doing?.length) : 0);
    let done = ((data?.done?.length) ? (data?.done?.length) : 0);
    useEffect(() => {
        (data && setPercentage(() => calculatePercentage(data)));
        switch(data?.important)
        {
            case 1:
                setImportanceColor(COLORS.blue)
                setTitle("Low")
                break;
            case 2:
                setImportanceColor(COLORS.orange)
                setTitle("Medium")
                break;
            case 3:
                setImportanceColor(COLORS.red)
                setTitle("High")
                break;
        }
    }, [refresh])
    
    return (
    <View style={styles.container}>
        <View style={styles.topBoard}>
            <Text style={[styles.importanceStatus, {backgroundColor: importanceColor}]}>{title}</Text>
            <View style={styles.statusBoard}>
                <Text style={[styles.firstvalue, styles.fontSize]}>{todo}</Text>
                <Text style={styles.fontSize}> / </Text>
                <Text style={[styles.secondvalue, styles.fontSize]}>{doing}</Text>
                <Text style={styles.fontSize}> / </Text>
                <Text style={[styles.thirdvalue, styles.fontSize]}>{done}</Text>
            </View>
            <Text style={styles.informations}>. . .</Text>
        </View>
        <View style={styles.middleBoard}>
            <Text style={styles.textBoard}>{data?.title}</Text>
        </View>

        {/* ProgressBar Props: Nb Todo / Nb Doing / Nb Done */}
        <View style={styles.bottomBoard}>
            <ProgressBar percentage={percentage}/>
        </View>
        {/* END ProgressBar */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:COLORS.white,
        marginTop: THEME.spacing.m,
        padding:10,
        borderRadius:10,
    },
    firstvalue: {
        color:COLORS.green
    },
    secondvalue: {
        color:COLORS.blue
    },
    thirdvalue: {
        color:COLORS.orange
    },
    topBoard: {
        margin:10,
        flexDirection:'row',
        alignItems:'center'
    },
    middleBoard: {
        textAlign:'left',
        margin:10,
    },
    bottomBoard: {
        flexDirection:'row',
        alignItems:'center',
        margin:10,
    },
    textBoard: {
        margin:10,
        fontSize:THEME.font.size.xl,
        fontWeight:'800'
    },
    importanceStatus: {
        borderRadius:10,
        margin:10,
        padding:10,
        fontSize:THEME.font.size.m,
        textAlign:'center',
        color:COLORS.white,
        flex:1
    },
    statusBoard: {
        flexDirection:'row',
        flex:3
    },
    informations: {
        alignSelf:'flex-start',
        fontSize:THEME.font.size.l,
        textAlign:'right',
        fontWeight:'bold',
        flex:1
    },
    fontSize: {
        fontSize:THEME.font.size.m
    }
  })

export default Board