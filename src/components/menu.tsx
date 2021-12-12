import * as React from "react";
import styled from "@emotion/styled";

const MenuDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    
`

const MenuItem = styled.div`
    width: 200px;
    height: 100%;
    padding: 15px;
    cursor: pointer;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    

    a {
        display: block;
        width: 100%;
        height: 100%;
        color: ${({theme}:any) => theme.colors.secondary };
        text-decoration: none;
        &:hover {
            text-decoration: none;
            color: ${({theme}:any) => theme.colors.primary };
        }
    }
`

const MenuItemExpander = styled.div`
    flex-grow: 2;
`


// data
const links = [
    {
        text: "Home",
        url: "/",
        description:
            "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    },
    {
        text: "About me",
        url: "/about",
        description:
            "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    },
    {
        text: "CV",
        url: "/cv",
        description:
            "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    },
    {
        text: "Contact",
        url: "/contact",
        description:
            "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    },
]
export default function Menu(props) {
    return (
        <MenuDiv>
            <MenuItemExpander />
            { props.location }
            {links.map((link) => {
                if (link.text === props.active) {
                    return <MenuItem>{link.text}</MenuItem>
                } else {
                    return <MenuItem><a href={link.url}>{link.text}</a></MenuItem>
                }})}
        </MenuDiv>
    )
}
