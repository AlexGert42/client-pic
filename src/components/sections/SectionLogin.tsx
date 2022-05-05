import stls from '@styles/components/sections/SectionLogin.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { FormLogin } from '@components/forms'
import { Wrapper } from '@components/layout'



type TypeSectionLoginProps = TypeClassNames

const SectionLogin = ({ classNames }: TypeSectionLoginProps) => {

    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper>
                <FormLogin />
            </Wrapper>
        </section>
    )
}

export default SectionLogin