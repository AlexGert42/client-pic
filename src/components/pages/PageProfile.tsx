import stls from '@styles/components/pages/PageProfile.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { useEffect } from 'react'


type TypePageProfileProps = TypeClassNames

const PageProfile = ({ classNames }: TypePageProfileProps) => {


    


    return (
        <main className={cn(stls.container, classNames)}>
            Profile
        </main>
    )
}

export default PageProfile

