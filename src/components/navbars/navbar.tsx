import style from'./navbar.module.scss'
import Row from '../layouts/layout';
import logo from '../../assets/logo.svg'
import BtnMenu from "./btn-menu";

interface props {
    clickHandler? : ()=>void
    action?: string
}

function Navbar({clickHandler , action} : props) {

    return (
       <Row>
           <nav className={style.navbar}>
               <div className={style.logo}>
                   <img src={logo} alt={"toky"}/>
               </div>
               <div className={style.btnWrapper} onClick={clickHandler}>
                   <BtnMenu name={action ? action : 'Menu' }/>
               </div>
           </nav>
       </Row>
    )
}

export default Navbar
