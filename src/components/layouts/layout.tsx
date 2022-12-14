import style from "./layouts.module.scss";
import React from "react";

const Row: React.FC<{ children: JSX.Element[] | JSX.Element }> = ({
  children,
}) => {
  return <div className={style.row}>{children}</div>;
};

const Section: React.FC<{ children: JSX.Element[] | JSX.Element }> = ({
  children,
}) => {
  return (
    <Row>
      <section className={style.section}>{children}</section>
    </Row>
  );
};

export { Row, Section };
