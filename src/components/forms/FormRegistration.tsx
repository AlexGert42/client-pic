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
            <GeneralInputAuth
                classNames={[stls.input]}
                type={'email'}
                autoComplete={'new-password'}
                placeholder={'Email'}
            />
            <div className={stls.names}>
                <GeneralInputAuth
                    classNames={[stls.input]}
                    type={'text'}
                    autoComplete={'new-password'}
                    placeholder={'First Name'}
                />
                <GeneralInputAuth
                    classNames={[stls.input]}
                    type={'text'}
                    autoComplete={'new-password'}
                    placeholder={'Name'}
                />
            </div>
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
            <GeneralInputAuth
                classNames={[stls.input]}
                type={readPassword ? 'password' : 'text'}
                autoComplete={'new-password'}
                placeholder={'Confirm password'}
            >
                {
                    readPassword ?
                        <button className={stls.btn__password} onClick={() => setReadPassword(false)}><IconTrackingText color={'phi'} /></button>
                        :
                        <button className={stls.btn__password} onClick={() => setReadPassword(true)}><IconUnTrackingText color={'phi'} /></button>
                }
            </GeneralInputAuth>
            <GeneralButtonAuth classNames={[stls.btn]}>Sign Up</GeneralButtonAuth>
            <p className={stls.text}>or continue with</p>
            <GeneralButtonAuth classNames={[stls.btn__continue]}>VContacte</GeneralButtonAuth>
        </form>
    )
}

export default FormRegistration