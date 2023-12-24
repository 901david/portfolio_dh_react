import styled from 'styled-components';

export const MainAppWrapper = styled.div`
  display: grid;
  grid-template-rows: [header-start] 20vh [header-end body-start] 80vh [body-end];
  grid-template-columns: [sideBar-start] 8% [sideBar-end] repeat(11, 1fr);
  position: relative;
  z-index: 10000;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: [sideBar-start] 8% [sideBar-end] repeat(11, 1fr);
  }

  @media only screen and (max-width: 800px) {
    grid-template-rows: [header-start] 20vh [header-end nav-start] 5vh [nav-end body-start] 75vh [body-end];
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const MainViewWrapper = styled.div`
  grid-column: sideBar-start / -1;
  grid-row: 2 / -1;

  @media only screen and (max-width: 800px) {
    grid-row: 3 / span 1;
    grid-column: sideBar-start / -1;
    position: relative;
    z-index: -1;
  }
`;
