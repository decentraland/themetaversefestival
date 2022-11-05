import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import volumeMuted from '../images/volume-muted.svg'
import volume from '../images/volume.svg'
import { breakpoints } from "../../utils/theme";

const Banner = ({ setShowVideo }) => {
    const [muted, setMuted] = useState(false)

    return (
        <section id="2022-banner">
            <StyledBanner>
                <MobileVideo>
                    <ReactPlayer
                        muted={muted}
                        autoPlay
                        playing={true}
                        url={'teaser-mobile-2022.mp4'}
                        poster={"first-frame.png"}
                        width={'100vw'}
                        height={'100vh'}
                        onEnded={() => setShowVideo(false)}
                        playsinline
                    />
                </MobileVideo>
                <DesktopVideo>
                    <ReactPlayer
                        muted={muted}
                        autoPlay
                        playing={true}
                        url={'teaser-2022.mp4'}
                        poster={"first-frame.png"}
                        width={'100vw'}
                        height={'100vh'}
                        onEnded={() => setShowVideo(false)}
                        playsinline
                    />
                </DesktopVideo>
                <SkipVideo onClick={() => setShowVideo(false)}>
                    X
                </SkipVideo>
            </StyledBanner>
        </section>
    );
};

const StyledBanner = styled.div`
    z-index: 666;
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

const SkipVideo = styled.a`
    position: fixed;
    top: 40px;
    right: 40px;
    letter-spacing: 2px;
    cursor: crosshair;
    padding: 8px;
`

const SoundButton = styled.img`
    position: fixed;
    top: 40px;
    width: 32px;
    height: 32px;
    left: 40px;
    letter-spacing: 2px;
`

export default Banner;
