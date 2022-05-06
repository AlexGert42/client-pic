import stls from '@styles/components/sections/SectionResetPassword.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { Wrapper } from '@components/layout'
import { FormResetPassword } from '@components/forms'



type TypeSectionResetPasswordProps = TypeClassNames

const SectionResetPassword = ({ classNames }: TypeSectionResetPasswordProps) => {

    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper>
                <FormResetPassword/>
            </Wrapper>
        </section>
    )
}

export default SectionResetPassword