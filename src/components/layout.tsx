import {css, Global, Theme, ThemeProvider, useTheme} from "@emotion/react";
import * as React from "react";
import Menu from "./menu";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithubSquare, faGoodreads, faLinkedin
} from '@fortawesome/free-brands-svg-icons'

interface PageTheme extends Theme {
    colors: {
        primary: String,
        secondary: String,
        backgroundColor: String,
        lighter: String,
        text: String,
        breadtext: String,
    }
}

const theme: PageTheme = {
    colors: {
        primary: `#61892F`,
        secondary: `#86C232`,
        backgroundColor: `#222629`,
        lighter: `#474B4F`,
        text: `#ffffff`,
        breadtext: `#6B6E70`,
    },
}

const GlobalStyles = () => {
    const theme:any = useTheme()
    return (
        <Global styles={css`
      body {
        background-color: ${ theme.colors.backgroundColor };
        color: ${ theme.colors.breadtext };
        font-family: 'Roboto', sans-serif;
      }
      
      h1 {
        color: ${ theme.colors.secondary }; 
      }
      h2 {
        color: ${ theme.colors.primary }; 
      }
      h6 {
        margin-top: -15px;
      }
    `} />
    )
}

const SocialThings = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    height: 25px;
    margin: 25px;
    a {
        color: ${({theme}:any) => theme.colors.breadtext };
        cursor: pointer;
        margin-left: 15px;
        &:hover {
            color: ${({theme}:any) => theme.colors.text }
        }
    }
`

const Container = styled.div`
    margin: 25px auto;
    margin-top: 55px;
    width: 60%;
`

export default function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <SocialThings>
                <a href={"https://github.com/dhaggen"} target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                </a>
                <a href={"https://www.linkedin.com/in/jhaggen/"} target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href={"https://www.goodreads.com/user/show/28371173-johan"} target="_blank">
                    <FontAwesomeIcon icon={faGoodreads} size="2x" />
                </a>
            </SocialThings>
            <Menu active={"test"} />
            <Container>
                {children}
            </Container>
        </ThemeProvider>
    )
}
