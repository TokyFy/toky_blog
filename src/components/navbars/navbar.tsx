import style from'./navbar.module.scss'
import Row from '../layouts/layout';
import logo from '../../assets/logo.svg'
import BtnMenu from "./btn-menu";


function Navbar() {
    return (
       <Row>
           <nav className={style.navbar}>
               <div className={style.logo}>
                   <img src={logo} alt={"toky"}/>
               </div>
               <div className={style.btnWrapper}>
                   <BtnMenu/>
               </div>
           </nav>
       </Row>
    )
}

export default Navbar
