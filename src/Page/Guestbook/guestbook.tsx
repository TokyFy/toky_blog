import React from "react";
import { Section } from "../../components/layouts/layout";
import Header from "../../components/header/header";
import WriteMessage from "./WriteMessage";
import style from "./guestbook.module.scss";
import Message from "./Message";

const Guestbook = () => {
  return (
    <Section>
      <Header
        header={"GuestBook"}
        description={[
          "Leave a message for me and other visitors here. ",
          "It can be anything appreciation, criticism, or just a random message. Just be nice!",
        ]}
      />
      <WriteMessage />
      <div className={style.messageList}>
        <Message
          message={'<script>alert("Humm");</script> worth a try lol'}
          name={"ashen"}
          date={"Oct 29, 2022, 1:21 AM"}
        />
        <Message
          message={"Coooolllllllllll 🖤"}
          name={"C404C"}
          date={"Oct 29, 2022, 1:21 AM"}
        />
        <Message
          message={
            "Aaaaa reaaalyyyyyyyy lonnnnnnnnnnnggg Teeeeexxxxttttttttt Aaaaa reaaalyyyyyyyy lonnnnnnnnnnnggg Teeeeexxxxttttttttt"
          }
          name={"ponny"}
          date={"Oct 29, 2022, 1:21 AM"}
        />
        <Message
          message={"First Message T_T"}
          name={"Toky"}
          date={"Oct 29, 2022, 1:21 AM"}
        />
      </div>
    </Section>
  );
};

export default Guestbook;
