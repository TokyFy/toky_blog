import React from "react";
import Row from "../layouts/layout";

import style from "./Tools.module.scss";
import ToolsCard from "./ToolsCard";

import {
  AsepriteLogo,
  BlenderLogo,
  FigmaLogo,
  GraphqlLogo,
  JavascriptLogo,
  MongodbLogo,
  MysqlLogo,
  NextjsLogo,
  NodejsLogo,
  PostmanLogo,
  ReactLogo,
  ReduxLogo,
  SassLogo,
  ThreejsLogo,
  TypescriptLogo,
  WebstormLogo,
} from "../../assets";

const Tools = () => {
  return (
    <>
      <Row>
        <div className={style.toolsHeader}>
          <h1>Tools</h1>
          <p>
            The products, apps and services I use on a daily basis for study and
            coding.
          </p>
        </div>

        <div className={style.toolsHeaderSecond}>
          <h2>Language and Framework :</h2>
        </div>

        <div className={style.tools}>
          <ToolsCard
            image={ReactLogo}
            title={"React"}
            description={"A JavaScript library for building user interfaces"}
          />
          <ToolsCard
            image={SassLogo}
            title={"Sass"}
            description={
              "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world. "
            }
          />
          <ToolsCard
            image={JavascriptLogo}
            title={"Javascript"}
            description={
              "JavaScript , well-known as the scripting language for Web pages"
            }
          />
          <ToolsCard
            image={TypescriptLogo}
            title={"Typescript"}
            description={
              "a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
            }
          />
          <ToolsCard
            image={NodejsLogo}
            title={"NodeJs"}
            description={
              "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
            }
          />
          <ToolsCard
            image={MongodbLogo}
            title={"Mongo Db"}
            description={
              "MongoDB is a document database used to build highly available and scalable internet applications."
            }
          />
          <ToolsCard
            image={MysqlLogo}
            title={"MySql"}
            description={"MySQL is a tool used to manage databases and servers"}
          />
          <ToolsCard
            image={ReduxLogo}
            title={"Redux"}
            description={
              "Redux is a predictable state container for JavaScript apps."
            }
          />
          <ToolsCard
            image={GraphqlLogo}
            title={"GraphQl"}
            description={
              "GraphQL is an open-source data query and manipulation language for APIs"
            }
          />

          <ToolsCard
            image={NextjsLogo}
            title={"NextJs"}
            description={
              "Next.js is an open-source web development framework enabling React-based web applications with server-side rendering "
            }
          />

          <ToolsCard
            image={GraphqlLogo}
            title={"GraphQl"}
            description={
              "GraphQL is an open-source data query and manipulation language for APIs"
            }
          />

          <ToolsCard
            image={ThreejsLogo}
            title={"ThreeJs"}
            description={
              "an easy to use, lightweight, cross-browser, general purpose 3D library."
            }
          />
        </div>

        <div className={style.toolsHeaderSecond}>
          <h2>Software :</h2>
        </div>

        <div className={style.tools}>
          <ToolsCard
            image={WebstormLogo}
            title={"Webstorm"}
            description={"An amazing Ide for web development"}
          />

          <ToolsCard
            image={FigmaLogo}
            title={"Figma"}
            description={
              "Figma is a collaborative web application for interface design"
            }
          />

          <ToolsCard
            image={PostmanLogo}
            title={"Postman"}
            description={
              "Postman is an API platform for building and using APIs."
            }
          />

          <ToolsCard
            image={BlenderLogo}
            title={"Blender"}
            description={
              "Blender is the free and open source 3D creation suite."
            }
          />

          <ToolsCard
            image={AsepriteLogo}
            title={"Aseprite"}
            description={
              "Aseprite is a pixel-art tool to create 2D animations, sprites, and any kind of graphics for games."
            }
          />
        </div>
      </Row>
    </>
  );
};

export default Tools;
