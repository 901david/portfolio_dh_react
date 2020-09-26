import styled from 'styled-components';

import StandardTitle from '../../Shared/StandardTitle';

export const ContactInfoWrapper = styled.div`
  padding-left: 8vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://images.unsplash.com/photo-1538121915146-1dedb4191b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80)
      black;
  background-size: cover;

  > div:first-child {
    margin-top: 5%;
  }

  @media only screen and (max-width: 800px) {
    background-attachment: fixed;
    height: 50%;
    width: 100vw;
    padding-left: 0;
  }
`;

export const Failure = styled.div`
  height: 75px;
  font-size: ${({ theme }) => theme['$font-size-medium-large']};
  color: ${({ theme }) => theme.$black};
  background: ${({ theme }) => theme.$white};
  border-radius: 5px;
  width: 75%;
  border: 3px solid ${({ theme }) => theme.$red};
  text-align: center;
`;

export const Success = styled(Failure)`
  border: 3px solid ${({ theme }) => theme.$green};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 45vw;

  > div {
    margin-right: 8%;
  }
`;

export const ContactTitle = styled(StandardTitle)`
  width: 45vw;
  white-space: nowrap;
`;
