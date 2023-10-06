import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { COLORS, THEME } from '../../../../../constants'
import ProgressBar from '../../../../../components/ProgressBar'
import { appContext } from '../../../../../context/appContext'
import ButtonSetting from '../../../../../components/button/ButtonSetting/ButtonSetting'
import Ratio from './Ratio'
import Title from './Title'
import { calculatePercentage } from '../../../../../utils/maths'

const BoardCard = ({data}) => {
    // Context
    const { refresh } = useContext(appContext);

    // Initialization
    const [importanceColor, setImportanceColor] = useState(null)
    const [title, setTitle] = useState("")
    const [percentage, setPercentage] = useState(0)


    const importanceStatus = [
        {name: "Low", color: COLORS.blue},
        {name: "Medium", color: COLORS.orange},
        {name: "High", color: COLORS.red},
    ]

    useEffect(() => {
        (data && setPercentage(() => calculatePercentage(data)));
        setImportanceColor(importanceStatus[data?.important - 1]?.color)
        setTitle(importanceStatus[data?.important - 1]?.name)
    }, [refresh])
    
    return (
    <View style={styles.container}>
        <View style={styles.topBoard}>
            <Text style={[styles.importanceStatus, {backgroundColor: importanceColor}]}>{title}</Text>
            <Ratio data={data} />
            <ButtonSetting color={COLORS.black} horizontal />
        </View>
        <Title value={data?.title} />

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
    topBoard: {
        margin:10,
        flexDirection:'row',
        alignItems:'center'
    },

    bottomBoard: {
        flexDirection:'row',
        alignItems:'center',
        margin:10,
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
    informations: {
        alignSelf:'flex-start',
        fontSize:THEME.font.size.l,
        textAlign:'right',
        fontWeight:'bold',
        flex:1
    },
  })

export default BoardCard