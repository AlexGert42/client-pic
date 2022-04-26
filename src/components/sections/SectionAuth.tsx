import stls from '@styles/components/sections/SectionAuth.module.sass'
import { useState } from 'react'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { FormLogin, FormRegistration } from '@components/forms'
import { Wrapper } from '@components/layout'
import { GeneralButtonAuth } from '@components/general'



type TypeSectionAuthProps = TypeClassNames

const SectionAuth = ({ classNames }: TypeSectionAuthProps) => {
    const [activeLogin, setActiveLogin] = useState<boolean>(false)

    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper>
                <div className={stls.nav}>
                    <button
                        className={cn(stls.btn, { [stls.active]: activeLogin })}
                        onClick={() => setActiveLogin(true)}
                    >Login</button>
                    <button
                        className={cn(stls.btn, { [stls.active]: !activeLogin })}
                        onClick={() => setActiveLogin(false)}
                    >Sign Up</button>
                </div>
                {
                    activeLogin ?
                        <FormLogin />
                        :
                        <FormRegistration />
                }
            </Wrapper>
        </section>
    )
}

export default SectionAuth