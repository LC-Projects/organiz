import React from 'react'
import InputWrapper from '../../../../../../../../../components/wrapper/InputWrapper'
import Input1 from '../../../../../../../../../components/form/Input1'

const Title = ({ onChangeText, value }) => {
    return (
        <InputWrapper>
            <Input1 onChangeText={onChangeText} value={value} />
        </InputWrapper>
    )
}

export default Title