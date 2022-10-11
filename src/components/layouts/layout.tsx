import style from './layouts.module.scss';
import React from "react";

const Row:React.FC<{children : JSX.Element[] | JSX.Element}> = ({children}) => {
    return (
        <div className={style.row}>
            {children}
        </div>
    )
}

export default Row
