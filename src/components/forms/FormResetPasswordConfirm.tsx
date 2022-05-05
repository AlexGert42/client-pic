import stls from '@styles/components/forms/FormResetPasswordConfirm.module.sass'
import { useState } from 'react'
import cn from 'classnames'
import { TypeClassNames } from "@type/index"
import { useParams } from 'react-router-dom'
import { useActions } from '@utils/index'
import { GeneralButtonAuth, GeneralInputPassword } from '@components/general'


type TypeFormResetPasswordConfirmProps = TypeClassNames

const FormResetPasswordConfirm = ({ classNames }: TypeFormResetPasswordConfirmProps) => {
    const { uid, token } = useParams()
    const { ResetPasswordConfirm } = useActions()
    const [password, setPassword] = useState<string>('')
    const [re_password, setRe_password] = useState<string>('')


    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = {
            uid: uid,
            token: token,
            new_password: password,
            re_new_password: re_password
        }
        ResetPasswordConfirm(data)

    }

    return (
        <form className={cn(stls.container, classNames)} onSubmit={submitHandler}>
            <GeneralInputPassword
                classNames={[stls.input]}
                placeholder={'New Password'}
                onChange={e => setPassword(e)}
            />
            <GeneralInputPassword
                classNames={[stls.input]}
                placeholder={'New Password Confirm'}
                onChange={e => setRe_password(e)}
            />
            <GeneralButtonAuth classNames={[stls.btn]}>Change Password</GeneralButtonAuth>
        </form>
    )
}

export default FormResetPasswordConfirm