import stls from '@styles/components/pages/PageAuth.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { SectionAuth } from '@components/sections'



type TypePageAuthProps = TypeClassNames

const PageAuth = ({ classNames }: TypePageAuthProps) => {

    return (
        <main className={cn(stls.container, classNames)}>
            <SectionAuth/>
        </main>
    )
}

export default PageAuth