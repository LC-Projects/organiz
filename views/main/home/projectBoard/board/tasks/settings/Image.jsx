import React from 'react'
import Input1 from '../../../../../../../components/form/Input1'
import InputWrapper from '../../../../../../../components/wrapper/InputWrapper'
import Button1 from '../../../../../../../components/button/Button1'

const Image = ({ value, onPress }) => {
    return (
        <InputWrapper label="Image">
            <Input1 value={value} />
            <Button1 label="Upload" onPress={onPress} />
        </InputWrapper>
    )
}

export default Image