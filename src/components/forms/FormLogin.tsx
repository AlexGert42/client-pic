import stls from '@styles/components/forms/FormLogin.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@type/index"
import { GeneralInputAuth, GeneralButtonAuth } from '@components/general'
import { IconCheckboxFalse, IconCheckboxTrue, IconTrackingText, IconUnTrackingText } from '@components/icons'
import { useState } from 'react'


type TypeFormLoginProps = TypeClassNames

const FormLogin = ({ classNames }: TypeFormLoginProps) => {
    const [readPassword, setReadPassword] = useState<boolean>(false)
    const [remember, setRemember] = useState<boolean>(true)

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form className={cn(stls.container, classNames)} onSubmit={submitHandler}>
            <GeneralInputAuth
                classNames={[stls.input]}
                type={'email'}
                autoComplete={'new-password'}
                placeholder={'Email'}
            />
            <GeneralInputAuth
                classNames={[stls.input]}
                type={readPassword ? 'password' : 'text'}
                autoComplete={'new-password'}
                placeholder={'Password'}
            >
                {
                    readPassword ?
                        <button className={stls.btn__password} onClick={() => setReadPassword(false)}><IconTrackingText color={'phi'} /></button>
                        :
                        <button className={stls.btn__password} onClick={() => setReadPassword(true)}><IconUnTrackingText color={'phi'} /></button>
                }
            </GeneralInputAuth>
            <div className={stls.details}>
                <GeneralButtonAuth 
                classNames={[stls.remember]}
                type={'button'}
                onClick={() => setRemember(!remember)}
                >
                    {
                        remember ? 
                        <IconCheckboxTrue classNames={[stls.remember_icon]} color={'phi'}/>
                        :
                        <IconCheckboxFalse classNames={[stls.remember_icon]} color={'phi'}/>
                    }
                    <p className={stls.remember__lable}>Remember Me</p>
                </GeneralButtonAuth>
                <GeneralButtonAuth classNames={[stls.forgot]} type={'button'}>Forgot password?</GeneralButtonAuth>
            </div>
            <GeneralButtonAuth classNames={[stls.btn]}>Login</GeneralButtonAuth>


        </form>
    )
}

export default FormLogin