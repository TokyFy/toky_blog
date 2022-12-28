import React from "react";
import {Section} from "../../components/layouts/layout";
import Header from "../../components/header/header";
import style from "./Resource.module.scss";
import HeaderSecond from "../../components/header/headerSecond";
import Website from "./website";

const Resource = () => {
    return (
        <Section>
            <Header
                header={"Resource"}
                description={
                    "All website , book and bootcamp course I wish i know earlier :"
                }
            />

            <HeaderSecond>Website collection :</HeaderSecond>

            <div className={style.websiteCollection}>
                <Website title={"Interactive learning web platform"} founder={"Quincy Larson"}
                         url={"freecodecamp.org"}/>
                <Website title={"Education for front-end developers"} founder={"Chris Coyier"}
                         url={"css-tricks.com"}/>
                <Website title={"Professional web design competition body"} founder={"Awwwards."}
                         url={"www.awwwards.com"}/>
                <Website title={"Learn From Anywhere"} founder={"Udemy, Inc."}
                         url={"www.udemy.com"}/>
            </div>

            <HeaderSecond>Books collection :</HeaderSecond>

            <div className={style.bookCollection}>
                <Website title={"Secrets of the JavaScript Ninja"}
                         founder={"Bear Bibeault, John Resig, and Josip Maras"}
                         url={"www.manning.com"}/>
                <Website title={"Grokking Algorithms"} founder={"Aditya Bhargava"}
                         url={"www.manning.com"}/>
                <Website title={"Dive Into DESIGN PATTERNS"} founder={"Alexander Shvets"}
                         url={"refactoring.guru"}/>
            </div>
        </Section>
    );
};

export default Resource;
