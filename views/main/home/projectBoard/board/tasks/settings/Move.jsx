import React from 'react'
import InputWrapper from '../../../../../../../components/wrapper/InputWrapper'
import Button1 from '../../../../../../../components/button/Button1'

const Move = ({ data, active, onPress }) => {
    return (
        <InputWrapper label="Move">
            {data?.map((e, key) => <Button1 key={key} label={e} unactive={active !== (key + 1)} onPress={() => onPress(key + 1)} />)}
        </InputWrapper>
    )
}

export default Move