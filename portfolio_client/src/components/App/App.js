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
import Landing from "../../pages/Landing/Landing";

const MainAppWrapper = styled.div`
  display: grid;
  grid-template-rows: [header-start] 20vh [header-end body-start] 80vh [body-end];
  grid-template-columns: [sideBar-start] 8vw [sideBar-end] repeat(11, 1fr);

  @media only screen and (max-width: 1000px) {
    grid-template-columns: [sideBar-start] 10vw [sideBar-end] repeat(11, 1fr);
  }

  @media only screen and (max-width: 800px) {
    grid-template-rows: [header-start] 20vh [header-end nav-start] 5vh [nav-end body-start] 75vh [body-end];
    grid-template-columns: repeat(12, 1fr);
  }
`;

const MainViewWrapper = styled.div`
  grid-column: sideBar-start / -1;
  grid-row: 2 / -1;

  @media only screen and (max-width: 800px) {
    grid-row: 3 / span 1;
    grid-column: sideBar-start / -1;
    position: relative;
    z-index: -1;
  }
`;

const App = props => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [viewingMainContent, setMainContentBeingViewed] = useState(false);
  const [landingViewedOnce, setLandingViewed] = useState(true);

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
        <IconBar viewingMainContent={viewingMainContent} />
        {!landingViewedOnce && (
          <Landing
            viewingMainContent={viewingMainContent}
            setLandingViewed={setLandingViewed}
            landingViewedOnce={landingViewedOnce}
            setMainContentBeingViewed={setMainContentBeingViewed}
          />
        )}
        <MainViewWrapper>
          <Route exact path="/" render={() => <Redirect to={"/skills"} />} />
          <Route
            path="/skills"
            render={() => (
              <SkillsInfo
                landingViewedOnce={landingViewedOnce}
                setLandingViewed={setLandingViewed}
                viewingMainContent={viewingMainContent}
                setMainContentBeingViewed={setMainContentBeingViewed}
              />
            )}
          />
          <Route path="/contact" component={ContactInfo} />
          <Route path="/projects" component={Projects} />
          <Route path="/education" component={EducationInfo} />
        </MainViewWrapper>
      </Router>
    </MainAppWrapper>
  );
};

export default App;
