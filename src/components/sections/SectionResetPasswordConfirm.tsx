import stls from '@styles/components/sections/SectionResetPasswordConfirm.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { FormResetPasswordConfirm } from '@components/forms'
import { Wrapper } from '@components/layout'



type TypeSectionResetPasswordConfirmProps = TypeClassNames

const SectionResetPasswordConfirm = ({ classNames }: TypeSectionResetPasswordConfirmProps) => {

    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper>
                <FormResetPasswordConfirm/>
            </Wrapper>
        </section>
    )
}

export default SectionResetPasswordConfirm