import React, {useEffect, useState} from "react"
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";
import Decentraland from './../images/sponsors/decentraland.png';
import { breakpoints } from "../../utils/theme";

const Sponsors = (props) => {
    const sponsors = [
        {
            name: 'Decentraland',
            logoFile: Decentraland
        },
        {
            name: 'Decentraland',
            logoFile: Decentraland
        },
        {
            name: 'Decentraland',
            logoFile: Decentraland
        },
        {
            name: 'Decentraland',
            logoFile: Decentraland
        },
        {
            name: 'Decentraland',
            logoFile: Decentraland
        },
        {
            name: 'Decentraland',
            logoFile: Decentraland
        },
        {
            name: 'Decentraland',
            logoFile: Decentraland
        },
        {
            name: 'Decentraland',
            logoFile: Decentraland
        },
    ];
    return (
        <StyledSponsors id="sponsors" className="what-is-metaverse">
            <h2>SPONSORS</h2>
            <ul className="sponsor-list">
                {sponsors.map((sponsor, i) => (
                    <li className="sponsor" key={i}>
                        <img title={sponsor.name} src={sponsor.logoFile} />
                    </li>
                ))}
            </ul>
        </StyledSponsors>
    )
}

const StyledSponsors= styled.div`
    background: #F7F2ED;
    display: flex;
    flex-direction: column;
    padding: 52px 70px 100px;
    @media screen and (max-width: ${breakpoints.md}) {
        padding: 52px 24px;
    }
    h2, p {
        color: black;
    }
    h2 {
        font-size: 81px;
        margin-bottom: 72px;
        font-family: 'SpaceMono';
        text-transform: uppercase;
        font-weight: 400;
        @media screen and (max-width: ${breakpoints.md}) {
            margin-bottom: 24px;
            font-size: 62px;
        }
    }
    .sponsor-list {
        display: flex;
        flex-wrap: wrap;
        @media screen and (max-width: ${breakpoints.md}) {
            margin-bottom: 100px;
        }
        .sponsor {
            width: calc(100% / 4);
            display: flex;
            justify-content: center;
            align-items: center;
            @media screen and (max-width: ${breakpoints.md}) {
                width: calc(100% / 2);
            }
            img {
                max-width: 100%;
            }
        }
    }

`;

export default Sponsors
