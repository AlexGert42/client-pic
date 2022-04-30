import stls from '@styles/components/sections/SectionAuth.module.sass'
import { useState } from 'react'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { FormLogin, FormRegistration } from '@components/forms'
import { Wrapper } from '@components/layout'
import { GeneralButtonAuth } from '@components/general'
import { useActions, useTypeSelector } from '@utils/index'



type TypeSectionAuthProps = TypeClassNames

const SectionAuth = ({ classNames }: TypeSectionAuthProps) => {
     const { login } = useTypeSelector(state => state.auth)
     const { LoginOrRegister } = useActions()
    // const [activeLogin, setActiveLogin] = useState<boolean>(login)

    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper>
                <div className={stls.nav}>
                    <button
                        className={cn(stls.btn, { [stls.active]: login })}
                        onClick={() => LoginOrRegister({value: true})}
                    >Login</button>
                    <button
                        className={cn(stls.btn, { [stls.active]: !login })}
                        onClick={() => LoginOrRegister({value: false})}
                    >Sign Up</button>
                </div>
                {
                    login ?
                        <FormLogin />
                        :
                        <FormRegistration />
                }
            </Wrapper>
        </section>
    )
}

export default SectionAuth