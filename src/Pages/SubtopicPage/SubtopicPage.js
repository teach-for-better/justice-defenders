import React from "react";
import { useParams } from "react-router-dom";
import firebase from "../../firebase";

import Navbar from "../../Components/Navbars/Navbar";
import SubNavbar from "../../Components/Navbars/SubNavbar";
import HelpCard from "../../Components/HelpCard/HelpCard";
import Card from "../../Components/Card/Card";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";

// styles
import { CardsContainer } from "../YearPage/YearPage.style";
import {
  IntroSection,
  Header,
  PageWrapper,
} from "../../Components/Styles/Containers";
import { Text, Heading } from "../../Components/Styles/Typography";

import { sortObject } from "../../Helpers/helpers";

const SubtopicPage = () => {
  const params = useParams();
  const yearCollection = params.year;
  const moduleCollection = `${params.year}-${params.module}`;
  const subtopicCollection = `${yearCollection}-${params.module}-${params.subtopic}`;

  const [subtopics, setSubtopics] = React.useState([]);
  const [modules, setModules] = React.useState([]);
  const [subtopicInfo, setSubtopicInfo] = React.useState([]);
  const [crumbs, setCrumbs] = React.useState([]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection(yearCollection)
      .doc("modules")
      .get()
      .then(function (doc) {
        const orderedModules = sortObject(doc.data());
        const moduleNames = Object.entries(orderedModules);
        setModules(moduleNames);
      });
  }, [yearCollection]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection(subtopicCollection)
      .doc("additional")
      .get()
      .then((doc) => {
        let data = doc.data();
        console.log(data)
        setSubtopicInfo(data);
        const orderedSubtopics = sortObject(
          data[`${moduleCollection}-subtopics`],
        );
        const subtopicNames = Object.entries(orderedSubtopics);
        setSubtopics(subtopicNames);
      });
  }, [subtopicCollection, moduleCollection]);

  const contentCards = (subtopicContent) => {
    return subtopicContent.map((content) => {
      return (
        <Card
          key={content.name}
          title={content.name}
          icon={content.icon}
          id={content.name}
        />
      );
    });
  };

  React.useEffect(() => {
    const year =
      yearCollection === "year1"
        ? "Year I"
        : yearCollection === "year2"
        ? "Year II"
        : "Year III";

    const moduleTitle = modules.map((module) => {
      return module[0] === params.module ? module[1] : null
    });

    setCrumbs([
      { title: `${year}`, href: `/${yearCollection}` },
      { title: moduleTitle, href: `/${params.year}/${params.module}` },
      {
        title: subtopicInfo.title,
        href: `/${params.year}/${params.module}/${params.subtopic}`,
      },
    ]);
  }, [modules, subtopicInfo, yearCollection, subtopicCollection, params]);

  return (
    <>
      <Navbar modules={modules} />
      <SubNavbar subtopics={subtopics} />
      <PageWrapper>
        {<BreadCrumbs crumbs={crumbs}></BreadCrumbs>}
        <Header>
          <Heading>{subtopicInfo.title}</Heading>
        </Header>
        <IntroSection>
          <Text>{subtopicInfo.intro}</Text>
          <HelpCard help={subtopicInfo.help} />
        </IntroSection>
        <CardsContainer>
          {contentCards([
            { name: "audio", icon: "../../../assets/audio-icon.png" },
            { name: "readings", icon: "../../assets/readings-icon.png" },
            { name: "videos", icon: "../../assets/videos-icon.png" },
          ])}
        </CardsContainer>
      </PageWrapper>
    </>
  );
};
export default SubtopicPage;
