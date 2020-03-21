import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TermsPage = () => (
    <Layout>
        <SEO title="License"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>License</h1>
                </div>

                <p><strong>Last Updated March 21st, 2020.</strong></p>

                <h3><strong>MIT License</strong></h3>
                <p>Copyright (c) 2020 Ying Wang</p>
                <p>Permission is hereby granted, free of charge, to any person obtaining a copy <br/> of this software and associated documentation files (the "Software"), to deal <br/> in the Software without restriction, including without limitation the rights <br/> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell <br/> copies of the Software, and to permit persons to whom the Software is <br/> furnished to do so, subject to the following conditions: &nbsp;<br/></p>

                <br/>

                <p>The above copyright notice and this permission notice shall be included in all <br/> copies or substantial portions of the Software.</p>

                <br/>

                <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
            </div>
        </div>
    </Layout>
)

export default TermsPage
