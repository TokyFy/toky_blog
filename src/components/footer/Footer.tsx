import React, {forwardRef} from 'react';
import style from './Footer.module.scss'
import Row from "../layouts/layout";



const Footer =  forwardRef<HTMLDivElement , {up:boolean}>(({up} , ref) => {
    return (<footer style={{zIndex : `${up ? `999` : '-1'}`}} className={style.footer} ref={ref}>
       <Row>
           <ul>
               <li>About</li>
               <li>Project</li>
               <li>Tools</li>
               <li>Blog</li>
           </ul>

           <ul className={style.menuRight}>
               <li><a  href={'https://www.linkedin.com/in/tokyfy/'} target={'_blank'} rel={'noreferrer'}>LinkedIn </a></li>
               <li><a  href={'https://github.com/TokyFy'} target={'_blank'} rel={'noreferrer'}>Github</a> </li>
               <li><a  href={'mailto:tokyfydev@gmail.com'} target={'_blank'} rel={'noreferrer'}>Mail</a> </li>
           </ul>
       </Row>
    </footer>);
});

export default Footer;
