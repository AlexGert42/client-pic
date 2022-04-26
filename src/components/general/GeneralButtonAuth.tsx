import stls from '@styles/components/general/GeneralButtonAuth.module.sass'
import cn from 'classnames'
import { TypeChildren, TypeClassNames } from "@type/index"


type TypeGeneralButtonAuthProps = TypeClassNames & TypeChildren & React.ComponentPropsWithoutRef<"button">

const GeneralButtonAuth = ({ classNames, ...restProps }: TypeGeneralButtonAuthProps) => {

    return <>
        <button
            className={cn([stls.container], classNames)}
            onClick={restProps.onClick}
            type={restProps.type}
        >
            {restProps.children}
        </button>
    </>
}

export default GeneralButtonAuth