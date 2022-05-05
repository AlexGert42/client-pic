import stls from '@styles/components/forms/FormLogin.module.sass'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { TypeClassNames } from "@type/index"
import { GeneralInputAuth, GeneralButtonAuth, GeneralInputPassword } from '@components/general'
import { IconCheckboxFalse, IconCheckboxTrue } from '@components/icons'
import { useActions } from '@utils/index'



type TypeLoginData = {
    email: string
    password: string
}


type TypeFormLoginProps = TypeClassNames

const FormLogin = ({ classNames }: TypeFormLoginProps) => {
    const { loginUser } = useActions()
    const [remember, setRemember] = useState<boolean>(true)
    const [data, setData] = useState<TypeLoginData>({
        email: '',
        password: ''
    })




    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        loginUser(data)
    }

    return (
        <form className={cn(stls.container, classNames)} onSubmit={submitHandler}>
            <GeneralInputAuth
                classNames={[stls.input]}
                type={'email'}
                placeholder={'Email'}
                onChange={e => setData({ ...data, email: e })}
            />
            <GeneralInputPassword
                classNames={[stls.input]}
                placeholder={'Password'}
                onChange={e => setData({ ...data, password: e })}
            />
            <div className={stls.details}>
                <GeneralButtonAuth
                    classNames={[stls.remember]}
                    type={'button'}
                    onClick={() => setRemember(!remember)}
                >
                    {
                        remember ?
                            <IconCheckboxTrue classNames={[stls.remember_icon]} color={'phi'} />
                            :
                            <IconCheckboxFalse classNames={[stls.remember_icon]} color={'phi'} />
                    }
                    <p className={stls.remember__lable}>Remember Me</p>
                </GeneralButtonAuth>
                <Link to={'/reset_password'}>
                    <GeneralButtonAuth classNames={[stls.forgot]} type={'button'}>Forgot password?</GeneralButtonAuth>
                </Link>
                
            </div>
            <GeneralButtonAuth classNames={[stls.btn]}>Login</GeneralButtonAuth>


        </form>
    )
}

export default FormLogin