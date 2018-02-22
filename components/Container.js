import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 928px;
  @media only screen and (max-width: 960px) {
    margin: 0 40px;
  }
  @media only screen and (max-width: 40em) {
    margin: 0 1em;
  }
`;

export default Container;
