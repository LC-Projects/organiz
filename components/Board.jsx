import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, THEME } from '../constants'

const DataBoard = ({importance, importanceColor, title, percentage}) => {
  return (
    <View style={styles.container}>
        <View style={styles.topBoard}>
            <Text style={[styles.importanceStatus, {backgroundColor: importanceColor}]}>{importance}</Text>
            <View style={styles.statusBoard}>
                <Text style={[styles.firstvalue, styles.fontSize]}>4</Text>
                <Text style={styles.fontSize}> / </Text>
                <Text style={[styles.secondvalue, styles.fontSize]}>1</Text>
                <Text style={styles.fontSize}> / </Text>
                <Text style={[styles.thirdvalue, styles.fontSize]}>2</Text>
            </View>
            <Text style={styles.informations}>. . .</Text>
        </View>
        <View style={styles.middleBoard}>
            <Text style={styles.textBoard}>{title}</Text>
        </View>

        {/* ProgressBar Props: Nb Todo / Nb Doing / Nb Done */}
        <View style={styles.bottomBoard}>
            <View style={styles.ProgessBarParent}>
                <Text></Text>
                <View style={[styles.ProgessBarChild, {width:percentage*3}]}>
                    <Text></Text>
                </View>
            </View>
            <Text style={styles.percentage}>{percentage} %</Text>
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
    ProgessBarParent: {
        backgroundColor:COLORS.medium_gray,
        position:'relative',
        borderRadius:5,
        flex:3,
        height:10,
    },
    ProgessBarChild : {
        position:'absolute',
        backgroundColor:COLORS.dark_purple,
        borderRadius:5,
        height:10,
    },
    percentage: {
        flex:1,
        fontSize:THEME.font.size.l,
        textAlign:'right',
        fontWeight: 'bold'
    },
    fontSize: {
        fontSize:THEME.font.size.m
    }
  })

export default DataBoard