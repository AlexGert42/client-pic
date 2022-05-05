import stls from '@styles/components/general/GeneralInputAuth.module.sass'
import { ReactElement, useState } from 'react'
import cn from 'classnames'
import { TypeChildren, TypeClassNames } from '@type/index'




type TypeGeneralInputAuthProps = TypeClassNames & {
    placeholder?: string
    onChange?: (e: string) => void
    type: 'text' | 'password' | 'email' | 'tel'
    autoComplete?: 'new-password' | 'off'
    value?: string
    children?: any
}

const GeneralInputAuth = ({ classNames, children, placeholder, onChange, type, autoComplete, value = '' }: TypeGeneralInputAuthProps) => {
    const [str, setStr] = useState<string>(value)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStr(e.target.value)
        onChange && onChange(e.target.value)
    }

    return (
        <div className={cn(stls.container, classNames)}>
            <>{children}</>
            <input
                className={stls.input}
                onChange={e => changeHandler(e)}
                placeholder={placeholder}
                type={type}
                value={str}
                autoComplete={autoComplete}
            />
        </div>
    )
}

export default GeneralInputAuth