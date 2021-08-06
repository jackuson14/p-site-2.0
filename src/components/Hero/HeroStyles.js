import styled from 'styled-components';

export const SectionBody = styled.div`
  padding-top: 150px;
  padding-bottom: 100px;
  font-family: 'Droid Serif';
  font-style: italic;
  font-weight: bold;
  font-size: 7rem;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;


