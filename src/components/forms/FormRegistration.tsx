import stls from '@styles/components/forms/FormRegistration.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@type/index"
import { GeneralInputAuth, GeneralButtonAuth } from '@components/general'
import { IconCheckboxFalse, IconCheckboxTrue, IconTrackingText, IconUnTrackingText } from '@components/icons'
import { useState } from 'react'
import { useActions } from '@utils/index'

type TypeRegisterData = {
    email: string
    user_name: string
    first_name: string
    password: string
    re_password: string
}



type TypeFormRegistrationProps = TypeClassNames

const FormRegistration = ({ classNames }: TypeFormRegistrationProps) => {
    // const { errorLogin } = useTypeSelector(state => state.auth)
    const { RegisterUser } = useActions()


    const [readPassword, setReadPassword] = useState<boolean>(false)
    const [remember, setRemember] = useState<boolean>(true)

    const [data, setData] = useState<TypeRegisterData>({
        email: '',
        user_name: '',
        first_name: '',
        password: '',
        re_password: ''
    })

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(data);
        RegisterUser(data)
    }

    return (
        <form className={cn(stls.container, classNames)} onSubmit={submitHandler}>
            <GeneralInputAuth
                classNames={[stls.input]}
                type={'email'}
                autoComplete={'new-password'}
                placeholder={'Email'}
                onChange={e => setData({ ...data, email: e })}
            />
            <div className={stls.names}>
                <GeneralInputAuth
                    classNames={[stls.input]}
                    type={'text'}
                    autoComplete={'new-password'}
                    placeholder={'First Name'}
                    onChange={e => setData({ ...data, first_name: e })}
                />
                <GeneralInputAuth
                    classNames={[stls.input]}
                    type={'text'}
                    autoComplete={'new-password'}
                    placeholder={'Name'}
                    onChange={e => setData({ ...data, user_name: e })}
                />
            </div>
            <GeneralInputAuth
                classNames={[stls.input]}
                type={readPassword ? 'text' : 'password'}
                autoComplete={'new-password'}
                placeholder={'Password'}
                onChange={e => setData({ ...data, password: e })}
            >
                {
                    readPassword ?
                        <button className={stls.btn__password} type={'button'} onClick={() => setReadPassword(false)}><IconUnTrackingText color={'phi'} /></button>
                        :
                        <button className={stls.btn__password} type={'button'} onClick={() => setReadPassword(true)}><IconTrackingText color={'phi'} /></button>

                }
            </GeneralInputAuth>
            <GeneralInputAuth
                classNames={[stls.input]}
                type={readPassword ? 'text' : 'password'}
                autoComplete={'new-password'}
                placeholder={'Confirm password'}
                onChange={e => setData({ ...data, re_password: e })}
            >
                {
                    readPassword ?
                        <button className={stls.btn__password} type={'button'} onClick={() => setReadPassword(false)}><IconUnTrackingText color={'phi'} /></button>
                        :
                        <button className={stls.btn__password} type={'button'} onClick={() => setReadPassword(true)}><IconTrackingText color={'phi'} /></button>

                }
            </GeneralInputAuth>
            <GeneralButtonAuth classNames={[stls.btn]}>Sign Up</GeneralButtonAuth>
            <p className={stls.text}>or continue with</p>
            <GeneralButtonAuth type={'button'} classNames={[stls.btn__continue]}>VContacte</GeneralButtonAuth>
        </form>
    )
}

export default FormRegistration