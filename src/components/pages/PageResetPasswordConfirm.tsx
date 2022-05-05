import stls from '@styles/components/pages/PageResetPasswordConfirm.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import SectionResetPasswordConfirm from '@components/sections/SectionResetPasswordConfirm'


type TypePageResetPasswordConfirmProps = TypeClassNames

const PageResetPasswordConfirm = ({ classNames }: TypePageResetPasswordConfirmProps) => {
    return (
        <main className={cn(stls.container, classNames)}>
           <SectionResetPasswordConfirm/>
        </main>
    );
};

export default PageResetPasswordConfirm