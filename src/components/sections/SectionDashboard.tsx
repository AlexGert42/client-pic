import stls from '@styles/components/sections/SectionDashboard.module.sass'
import cn from 'classnames'
import { TypeClassNames } from '@type/index'
import { Wrapper } from '@components/layout'
import { useActions, useTypeSelector } from '@utils/index'
import { Link } from 'react-router-dom'



type TypeSectionDashboardProps = TypeClassNames

const SectionDashboard = ({ classNames }: TypeSectionDashboardProps) => {
    const { login } = useTypeSelector(state => state.auth)
    const { LoginOrRegister } = useActions()

    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper>
                <div className={stls.nav}>
                    <Link to={'/login'}>
                        <button
                           
                            className={cn(stls.btn, { [stls.active]: login })}
                            onClick={() => LoginOrRegister({ value: true })}
                        >
                            Login</button>
                    </Link>
                    <Link to={'/registration'}>
                        <button
                            className={cn(stls.btn, { [stls.active]: !login })}
                            onClick={() => LoginOrRegister({ value: false })}
                        >
                            Sign Up</button>
                    </Link>
                </div>
            </Wrapper>
        </section>
    )
}

export default SectionDashboard