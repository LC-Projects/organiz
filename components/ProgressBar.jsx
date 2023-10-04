import { View, Text } from 'react-native'
import React from 'react'

const ProgressBar = (percentage) => {
  return (
    <View style={styles.ProgessBarParent}>
        <Text></Text>
        <View style={[styles.ProgessBarChild, {width:percentage*3}]}>
            <Text></Text>
        </View>
    </View>
  )
}

export default ProgressBar