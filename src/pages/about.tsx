import * as React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import styled from "@emotion/styled";

const markdown = `
## Studies
I'm a 34 year old software developer with my roots in the forests between Uppsala and Gävle.

My technical path was paved with an early interest in computers (more specifically computer games), and since those early
days of the Internet and Home PCs did not contain software as user friendly as the ones we have today, I was forced
to develop an agile mind to solve whatever issues appeared.

After finishing my high school studies on a technical track, with a focus in software, I took sights at what I
thought was the road I wanted to travel. I applied (and was accepted into) game development studies at Blekinge Tekniska Högskola, but
after spending a year or so there I struggled, both with the studies themselves and living so far aways from home without
the social support I've built in my childhood region.

So, I decided to return to my home and study Computer Science at Uppsala University, and after about 4 years of studies there I finished about 90%
of my course points, and started applying for work. 

## Work

## Interests
Since the pandemic started I've been trying to focus on working out more, along with my more seditary hobbies, 
such as reading, movies, series, cooking and rarely outside of work coding. I sadly am not very talented when it comes
to artistic expression, but I sometimes get an urge to try something so I occationaly dabble in piano playing, drawing and photography.
`

const Header = styled.div`
    text-align: center;
    margin: 0 auto;
`

const AvatarImg = styled.img`
    border: 2px solid ${({theme}:any) => theme.colors.breadtext };
    border-radius: 5%;
    width: 200px;
    height: 200px;
    float: right;
    margin-left: 25px;
    margin-bottom: 25px;
`

const AboutPage = () => {
    return (
        <Layout>
            <title>Johan Hägg - Software Developer - About me</title>
            <Header>
                <AvatarImg src={`/about_avatar.jpg`} />
            </Header>
            <ReactMarkdown children={markdown} />
        </Layout>
    )
}

export default AboutPage
