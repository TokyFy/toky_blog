import React, {FunctionComponent} from 'react';
import {Section} from "../../components/layouts/layout";
import Header from "../../components/header/header";
import style from './About.module.scss';

const About: FunctionComponent = () => {
    return (
        <Section>
            <Header
                header={"Hello there !"}
                description={''}/>

            <div className={style.details}>
                <p>
                    My name is Toky and I am a web developer with a passion for creating intuitive and engaging
                    user experiences. Although I am new to the field, I have completed several personal projects using
                    technologies such as React, Typescript, and WebGL, which have allowed me to gain hands-on experience
                    and develop my skills.
                </p>

                <p>
                    One of my recent and current is this website that use React and Typescript to create a dynamic and
                    user-friendly interface. I also incorporated WebGL to create 3D graphics and animations, which added
                    a unique and engaging element.
                </p>

                <p>
                    I am highly motivated and always looking to learn new technologies and techniques. I am confident
                    that my passion for web development, combined with my personal projects, make me a strong candidate
                    for
                    any entry-level web developer positions. I am excited to continue building my skills and making a
                    meaningful contribution to the field.
                </p>

                <p>
                    As a web developer, I have experience using a wide range of technologies, including HTML, CSS,
                    JavaScript. I am particularly skilled in React, Typescript, and WebGL.
                </p>


                <p>
                    I am excited to share with you my latest project, that I have been working on for the past few
                    months. I am proud of what I have achieved and I can't
                    wait for you to see it.
                </p>

                <p>
                    I am active on several social media platforms, and I would love for you to connect with me on these
                    channels.
                </p>

            </div>
        </Section>
    );
};

export default About;
