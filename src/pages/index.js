import React, { useState } from "react"
import styled from 'styled-components'
import { Helmet } from "react-helmet"
import Layout from './../components/Layout'
import { Script } from 'gatsby'
import Hero from './../components/Hero'
import Banner from "../components/Banner"

const seo = {
  title: 'Metaverse Music Festival | Decentraland',
  description: 'A four-day celebration of music, culture and creativity in the virtual social world of Decentraland, the Metaverse Festival is a grand collision of light, sound and portable toilets.',
  image: 'https://themetaversemusicfestival.io/logo-metaverse.png',
}

const meta = {
  ...seo,
  'og:title': seo.title || '',
  'twitter:title': seo.title || '',
  'og:description': seo.description || '',
  'twitter:description': seo.description || '',
  'og:image': seo.image || '',
  'twitter:image': seo.image || '',
  'twitter:card': 'summary_large_image',
  'twitter:creator': '@decentraland',
  'og:type': 'website',
}

// markup
const IndexPage = () => {
  const [showVideo, setShowVideo] = useState(true)

  return (
    <StyledIndexPage>
      <Helmet>
        {Object.keys(meta)
          .filter((name) => Boolean(meta[name]))
          .map((name) => {
            if (name === 'title') {
              return <title key={name}>{meta[name]}</title>
            }

            if (name.startsWith('og:')) {
              return <meta key={name} property={name} content={meta[name]} />
            }

            return <meta key={name} name={name} content={meta[name]} />
          })}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Helmet>
      <Layout>
        <header>
          <Hero />
        </header>
        <main>
          {
            showVideo &&
            <Banner setShowVideo={setShowVideo} />
          }
        </main>
      </Layout>
      <Script id="analytics-script">
        {
          !function () {
            var analytics = window.analytics = window.analytics || [];
            if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice."); else {
              analytics.invoked = !0; analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware"]; analytics.factory = function (e) { return function () { var t = Array.prototype.slice.call(arguments); t.unshift(e); analytics.push(t); return analytics } }; for (var e = 0; e < analytics.methods.length; e++) { var key = analytics.methods[e]; analytics[key] = analytics.factory(key) } analytics.load = function (key, e) { var t = document.createElement("script"); t.type = "text/javascript"; t.async = !0; t.src = "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js"; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(t, n); analytics._loadOptions = e }; analytics._writeKey = "ymopugfGLGw3BBim7w92OeEs8BokW4To";; analytics.SNIPPET_VERSION = "4.15.3";
              analytics.load("ymopugfGLGw3BBim7w92OeEs8BokW4To");
              analytics.page();
            }
          }()
        }
      </Script>
    </StyledIndexPage>
  )
}

const StyledIndexPage = styled.div`
  background: ${(props) => (props.theme[`black`])}
`

export default IndexPage
