import stls from '@styles/components/forms/FormRegistration.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@type/index"
import { GeneralInputAuth, GeneralButtonAuth } from '@components/general'
import { IconCheckboxFalse, IconCheckboxTrue, IconTrackingText, IconUnTrackingText } from '@components/icons'
import { useState } from 'react'


type TypeFormRegistrationProps = TypeClassNames

const FormRegistration = ({ classNames }: TypeFormRegistrationProps) => {
    const [readPassword, setReadPassword] = useState<boolean>(false)
    const [remember, setRemember] = useState<boolean>(true)

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form className={cn(stls.container, classNames)} onSubmit={submitHandler}>
           

fdsfdsfdss
        </form>
    )
}

export default FormRegistration