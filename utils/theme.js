import { rgba, lighten, darken, transparentize } from "polished";

const themeConfig = {
    accent: '#FF5C9D'
}

const basicPalette = {
    'black': '#000000',
    'white': '#FFFFFF',
    'background': '#040D2D',
    'accent': themeConfig.accent,
    'blueGray': '#B8BEE5',
    'gray': '#CCCCCC'
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

const expandedPalette = {
    ...basicPalette,
    'accentLight': () => (lighten(0.025, basicPalette.accent)),
    'accentExtraLight': () => (lighten(0.2, basicPalette.accent)),
    'grey600':     () => (lighten(0.15, basicPalette.black)),
    'grey500':     () => (lighten(0.22, basicPalette.black)),
    'grey400':     () => (lighten(0.35, basicPalette.black)),
    'grey300':     () => (lighten(0.5, basicPalette.black)),
    'grey100':     () => (lighten(0.1, basicPalette.black)),
    'blue500':     () => (darken(0.4, basicPalette.blue)),
    'purple500':   () => (darken(0.4, basicPalette.purple)),
};

const theme = {
    ...basicPalette,
    ...expandedPalette
}

export const breakpoints = {
    'xs': '416px',
    's': '576px',
    'md': '768px',
    'l': '992px',
    'xl': '1200px',
    'xxl': '1400px'
}

export const boxShadow = {
    'md': `0 0 10px ${transparentize(0.4, basicPalette.black)}`,
    'l': `0 0 30px ${transparentize(0.6, basicPalette.black)}`
}

export default theme;

