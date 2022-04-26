import stls from '@styles/components/sections/SectionAuth.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { FormLogin } from '@components/forms'
import { Wrapper } from '@components/layout'


type TypeSectionAuthProps = TypeClassNames

const SectionAuth = ({ classNames }: TypeSectionAuthProps) => {

    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper>
                <FormLogin/>
            </Wrapper>
        </section>
    )
}

export default SectionAuth