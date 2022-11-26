import React from "react";
import style from "./writteMassage.module.scss";
import LoginBtn from "../../components/LoginBtn/LoginBtn";

const WriteMessage = () => {
  return (
    <div className={style.writeMessage}>
      <div className={style.text}>
        <h4>You can leave a little message too !</h4>
        <p>You need to be signed with Github to post a message.</p>
      </div>
      <div className={style.btn}>
        <LoginBtn />
      </div>
    </div>
  );
};

export default WriteMessage;
