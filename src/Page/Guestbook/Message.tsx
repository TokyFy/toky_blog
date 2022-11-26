import React, { FunctionComponent } from "react";
import style from "./Message.module.scss";

interface Props {
  message: string;
  name: string;
  date: string;
}
const Message: FunctionComponent<Props> = ({ message, name, date }) => {
  return (
    <div className={style.message}>
      <div className={style.content}>
        <p>{message}</p>
      </div>
      <div className={style.info}>
        <span className={style.name}>By @{name}</span>
        <span className={style.date}>On {date}</span>
      </div>
    </div>
  );
};

export default Message;
