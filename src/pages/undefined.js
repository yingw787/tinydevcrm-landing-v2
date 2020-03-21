import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found"/>
        <div className={"container"}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>This page doesn&#39;t exist.</h1>
            <a href="/">Back to homepage</a>
        </div>
    </Layout>
)

export default NotFoundPage
