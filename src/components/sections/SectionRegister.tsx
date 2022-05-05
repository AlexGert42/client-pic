import stls from '@styles/components/sections/SectionRegister.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { FormRegistration } from '@components/forms'
import { Wrapper } from '@components/layout'



type TypeSectionLoginProps = TypeClassNames

const SectionRegister = ({ classNames }: TypeSectionLoginProps) => {

    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper>
                <FormRegistration />
            </Wrapper>
        </section>
    )
}

export default SectionRegister