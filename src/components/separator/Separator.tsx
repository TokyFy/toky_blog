import React, {forwardRef} from 'react';
import style from "./Separator.module.scss";
import Row from "../layouts/layout";


const Separator = forwardRef<HTMLDivElement>((_props , ref) => {
  return (
     <Row>
         <div className={style.separator} ref={ref}>

         </div>
     </Row>
  );
});

export default Separator;
