import styled from "styled-components";

export const StandardInputWrapper = styled.div`
  position: relative;
  margin: 3rem;
  color: white;

  label {
    position: absolute;
    left: 0;
    bottom: ${({ userInput }) => (userInput ? "1.8rem" : "0.5rem")};
    font-style: italic;
    font-size: 1.5rem;
    transition: all 0.5s;
  }

  input {
    background: rgb(0, 0, 0, 0);
    border: none;
    border-bottom: solid 5px white;
    width: 45vw;
    color: white;
    font-size: 1.5rem;

    &:focus {
      outline: none;

      & + label {
        bottom: 1.8rem;
      }
    }
  }
`;
