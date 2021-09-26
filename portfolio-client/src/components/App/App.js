import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useMappedState } from 'react-use-mapped-state';

import Header from '../Header';
import IconBar from '../IconBar/IconBar';
import ContactInfo from '../../pages/ContactInfo';
import SkillsInfo from '../../pages/SkillsInfo';
import EducationInfo from '../../pages/EducationInfo';
import Projects from '../../pages/Projects/Projects';
import Landing from '../../pages/Landing/Landing';
import { PORTFOLIO_DATA } from '../../Shared/constants';
import { MainAppWrapper, MainViewWrapper } from './App-Components';

const App = props => {
  const [
    { portfolioData, viewingMainContent, landingViewedOnce },
    valueSetter,
  ] = useMappedState({
    portfolioData: PORTFOLIO_DATA,
    viewingMainContent: false,
    landingViewedOnce: false,
  });

  const setMainContentBeingViewed = bool =>
    valueSetter('viewingMainContent', bool);
  const setLandingViewed = bool => valueSetter('landingViewedOnce', bool);

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
          <Route exact path='/' render={() => <Redirect to={'/skills'} />} />
          <Route
            path='/skills'
            render={() => (
              <SkillsInfo
                landingViewedOnce={landingViewedOnce}
                setLandingViewed={setLandingViewed}
                viewingMainContent={viewingMainContent}
                setMainContentBeingViewed={setMainContentBeingViewed}
              />
            )}
          />
          <Route path='/contact' component={ContactInfo} />
          <Route
            path='/projects'
            render={() => <Projects portfolioData={portfolioData} />}
          />
          <Route path='/education' component={EducationInfo} />
        </MainViewWrapper>
      </Router>
    </MainAppWrapper>
  );
};

export default App;
