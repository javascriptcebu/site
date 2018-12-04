import React from 'react'
import moment from 'moment'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h2>Welcome Cebu Nin.js.</h2>
    <p>We've just started <span title="December 04, 2018" style={{ borderStyle: "dashed", border: 0, borderBottom: "3px dashed #333" }}>{moment('12/04/18').fromNow()}</span> but to our surprise - within a couple of hours we've already hit <a href="https://www.facebook.com/javascriptcebu/photos/a.593185507781925/593185487781927/" target="_blank" rel="noopener noreferrer">300 Facebook page likes.</a> Yay!</p>
    <p><em>UPDATE: We're 400+ likes now and we're really growing...</em></p>

    <h3>Another JavaScript Group?</h3>
    <p><a href="https://www.facebook.com/javascriptcebu/">JavaScript Cebu</a> sprouted from the collaboration and love of tech communities <a href="https://www.facebook.com/laravelcebu/" target="_blank" rel="noopener noreferrer">Laravel Cebu</a> and <a href="https://www.facebook.com/vuejscebu/" target="_blank" rel="noopener noreferrer">Vue.js Cebu.</a> We created this to promote JavaScript and have a community for JavaScript developers at the Queen City Of The South, Cebu, Philippines.</p>

    <h3>What To Expect?</h3>
    <p>In 2019, we'll be doing lots of events - meetups, codecamps, school outreach and more. That's a promise and we're really eager to do that!</p>

    <h3>How Can You Help? Join Us</h3>
    <p>Our group is currently small since we're just starting. We will really appreciate some help. Send us a PM at our Facebook page and let's talk from there. Be someone who helped his community grow and promote the love for tech!</p>

    <h3>Help Us Spread The Word</h3>
    <p>For the meantime as we prepare to launch our official website and replace the contents here, please <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.facebook.com/javascriptcebu" target="_blank" rel="noopener noreferrer">continue sharing our Facebook Page</a> or <a href="https://goo.gl/tB4Uud" target="_blank" rel="noopener noreferrer">join us at JavaScript Cebu Slack</a></p>
  </Layout>
)

export default IndexPage
