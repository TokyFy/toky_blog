import style from "./navbar.module.scss";
import { Row } from "../layouts/layout";
import logo from "../../assets/logo.svg";
import BtnMenu from "./btn-menu";
import { Link } from "react-router-dom";

interface props {
  clickHandler?: () => void;
  action?: string;
}

function Navbar({ clickHandler, action }: props) {
  return (
    <Row>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <Link to={"/"}>
            <img src={logo} alt={"toky"} />
          </Link>
        </div>
        <div className={style.btnWrapper} onClick={clickHandler}>
          <BtnMenu name={action ? action : "Menu"} />
        </div>
      </nav>
    </Row>
  );
}

export default Navbar;
