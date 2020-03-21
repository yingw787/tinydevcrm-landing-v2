import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import informationImage from "../../static/images/foss.svg";
import eventImage from "../../static/images/os.svg";
import ProductivityImage from "../../static/images/secure_data.svg";
import happinessImage from "../../static/images/Make-happiness.svg";

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>

        <div className={"page-header"}>
            <h1>More about TinyDev</h1>
        </div>

        <div className={"container"}>
            <div className={"targets"}>
                <div className={"title"}>
                    <h2>What's different about TinyDev?</h2>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Information"} src={informationImage}/>
                            <h3>Free and Open Source Software</h3>
                            <p>The TinyDev stack is MIT-licensed and compliant with open-source standards. No vendor lock-in, and no tricks.</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Event"} src={eventImage}/>
                            <h3>API-driven</h3>
                            <p>TinyDev exposes your data through APIs, to give you scripting superpowers.</p>
                        </div>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Productivity"} src={ProductivityImage}/>
                            <h3>Security-oriented</h3>
                            <p>TinyDev seeks to implement <a href="https://standardnotes.org/privacy">the Standard Notes privacy manifesto</a>.</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Happiness"} src={happinessImage}/>
                            <h3>Boost motivation and happiness</h3>
                            <p>It is Obvious that a happy employee will make the environment happy and energetic! We are constantly attempting to provide solutions for maximizing employee’s motivation and joy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage
