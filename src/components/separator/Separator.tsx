import React, { FunctionComponent } from 'react';
import style from "./Separator.module.scss";
import Row from "../layouts/layout";


const Separator: FunctionComponent = (props) => {
  return (
     <Row>
         <div className={style.separator}>

         </div>
     </Row>
  );
};

export default Separator;
