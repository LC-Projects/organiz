import React from 'react'
import Button1 from './Button1'

const RadioButtons = ({ data, active, onPress }) => {
    return (
        <>
            {data?.map((e, key) => <Button1 key={key} label={e?.name} unactive={active != (e?.value)} onPress={() => onPress(e?.value)} />)}
        </>
    )
}

export default RadioButtons
