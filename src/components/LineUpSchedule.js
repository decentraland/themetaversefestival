import React, {useState, Fragment} from "react"
import styled from 'styled-components';
import Button from './Button';
import {StaticImage} from 'gatsby-plugin-image';
import { breakpoints } from "../../utils/theme";
import { days } from "../../utils/days-data"
import DaySchedule from './DaySchedule';

// markup
const LineUpSchedule = (props) => {
    const [currentSection, setCurrentSection] = useState('lineup');
    const [currentDay, setCurrentDay] = useState(1);

const handleDaySelection = (day) => {
    setCurrentDay(day);
};

const lineup = [
    {
        stageName: 'The Evolution Stage (main stage)',
        artists: [
            '3LAU',
            'Akira the Don',
            'ALISON WONDERLAND',
            'Aluna (of AlunaGeorge)',
            'Amber van Day',
            'AUTOGRAF',
            'Benji Patterson',
            'Berry Galazka',
            'Chet Porter',
            'Cody Frost',
            'Conor Byrne',
            'Crooked Colours',
            'DEADMAU5',
            'Eyes Of Bel',
            'Harrison First',
            'Louis III',
            'Miya Miya',
            'NINA NESBITT',
            'PARIS HILTON + Special Guest',
            'PNAU',
            'RAC',
            'RUFUS DU SOL',
            'Russ',
            'SPOTTIE WIFI',
            'The Luna Tapes'
        ]
    },
    {
        stageName: 'The Harrison Acoustic Stage',
        artists: [
            'ADAM BEATTIE',
            'ALABASTER De PLUME',
            'Amadis and The Ambassadors',
            'BEN WALKER & KIRSTY MERRYN',
            'DANA IMMANUEL & THE STOLEN BAND',
            'DIZRAELI',
            'Dan Korn',
            'Djanan Turan',
            'FLATS & SHARPS',
            'ICHI',
            'LEONIE EVANS',
            'LÈA MONDO',
            'M G BOULTER',
            'MARCUS BONFANTI IN THE DELTA TRIO',
            'MIKEY KENNEY & FRIENDS',
            'NICK HART & TOM DIPPER',
            'RIOGHNACH CONNOLLY & ELLIS DAVIES',
            'SHAMA RAHMAN',
            'The Turbans unplugged',
            'YOUNG WATERS',
        ]
    },
    {
        stageName: 'Pychedelic Techno Stage',
        artists: [
            'Aaron Sevilla',
            'Bemet',
            'Chaim',
            'Christian Smith',
            'Drunken Kong',
            'Effective',
            'Kate Ozz',
            'MAGA',
            'Magit Cacoon',
            'ORII',
            'SAMRA',
            'Sawlead'
        ]
    },
    {
        stageName: 'World Stage',
        artists: [
            'Brooke Sharkey',
            'Charlie G',
            'Isak\'s Island',
            'Lokyii',
            'Magnos',
            'Morski',
            'Nancy',
            'Ovy on the drums',
            'RENU',
            'Salmo',
            'Sofia Campos',
            'The Turbans',
        ]
    },
    {
        stageName: 'Jazz Club',
        artists: [
            'Awale',
            'Ilario Ferrari trio',
            'Ray Gelato giants',
            'The British Collective'
        ]
    },
    {
        stageName: 'OG Smash Stage',
        artists: [
            'BoomboxHead',
            'COCO MAMBA',
            'Connie Digital',
            'MAI World',
            'Mighty 33',
            'Sadandsolo',
            'Scrilla',
            'Studio Nouveau',
            'Vandal',
            'Virtunaut',
            'Will Jeurgens'
        ]
    },
]

const lineupRaw = [
    '3LAU',
    'AARON SEVILLA',
    'ADAM BEATTIE',
    'AKIRA THE DON',
    'ALABASTER DE PLUME',
    'ALISON WONDERLAND',
    'ALUNA [OF ALUNAGEORGE]',
    'AMADIS AND THE AMBASSADORS',
    'AMBER VAN DAY',
    'AUTOGRAF',
    'AWALE',
    'BEMET',
    'BEN WALKER & KIRSTY MERRYN',
    'BENJI PATTERSON',
    'BERRY GALAZKA',
    'BOOMBOXHEAD',
    'BROOKE SHARKEY',
    'CHAIM',
    'CHARLIE G',
    'CHRISTIAN SMITH',
    'COCO MAMBA',
    'CODY FROST',
    'CONNIE DIGITAL',
    'CONOR BYRNE',
    'CROOKED COLOURS',
    'DAN KORN',
    'DANA IMMANUEL & THE STOLEN BAND',
    'DANNY TENAGLIA',
    'DEADMAU5',
    'DIZRAELI',
    'DJANAN TURAN',
    'DRUNKEN KONG',
    'EFFECTIVE',
    'EYES OF BEL',
    'FLATS & SHARPS',
    'HARRISON FIRST',
    'ICHI',
    'ILARIO FERRARI TRIO',
    'ISAK\'S ISLAND',
    'KATE OZZ',
    'LÈA MONDO',
    'LEONIE EVANS',
    'LOKYII',
    'LOUIS III',
    'M G BOULTER',
    'MAGA',
    'MAGIT CACOON',
    'MAGNOS',
    'MAI WORLD',
    'MARCUS BONFANTI IN THE DELTA TRIO',
    'MIGHTY 33',
    'MIKEY KENNEY & FRIENDS',
    'MIYA MIYA',
    'MORSKI',
    'NANCY',
    'NICK HART & TOM DIPPER',
    'NINA NESBITT',
    'ORII',
    'OVY ON THE DRUMS',
    'PARIS HILTON',
    'RAY GELATO GIANTS',
    'RENU',
    'RIOGHNACH CONNOLLY & ELLIS DAVIES',
    'RIZ LA VIE',
    'SADANDSOLO',
    'SAMRA',
    'SAWLEAD',
    'SCRILLA',
    'SHAMA RAHMAN',
    'SOFIA CAMPOS',
    'STUDIO NOUVEAU',
    'THE BRITISH COLLECTIVE',
    'THE LUNA TAPES',
    'THE TURBANS',
    'THE TURBANS UNPLUGGED',
    'VANDAL',
    'VIRTUNAUT',
    'WILL JEURGENS',
    'YOUNG WATERS',
]

return (
    <StyledLineUpSchedule id="lineup">
        <section className={`${currentSection} ${currentSection == 'schedule' ? `day-${currentDay}` : ''} content-toggler`}>
            {currentSection == 'coming-soon' && (
                <>
                    <h1>COMING SOONG</h1>
                </>
            )}
            {currentSection == 'schedule' && (
                <>
                    <Button
                        onClick={() => (setCurrentSection('lineup'))}
                        label={'⟶ Full Lineup'}
                    />
                    <div className="day-selector">
                        {days.map((dayInfo, i) => (
                            <Button
                                className={currentDay == i + 1 ? 'selected' : ''}
                                onClick={() => {handleDaySelection(i + 1)}}
                                label={`⟶ Day 0${i + 1}`}
                            />
                        ))}
                    </div>
                    <h2 className="column-title">SCHEDULE</h2>
                    <DaySchedule
                        dayNumber={currentDay}
                        dayInfo={days[currentDay - 1]}
                    />
                </>
            )}
            {currentSection == 'lineup' && (
                <>
                    {/* <Button
                        type={'black'}
                        label={'⟶ Schedule'}
                        onClick={() => (setCurrentSection('schedule'))}
                    /> */}
                    <h2 className="column-title">FULL LINEUP</h2>
                    <section className="lineup-body">
                        {/* {lineup.map((stage, key) => (
                            <div key={key} className="stage-lineup">
                                <h3>{stage.stageName}</h3>
                                <p>
                                    {stage.artists.map((artist,key) => (
                                        <>
                                            <span key={key}>{artist}</span>
                                            <span className="dash"> / </span>
                                        </>
                                    ))}
                                </p>
                            </div>
                        ))} */}
                        <p className="raw-lineup">
                            {lineupRaw.map((artist, key) => (
                                <>
                                    <span key={key}>{artist}</span>
                                    <span className="dash"> / </span>
                                </>
                            ))}
                        </p>
                    </section>
                    {/* <p>
                        3LAU - AARON SEVILLA - ADAM BEATTIE - AKIRA THE DON - ALABASTER DE PLUME - ALISON WONDERLAND - ALUNA [OF ALUNAGEORGE] - AMADIS AND THE AMBASSADORS - AMBER VAN DAY - AUTOGRAF - AWALE - BEMET - BEN WALKER & KIRSTY MERRYN - BENJI PATTERSON - BERRY GALAZKA - BOOMBOXHEAD - BROOKE SHARKEY - CHAIM - CHARLIE G - CHRISTIAN SMITH - COCO MAMBA - CODY FROST - CONNIE DIGITAL - CONOR BYRNE - CROOKED COLOURS - DAN KORN - DANA IMMANUEL & THE STOLEN BAND - DANNY TENAGLIA - DEADMAU5 - DIZRAELI - DJANAN TURAN - DRUNKEN KONG - EFFECTIVE - EYES OF BEL - FLATS & SHARPS - HARRISON FIRST - ICHI - ILARIO FERRARI TRIO - ISAK'S ISLAND - KATE OZZ - LÈA MONDO - LEONIE EVANS - LOKYII - LOUIS III - M G BOULTER - MAGA - MAGIT CACOON - MAGNOS - MAI WORLD - MARCUS BONFANTI IN THE DELTA TRIO - MIGHTY 33 - MIKEY KENNEY & FRIENDS - MIYA MIYA - MORSKI - NANCY - NICK HART & TOM DIPPER - NINA NESBITT - ORII - OVY ON THE DRUMS - PARIS HILTON - RAY GELATO GIANTS - RENU - RIOGHNACH CONNOLLY & ELLIS DAVIES - RIZ LA VIE - SADANDSOLO - SAMRA - SAWLEAD - SCRILLA - SHAMA RAHMAN - SOFIA CAMPOS - SPOTTIE WIFI - STUDIO NOUVEAU - THE BRITISH COLLECTIVE - THE LUNA TAPES - THE TURBANS - THE TURBANS UNPLUGGED - VANDAL - VIRTUNAUT - WILL JEURGENS - YOUNG WATERS
                    </p> */}
                </>
            )}
        </section>
    </StyledLineUpSchedule>
)
}

const StyledLineUpSchedule = styled.div`
    background: black;
    .content-toggler {
        display: flex;
        min-height: 850px;
        .button {
            color: white;
            border: 1px solid #B836A9;
            max-width: 232px;
            margin-bottom: 32px;
            transition: 0.1s ease-in-out all;
            @media screen and (max-width: ${breakpoints.md}) {
                /* margin-top: 0 !important; */
                margin-bottom: 30px;
                width: 100%;
            }
            &:hover {
                color: black;
                background: white;
                border-color: transparent;
            }
        }
        .column-title {
            font-weight: 500;
            font-size: 81px;
            position: relative;
            z-index: 1;
            @media screen and (max-width: ${breakpoints.md}) {
                font-size: 54px;
            }
        }
    }
    .schedule {
        padding: 52px 70px;
        position: relative;
        /* background: blue; */
        display: flex;
        flex-direction: column;
        transition: 0.25s ease-in-out all;
        @media screen and (max-width: ${breakpoints.md}) {
            padding: 52px 24px;
        }
        .day-selector {
            display: flex;
            .button {
                margin-right: 16px;
                @media screen and (max-width: ${breakpoints.md}) {
                    margin-right: 4px;
                }
                &.selected {
                    background: white;
                    color: black;
                    border-color: transparent;
                }
            }
        }
        &.day-1 {
            background: #0025AE;
        }
        &.day-2 {
            background: #2A5B63;
        }
        &.day-3 {
            background: #3F00AE;
        }
        &.day-4 {
            background: #6D43C1;
        }
        .column-title {
            margin-bottom: 50px;
        }
    }
    .lineup {
        height: unset;
        padding: 52px 0px 52px 70px;
        /* padding: 140px 40px 0; */
        background: black;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: ${breakpoints.md}) {
            padding: 52px 24px;
            flex-direction: column;
        }
        .raw-lineup {
            font-size: 42px;
            line-height: 58px;
            width: 80%;
            @media screen and (max-width: ${breakpoints.md}) {
                font-size: 27px;
                line-height: 50px;
                span {
                    display: block;
                    &.dash {
                        display: none;
                    }
                }
            }
        }
        .stage-lineup {
            margin-top: 20px;
            margin-bottom: 120px;
            h3 {
                font-size: 52px;
            }
            p {
                margin-top: 20px;
                font-size: 38px;
                line-height: 80px;
                width: 75%;
                opacity: 0.7;
                @media screen and (max-width: ${breakpoints.md}) {
                    font-size: 27px;
                    line-height: 50px;
                }
            }
        }
        .column-title {
            margin-bottom: 40px;
            color: white;
            @media screen and (max-width: ${breakpoints.md}) {
                margin-bottom: 20px;
            }
        }
    }
`;
export default LineUpSchedule;
