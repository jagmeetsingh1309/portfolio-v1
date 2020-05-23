import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primaryBgColor: "#0a192f",
        secondaryBgColor: "#303c55",
        powderWhite: "#FFFDF9",
        primaryColor: "#8892b0",
        secondaryColor: "#64ffda"
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;