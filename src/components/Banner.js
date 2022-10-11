import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { breakpoints } from "../../utils/theme";

const Banner = ({ setShowVideo }) => {

    return (
        <section id="2022-banner">
            <StyledBanner>
                <MobileVideo>
                    <ReactPlayer
                        autoPlay
                        muted
                        url={'teaser-mobile-2022.mp4'}
                        poster={"first-frame.png"}
                        playing={true}
                        width={'100vw'}
                        height={'100vh'}
                        onEnded={() => setShowVideo(false)}
                    />
                </MobileVideo>
                <DesktopVideo>
                    <ReactPlayer
                        autoPlay
                        muted
                        url={'teaser-2022.mp4'}
                        poster={"first-frame.png"}
                        playing={true}
                        width={'100vw'}
                        height={'100vh'}
                        onEnded={() => setShowVideo(false)}
                    />
                </DesktopVideo>
                <iframe src="https://olafwempe.com/mp3/silence/silence.mp3" type="audio/mp3" allow="autoplay" id="audio" style={{ display: "none" }}></iframe>
            </StyledBanner>
        </section>
    );
};

const StyledBanner = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center; 
    justify-content: center;
    overflow: hidden;
    video {
        -o-object-fit: cover;
        object-fit: cover;
    }
`

const MobileVideo = styled.div`
    display: block;

    @media screen and (min-width: ${breakpoints.md}) {
        display: none
    }
`

const DesktopVideo = styled.div`
    display: none;
    
    @media screen and (min-width: ${breakpoints.md}) {
        display: block;
    }
`

export default Banner;
