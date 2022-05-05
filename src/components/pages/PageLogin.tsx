import stls from '@styles/components/pages/PageLogin.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { SectionDashboard, SectionCopyright, SectionLogin } from '@components/sections'


type TypePageLoginProps = TypeClassNames

const PageLogin = ({ classNames }: TypePageLoginProps) => {

    return (
        <main className={cn(stls.container, classNames)}>
            <SectionDashboard/>
            <SectionLogin/>
            <SectionCopyright/>
        </main>
    )
}

export default PageLogin