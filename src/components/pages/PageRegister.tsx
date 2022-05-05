import stls from '@styles/components/pages/PageRegister.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { SectionDashboard, SectionCopyright, SectionRegister } from '@components/sections'


type TypePageRegisterProps = TypeClassNames

const PageRegister = ({ classNames }: TypePageRegisterProps) => {

    return (
        <main className={cn(stls.container, classNames)}>
            <SectionDashboard/>
            <SectionRegister/>
            <SectionCopyright/>
        </main>
    )
}

export default PageRegister