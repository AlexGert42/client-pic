import colors from '@styles/config/Colors.module.sass'
import cn from 'classnames'
import { TypeClassNames, TypeColor } from "@type/index"


type TypeIconCheckboxFalseProps = TypeClassNames & TypeColor

const IconCheckboxFalse = ({ classNames, color = 'omega' }: TypeIconCheckboxFalseProps) => {
    return (
        <div className={cn(classNames)} aria-hidden={'true'}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.2288 21.6833H21.5788V21.3333V2.66667V2.31667H21.2288H2.65359H2.30359V2.66667V21.3333V21.6833H2.65359H21.2288ZM2.65359 0.35H21.2288C22.4933 0.35 23.5324 1.39168 23.5324 2.66667V21.3333C23.5324 22.6083 22.4933 23.65 21.2288 23.65H2.65359C1.38904 23.65 0.35 22.6083 0.35 21.3333V2.66667C0.35 1.39168 1.38904 0.35 2.65359 0.35Z" 
                fill={colors[`${color}`]} stroke="white" strokeWidth="0.7" />
            </svg>
        </div>
    )
}

export default IconCheckboxFalse