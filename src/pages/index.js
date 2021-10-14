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


// markup
const IndexPage = () => {

  return (
    <StyledIndexPage>
      <Helmet>
        <title>Metaverse Festival | Decentraland | Testing</title>
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
