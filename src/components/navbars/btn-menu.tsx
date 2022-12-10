import React from "react";
import style from "./btn-menu.module.scss";

function BtnMenu({ name }: { name: string }) {
  return <div className={style.btn}>{name}</div>;
}

export default BtnMenu;