import React, { FunctionComponent } from 'react';
import style from './Footer.module.scss'
import Row from "../layouts/layout";


const Footer: FunctionComponent = (props) => {
    return (<footer className={style.footer}>
       <Row>
           <ul>
               <li>About</li>
               <li>Project</li>
               <li>Tools</li>
               <li>Blog</li>
           </ul>

           <ul className={style.menuRight}>
               <li>LinkedIn</li>
               <li>Github</li>
               <li>Mail</li>
           </ul>
       </Row>
    </footer>);
};

export default Footer;
