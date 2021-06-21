import styled from 'styled-components';

export const Container = styled('div')`
  width: 550px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 550px) {
    width: auto;
    margin-left: 5%;
    margin-right: 5%;
  }
`;
