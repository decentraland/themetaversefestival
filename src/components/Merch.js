import React, {useEffect, useState} from "react"
import styled from 'styled-components';
import Button from './../components/Button';
import { StaticImage } from "gatsby-plugin-image";
import { breakpoints } from "../../utils/theme";

const Merch = (props) => {

    const scrollTo = (targetId) => {
        console.log('hello')
        const target = document.getElementById(targetId);
        console.log(target);
        if (target) {
            target.scrollIntoView();
        }
    };
  return (
    <StyledMerch id="merch" className="what-is-metaverse">
        <div className="about-content">
            <h2>MERCH</h2>
            <p>
                There are merch stands situated on either side of the Evolution Stage (refer to the Festival Map for details) where you can buy wearables linked to your favorite artists. 
            </p>
            <p>
                You make transactions through your Wallet and also use it to store your purchases.
            </p>
            <p> 
                Having a Wallet is the best way to experience the Festival, so to find out how to get one, check out our <a href="https://docs.decentraland.org/examples/get-a-wallet/">step-by-step guide.</a>
            </p>
            <Button onClick={() => {scrollTo("map")}} label={'⟶ Link'} type={'black'}/>
        </div>
        <div className="about-image-container">
            <StaticImage className="merch-image" src="./../images/merch.png" alt="Welcome to Metaverse"/>
        </div>
    </StyledMerch>
  )
}

const StyledMerch = styled.div`
    background: #F7F2ED;
    display: flex;
    height: calc(100vh - 48px);
    min-height: 850px;
    @media screen and (max-width: ${breakpoints.md}) {
        flex-direction: column;
    }
    .about-content {
        padding: 52px 70px;
        width: 60%;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: ${breakpoints.md}) {
            width: 100%;
            padding: 52px 24px;
        }
        h2, p {
            color: black;
        }
        h2 {
            font-size: 81px;
            margin-bottom: 72px;
            line-height: 81px;
            font-family: 'SpaceMono';
            text-transform: uppercase;
            font-weight: 400;
            @media screen and (max-width: ${breakpoints.md}) {
                font-size: 62px;
            }
        }
        p {
            font-size: 16px;
            line-height: 23px;
            margin-bottom: 22px;
            font-family: 'Inter';
            @media screen and (max-width: ${breakpoints.md}) {
                margin-bottom: 32px;
            }
            a {
                color: black;
                font-weight: 600;
                &:hover {
                    border-bottom: 2px solid black;
                }
            }
        }
        .button {
            margin-top: auto;
            border: 1px solid #B836A9;
            width: 232px;
        }
    }
    .about-image-container {
        width: 62%;
        height: 100%;
        .merch-image {
            width: 100%;
            height: 100%;
        }
        @media screen and (max-width: ${breakpoints.md}) {
            display: none;
        }
    }
`;

export default Merch
