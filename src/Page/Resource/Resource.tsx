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
                <Website title={"Interactive learning web platform"} founder={"Quincy Larson"}
                         url={"freecodecamp.org"}/>
                <Website title={"Interactive learning web platform"} founder={"Quincy Larson"}
                         url={"freecodecamp.org"}/>
            </div>

            <HeaderSecond>Books collection :</HeaderSecond>

            <div className={style.bookCollection}>
                <Website title={"Interactive learning web platform"} founder={"Quincy Larson"}
                         url={"freecodecamp.org"}/>
                <Website title={"Interactive learning web platform"} founder={"Quincy Larson"}
                         url={"freecodecamp.org"}/>
                <Website title={"Interactive learning web platform"} founder={"Quincy Larson"}
                         url={"freecodecamp.org"}/>
            </div>
        </Section>
    );
};

export default Resource;
