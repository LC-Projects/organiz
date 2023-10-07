import React from 'react'
import RadioButtons from '../../../../../../components/button/RadioButtons'
import InputWrapper from '../../../../../../components/wrapper/InputWrapper'

const StatusButtons = ({ data, active, onPress }) => {
    return (
        <InputWrapper label="Status">
            <RadioButtons data={data} active={active} onPress={onPress} />
        </InputWrapper>
    )
}

export default StatusButtons
