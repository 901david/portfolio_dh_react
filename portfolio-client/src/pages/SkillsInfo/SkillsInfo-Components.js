import styled from "styled-components";
import { ContactTitle } from "../ContactInfo/Contact-Components";

export const SkillsInfoWrapper = styled.div`
  padding-left: 8vw;
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://images.pexels.com/photos/1089552/pexels-photo-1089552.jpeg?cs=srgb&dl=coffee-computer-device-1089552.jpg&fm=jpg)
      black;
  background-size: 100vw auto;
  background-position: left top;
  color: white;
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-template-columns: repeat(2, 1fr);
  font-style: italic;
  font-weight: bold;
  line-height: 35px;
  font-size: 1rem;
  font-family: "Crimson Text", serif;
  position: relative;

  @media only screen and (max-width: 950px) {
    grid-template-rows: repeat(3, 1fr);
  }

  @media only screen and (max-width: 800px) {
    background-attachment: fixed;
    height: 75%;
    width: 100vw;
    padding-left: 0;
  }
`;

export const SkillsWrapper = styled.div`
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: start;
  font-size: 1.5rem;
  line-height: 1.8rem;

  @media only screen and (max-width: 950px) {
    grid-column: 1 / -1;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 800px) {
    margin-top: 5rem;
    margin-bottom: ${({ bottomMargin }) => bottomMargin || 0}rem;
  }
`;

export const MissionStatement = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / -1;
  padding: 0 5rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  line-height: 1.8rem;

  @media only screen and (max-width: 950px) {
    margin-top: 2rem;
  }
`;
