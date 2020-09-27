import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useMappedState } from 'react-use-mapped-state';
import { useDispatch } from 'react-redux';

import Header from '../Header';
import IconBar from '../IconBar/IconBar';
import Landing from '../../pages/Landing/Landing';
import { MainAppWrapper, MainViewWrapper } from './App-Components';
import Loader from '../../components/Loader';
import { UrlService } from '../../Shared/url-service';
import { updateUrl } from '../../Ducks/ApiUrl/api-url-slice';

const App = () => {
  const [
    { viewingMainContent, landingViewedOnce },
    valueSetter,
  ] = useMappedState({
    viewingMainContent: false,
    landingViewedOnce: false,
  });
  const dispatch = useDispatch();
  const setMainContentBeingViewed = bool =>
    valueSetter('viewingMainContent', bool);
  const setLandingViewed = bool => valueSetter('landingViewedOnce', bool);

  const Skills = lazy(() => import('../../pages/SkillsInfo'));
  const ContactInfo = lazy(() => import('../../pages/ContactInfo'));
  const EducationInfo = lazy(() => import('../../pages/EducationInfo'));
  const Projects = lazy(() => import('../../pages/Projects/Projects'));

  React.useEffect(() => {
    const urlService = new UrlService();
    dispatch(updateUrl(urlService.baseUrl));
  }, []);

  return (
    <Router>
      <MainAppWrapper>
        <Header />
        <IconBar viewingMainContent={viewingMainContent} />
        {!landingViewedOnce ? (
          <Landing
            viewingMainContent={viewingMainContent}
            setLandingViewed={setLandingViewed}
            landingViewedOnce={landingViewedOnce}
            setMainContentBeingViewed={setMainContentBeingViewed}
          />
        ) : null}
        <Suspense fallback={<Loader />}>
          <MainViewWrapper>
            <Route exact path='/' render={() => <Redirect to={'/skills'} />} />
            <Route
              path='/skills'
              render={() => (
                <Skills
                  landingViewedOnce={landingViewedOnce}
                  setLandingViewed={setLandingViewed}
                  viewingMainContent={viewingMainContent}
                  setMainContentBeingViewed={setMainContentBeingViewed}
                />
              )}
            />
            <Route path='/contact' component={ContactInfo} />
            <Route path='/projects' render={() => <Projects />} />
            <Route path='/education' component={EducationInfo} />
          </MainViewWrapper>
        </Suspense>
      </MainAppWrapper>
    </Router>
  );
};

export default App;
