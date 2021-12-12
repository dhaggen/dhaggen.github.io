import * as React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import styled from "@emotion/styled";

const markdown = `
## Work Experience
Software Developer, Technical Architect, Aurora Innovation
---------------------------------------------------
###### 2020-01-01 - Current
Developing a communication platform (teleQ) for use in the medical field to handle customer contact. Along with being a fullstack developer, also has responsibilities that include being part of the architecture decision board,
 which includes discussing/drawing solutions and being responsible for the architecture of the projects my team owns.
Mostly working with authentication of external users, along with a video chat integration and a report generation tool.

##### Technologies used
- Java
- Spring boot
- Postgres
- Ansible
- MongoDB
- Docker
- Angular
- Bash
- Jenkins

System Developer, Uppsala Clinical Research
---------------------------------------------------
###### 2018-09-03 - 2019-12-31
Maintaining and developing systems for data entry in relation to medical services by the government. Systems that ease the management of data and studies upon that data by medical professionals.

##### Technologies used
- Java
- MySQL
- Docker
- Maven

IT-Consultant, Consid AB
---------------------------------------------------
###### 2017-04-03 - 2018-08-27
Currently developing a system for managing applications for EU farming subsidies. It is developed using the patterns CQRS and Event Sourcing, along with an Angular based frontend.

##### Technologies used
- Java
- Postgres
- Docker
- AngularJS
- Maven


Software Engineer, TriOptima AB
---------------------------------------------------
###### 2016-05-12 - 2017-03-13
My work was mostly focused on a customer facing portal that helped banks resolve any type of post trading activities with each other. The portal is written in Python using Django, MySQL, Vertica and Cassandra, along with various other Python libraries, with a mainly Angular based front end.

##### Technologies used
- Python
- MSSQL
- AngularJS

System Developer, Technology Nexus AB
---------------------------------------------------
###### 2014-01-02 - 2016-05-12
My tasks at Nexus focused on developing and maintaining their Reverse Proxy/Authentication Platform called Hybrid Access Gateway(HAG), which consists of several Java services and the Access Point which is written in C++.

I was also part of a team developing our own version of BankID (neXus Personal Mobile) on Android and iOS.

##### Technologies used
- Java
- Hibernate
- C++
- C#
- Ant
- CMake
- Gradle
- Bash
- Postgres
- LDAP
- Android
- iOS
- Tapestry

Java Developer, LEB System
---------------------------------------------------
###### 2012-10-01 - 2013-12-28
My main task working at LEB was to develop new functionality for, and maintain their Java-based Web Portal which was intended to mirror their desktop application for managing real estate, performing real estate related tasks.

##### Technologies used
- Java
- Pulse
- Ant
- XSLT
- CVS
- Javascript
- CSS
- REST
- GIS
`

const Header = styled.div`
    text-align: center;
    margin: 0 auto;
`

const AboutPage = () => {
    return (
        <Layout>
            <title>Johan Hägg - Software Developer - CV</title>
            <ReactMarkdown children={markdown} />
        </Layout>
    )
}

export default AboutPage
