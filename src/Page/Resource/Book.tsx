import React, { FunctionComponent } from "react";
import style from "./Book.module.scss";

interface Props {
  image: string;
}

const Book: FunctionComponent<Props> = ({ image }) => {
  return (
    <div className={style.book}>
      <div className={style.coverWrapper}>
        <img src={image} alt={""} />
      </div>
    </div>
  );
};

export default Book;
