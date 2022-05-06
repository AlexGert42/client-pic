import stls from '@styles/components/pages/PageProfile.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { Wrapper } from '@components/layout'
import { SectionResetPassword } from '@components/sections'


type TypePageResetPasswordProps = TypeClassNames

const PageResetPassword = ({ classNames }: TypePageResetPasswordProps) => {


    return (
        <main className={cn(stls.container, classNames)}>
            <SectionResetPassword />
        </main>
    )
}

export default PageResetPassword
