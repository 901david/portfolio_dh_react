import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Header from "../Header";
import IconBar from "../IconBar/IconBar";
import ContactInfo from "../../pages/ContactInfo";
import SkillsInfo from "../../pages/SkillsInfo";
import EducationInfo from "../../pages/EducationInfo";
import Projects from "../../pages/Projects/Projects";

const MainAppWrapper = styled.div`
  display: grid;
  grid-template-rows: [header-start] 20vh [header-end body-start] 80vh [body-end];
  grid-template-columns: [sideBar-start] 1fr [sideBar-end] repeat(11, 1fr);
`;

const MainViewWrapper = styled.div``;

const App = props => {
  const [portfolioData, setPortfolioData] = useState(null);
  useEffect(() => {
    axios
      .get("/api/data")
      .then(({ data: { data } }) => setPortfolioData(data))
      .catch(err => console.log(err));
  }, [axios, setPortfolioData]);
  console.log("portfolio data", portfolioData);
  return (
    <MainAppWrapper>
      <Router>
        <Header />
        <IconBar />
        <MainViewWrapper>
          <Route exact path="/" render={() => <Redirect to={"/skills"} />} />
          <Route path="/skills" component={SkillsInfo} />
          <Route path="/contact" component={ContactInfo} />
          <Route path="/projects" component={Projects} />
          <Route path="/education" component={EducationInfo} />
        </MainViewWrapper>
      </Router>
    </MainAppWrapper>
  );
};

export default App;
