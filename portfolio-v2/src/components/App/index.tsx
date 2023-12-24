import React, { useState } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import { PORTFOLIO_DATA } from '../../Shared/constants';
import { MainAppWrapper, MainViewWrapper } from './styled-components';
import { Landing } from '../Landing';

export const App = () => {
    const [portfolioData, setPortfolioData] = useState(PORTFOLIO_DATA);
    const [viewingMainContent, setViewingMainContent] = useState(false);
    const [landingViewedOnce, setLandingViewedOnce] = useState(false);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Hello world!</div>,
        },
    ]);

    const setMainContentBeingViewed: (viewed: boolean) => void = bool =>
        setViewingMainContent(bool);

    return (
        <MainAppWrapper>
            {/* <Header /> */}
            {/* <IconBar viewingMainContent={viewingMainContent} /> */}
            {!landingViewedOnce && (
                    <Landing
                        viewingMainContent={viewingMainContent}
                        setLandingViewed={setLandingViewedOnce}
                        setMainContentBeingViewed={setMainContentBeingViewed}
                    />
                )}
            <MainViewWrapper>
                <RouterProvider router={router} />

                {/* <Route exact path='/' render={() => <Redirect to={'/skills'} />} />
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
                    <Route path='/education' component={EducationInfo} /> */}
            </MainViewWrapper>
        </MainAppWrapper>
    );
};
