import React from 'react'
import InputWrapper from '../../../../../../../../../components/wrapper/InputWrapper'
import RadioButtons from '../../../../../../../../../components/button/RadioButtons'

const Move = ({ data, active, onPress }) => {
    return (
        <InputWrapper label="Move">
            <RadioButtons data={data} active={active} onPress={onPress} />
        </InputWrapper>
    )
}

export default Move