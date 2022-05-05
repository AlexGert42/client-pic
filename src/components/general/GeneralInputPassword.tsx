import stls from '@styles/components/general/GeneralInputPassword.module.sass'
import { useState } from 'react'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { GeneralInputAuth } from '@components/general'
import { IconTrackingText, IconUnTrackingText } from '@components/icons'




type TypeGeneralInputPasswordProps = TypeClassNames & {
    placeholder?: string
    onChange?: (e: string) => void
    autoComplete?: 'new-password' | 'off'
    value?: string
    children?: any
}

const GeneralInputPassword = ({ classNames, placeholder, onChange, autoComplete, value = '' }: TypeGeneralInputPasswordProps) => {
    const [readPassword, setReadPassword] = useState<boolean>(false)

    const changeHandler = (e: string) => {
        onChange && onChange(e)
    }

    return (
        <GeneralInputAuth
            classNames={[cn(stls.container, classNames)]}
            type={readPassword ? 'text' : 'password'}
            placeholder={placeholder}
            onChange={e => changeHandler(e)}
            value={value}
            autoComplete={autoComplete}
        >
            {
                readPassword ?
                    <button className={stls.btn__password} type={'button'} onClick={() => setReadPassword(false)}><IconUnTrackingText color={'phi'} /></button>
                    :
                    <button className={stls.btn__password} type={'button'} onClick={() => setReadPassword(true)}><IconTrackingText color={'phi'} /></button>
            }
        </GeneralInputAuth>
    )
}

export default GeneralInputPassword