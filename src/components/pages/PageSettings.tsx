import stls from '@styles/components/pages/PageSettings.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'


type TypePageSettingsProps = TypeClassNames

const PageSettings = ({ classNames }: TypePageSettingsProps) => {

    return (
        <main className={cn(stls.container, classNames)}>
            PageSettings
        </main>
    )
}

export default PageSettings