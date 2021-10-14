import React, {useState, Fragment} from "react"
import styled from 'styled-components';
import Button from './Button';
import { breakpoints } from "../../utils/theme";
import { days } from "../../utils/days-data"
import DaySchedule from './DaySchedule';

// markup
const LineUpSchedule = (props) => {
    const [currentSection, setCurrentSection] = useState('schedule');
    const [currentDay, setCurrentDay] = useState(1);

const handleDaySelection = (day) => {
    setCurrentDay(day);
};

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
                    <Button
                        type={'black'}
                        label={'⟶ Schedule'}
                        onClick={() => (setCurrentSection('schedule'))}
                    />
                    <h2 className="column-title">FULL LINEUP</h2>
                    <p>
                        M G BOULTER – DAN KORN / YOUNG WATERS(DUO) – MARCUS BONFANTI IN THE DELTA TRIO – BEN WALKER & KIRSTY MERRYN – DIZRAELI THE TURBANS – FLATS & SHARPS – LÈA MONDO – DANA IMMANUEL & THE STOLEN BAND – DJANAN TURAN – RIOGHNACH – CONNOLLY & ELLIS DAVIES (HONEYFEET) – LEONIE EVANS – SHAMA RAHMAN – AMADIS & THE AMBASSADORS – ALABASTER DE PLUME – ADAM BEATTIE – MIKEY KENNEY & FRIENDS – ICHI – NICK HART & TOM DIPPER
                    </p>
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
        /* transition: 0.25s ease-in-out all; */
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
        p {
            margin-top: 20px;
            font-size: 47px;
            line-height: 60px;
            width: 75%;
            @media screen and (max-width: ${breakpoints.md}) {
                font-size: 27px;
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
