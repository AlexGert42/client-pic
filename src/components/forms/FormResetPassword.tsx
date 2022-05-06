import stls from '@styles/components/forms/FormResetPassword.module.sass'
import { useState } from 'react'
import cn from 'classnames'
import { TypeClassNames } from "@type/index"
import { useActions } from '@utils/index'
import { GeneralButtonAuth, GeneralInputAuth } from '@components/general'


type TypeFormResetPasswordProps = TypeClassNames

const FormResetPassword = ({ classNames }: TypeFormResetPasswordProps) => {
    const { ResetPassword } = useActions()
    const [email, setEmail] = useState<string>('')

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = { email: email }
        ResetPassword(data)
    }

    return (
        <form className={cn(stls.container, classNames)} onSubmit={submitHandler}>
            <GeneralInputAuth
                classNames={[stls.input]}
                type={'email'}
                placeholder={'Email'}
                onChange={e => setEmail(e)}
            />
            <GeneralButtonAuth classNames={[stls.btn]}>Send Email</GeneralButtonAuth>
        </form>
    )
}

export default FormResetPassword