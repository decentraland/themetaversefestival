import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import volumeMuted from '../images/volume-muted.svg'
import volume from '../images/volume.svg'
import { breakpoints } from "../../utils/theme";

const Banner = ({ setShowVideo, muted, setMuted }) => {
    return (
        <section id="2022-banner">
            <StyledBanner>
                    <ReactPlayer
                        muted={muted}
                        autoPlay
                        playing={true}
                        url={'https://www.youtube.com/watch?v=CPcOk2sKzCM'}
                        width={'100vw'}
                        height={'100vh'}
                        onEnded={() => {
                            localStorage.setItem('hasWatchedVideo', true)
                            setShowVideo(false)
                        }}
                        playsinline
                    />
                <SoundButton src={muted ? volumeMuted : volume} onClick={() => setMuted(!muted)} />  
                <SkipVideo
                    onClick={() => {
                        localStorage.setItem('hasWatchedVideo', true)
                        setShowVideo(false)
                    }}
                >
                    X
                </SkipVideo>
            </StyledBanner>
        </section>
    );
};

const StyledBanner = styled.div`
    z-index: 9999;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: auto;
    display: flex;
    background: #000;
    align-items: center; 
    justify-content: center;
    overflow: hidden;
`

const SkipVideo = styled.a`
    font-family: 'Gothic';
    position: fixed;
    top: 40px;
    right: 40px;
    letter-spacing: 2px;
    cursor: pointer;
    padding: 8px;
    font-size: 50px;
    color: red;
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
