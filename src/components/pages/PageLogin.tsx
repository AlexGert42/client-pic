import stls from '@styles/components/pages/PageLogin.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'


type TypePageLoginProps = TypeClassNames

const PageLogin = ({ classNames }: TypePageLoginProps) => {

    return (
        <main className={cn(stls.container, classNames)}>
            login
        </main>
    )
}

export default PageLogin