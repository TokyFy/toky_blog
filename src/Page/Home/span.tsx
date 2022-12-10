import React, {FunctionComponent} from 'react';
import style from './inlineHeader.module.scss';

type Props = {
    color : string,
    children : string
};

const Span: FunctionComponent<Props> = ({children , color}) => {
  return (
      <span style={{color : `${color}`}} className={style.inlineHeader}>
          {children}
      </span>
  );
};

export default Span;
