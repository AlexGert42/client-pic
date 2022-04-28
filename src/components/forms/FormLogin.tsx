import stls from '@styles/components/forms/FormLogin.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@type/index"
import { GeneralInputAuth, GeneralButtonAuth } from '@components/general'
import { IconCheckboxFalse, IconCheckboxTrue, IconTrackingText, IconUnTrackingText } from '@components/icons'
import { useState } from 'react'
import axios from 'axios'
import { useActions } from '@utils/index'


type TypeLoginData = {
    email: string,
    password: string
}


type TypeFormLoginProps = TypeClassNames

const FormLogin = ({ classNames }: TypeFormLoginProps) => {
    // const { errorLogin } = useTypeSelector(state => state.auth)
    const { loginUser, authUser } = useActions()

    const [readPassword, setReadPassword] = useState<boolean>(false)
    const [remember, setRemember] = useState<boolean>(true)
    const [data, setData] = useState<TypeLoginData>({
        email: '',
        password: ''
    })




    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(data) 

        const res = await axios.post('http://127.0.0.1:8000/api/v1/auth/token/login/', data)
        console.log(res);
        loginUser(data)

    }

    return (
        <form className={cn(stls.container, classNames)} onSubmit={submitHandler}>
            <GeneralInputAuth
                classNames={[stls.input]}
                type={'email'}
                // autoComplete={'new-password'}
                placeholder={'Email'}
                onChange={e => setData({...data, email: e})}
            />
            <GeneralInputAuth
                classNames={[stls.input]}
                type={readPassword ? 'password' : 'text'}
                // autoComplete={'new-password'}
                placeholder={'Password'}
                onChange={e => setData({...data, password: e})}
            >
                {
                    readPassword ?
                        <button className={stls.btn__password} type={'button'} onClick={() => setReadPassword(false)}><IconTrackingText color={'phi'} /></button>
                        :
                        <button className={stls.btn__password} type={'button'} onClick={() => setReadPassword(true)}><IconUnTrackingText color={'phi'} /></button>
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