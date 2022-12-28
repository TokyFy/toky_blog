import React from "react";
import style from "./Menu.module.scss";
import LinkBox from "../LinkBox/LinkBox";
import {About, Blog, GuestBook, Link, Music, Picture, Project, Resource, Tools,} from "../../assets";

const Menu = ({
                  show,
                  clickHandler,
              }: {
    show: boolean;
    clickHandler?: () => void;
}) => {
    return (
        <div
            onClick={clickHandler}
            className={`${style.menu} ${show ? style.show : ""}`}
        >
            {/*<div className={style.navWrapper}>*/}
            {/*    <Navbar action={"Home"}/>*/}
            {/*</div>*/}

            <div className={style.navMenu}>
                <LinkBox image={About} url={"/About"}/>
                <LinkBox image={Link} url={"/Link"}/>
                <LinkBox image={Project} url={"/Project"}/>
                <LinkBox image={Tools} url={"/Tools"}/>
                <LinkBox image={GuestBook} url={"/GuestBook"}/>
                <LinkBox image={Resource} url={"/Resource"}/>
                <LinkBox image={Blog} url={"/Blog"}/>
                <LinkBox image={Music} url={"/Music"}/>
                <LinkBox image={Picture} url={"/Picture"}/>
            </div>
        </div>
    );
};

export default Menu;
