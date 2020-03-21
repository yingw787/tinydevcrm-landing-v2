import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/dashboard.svg";
import thumbnailEvent from "../../static/images/add_file.svg"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"

const IndexPage = () => (
    <Layout>
        <SEO title="SQL-based Life Management"/>

        <div className={"page-header home"}>
            <h1>SQL-based Life Management</h1>
            <p>TinyDev helps developers automate their personal and professional routines, by making their life's data present and pleasant to use.</p>
            <img alt={"Dashboard"} src={featureImage}/>
        </div>

        <div className={"container"}>
            <div className={"features"}>

            <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-12 centered feature__content"}>
                            <h2>Integrate TinyDev into your life with three easy steps.</h2>
                        </div>
                    </div>
                </div>


                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>1. Upload some data</h2>
                                <p>Save time and tie into your existing workflows, while also retaining your control over your data.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>2. Create a view</h2>
                                <p>All your apps only get the info they need, by referencing the same source of truth.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNews}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>3. Send an event</h2>
                                <p>Notify your apps something's changed, on your timeline.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Give it a spin.</h2>
                    <p>No credit card needed.</p>
                </div>

                <div
                    className={"button"}>
                    <a
                        href="https://dashboard.tinydevcrm.com"
                        target={"_blank"}
                        rel={"noopener noreferrer"}>
                            Register
                    </a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
