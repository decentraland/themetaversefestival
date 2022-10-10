import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Banner = ({ setShowVideo }) => {

    return (
        <section id="2022-banner">
            <StyledBanner>
                <div>
                    <ReactPlayer
                        autoPlay
                        muted={false}
                        url={'teaser-2022.mp4'}
                        poster={"first-frame.png"}
                        playing={true}
                        width={'100vw'}
                        height={'100vh'}
                        onEnded={() =>  setShowVideo(false)}
                    />
                </div>
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

export default Banner;
