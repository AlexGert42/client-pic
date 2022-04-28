import stls from '@styles/components/sections/SectionCopyright.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { Wrapper } from '@components/layout'




type TypeSectionCopyrightProps = TypeClassNames

const SectionCopyright = ({ classNames }: TypeSectionCopyrightProps) => {

    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper>
                <p className={stls.copyright}>
                    {'MemService.com'} {new Date().getFullYear()} &copy;
                </p>
            </Wrapper>
        </section>
    )
}

export default SectionCopyright