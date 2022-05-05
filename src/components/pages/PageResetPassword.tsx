import stls from '@styles/components/pages/PageProfile.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { useEffect, useState } from 'react'
import { useActions } from '@utils/index'
import { Wrapper } from '@components/layout'


type TypePageResetPasswordProps = TypeClassNames

const PageResetPassword = ({classNames }: TypePageResetPasswordProps) => {
    const { ResetPassword } = useActions()
    const [email, setEmail] = useState<string>('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        ResetPassword({email: email})
    };

    


    return (
        <main className={cn(stls.container, classNames)}>
            <Wrapper>
                <form action="POST" onSubmit={onSubmit}>
                    <input type="email" onChange={e => setEmail(e.target.value)} placeholder='Email' />
                </form>
            </Wrapper>
        </main>
    )
}

export default PageResetPassword
