import React, {useEffect} from "react"
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import Layout from './../components/Layout';
import Navbar from './../components/Navbar';
import Hero from './../components/Hero';
import Marquee from './../components/Marquee';
import Teaser from './../components/Teaser';
import About from './../components/About';
import LineUpSchedule from './../components/LineUpSchedule';
import Map from './../components/Map';
import Merch from './../components/Merch';
import Sponsors from './../components/Sponsors';
import Footer from './../components/Footer';

const seo = {
  title: 'Metaverse Festival | Decentraland',
  description: 'A four-day celebration of music, culture and creativity in the virtual social world of Decentraland, the Metaverse Festival is a grand collision of light, sound and portable toilets.',
  image: 'https://themetaversefestival.io/festival.jpg',
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
      </Helmet>
      <Layout>
        <header>
          <Navbar />
          <Hero />
        </header>
        <main>
          <Marquee delay={0.5}/>
          <Teaser />
          <Marquee delay={1}/>
          <About />
          <Marquee delay={1.5}/>
          <LineUpSchedule />
          <Marquee delay={2}/>
          <Map />
          <Marquee delay={2.5}/>
          {/* <Merch /> */}
          {/* <Marquee delay={3}/> */}
          {/* <Sponsors /> */}
          <Footer />
        </main>
      </Layout>
    </StyledIndexPage>
  )
}

const StyledIndexPage = styled.div`
  background: ${(props) => (props.theme[`black`])};
  main {
    .image-separator {
      .separator-image {
        width: 100%;
        height: 800px;
      }
    }
  }
`;
export default IndexPage
