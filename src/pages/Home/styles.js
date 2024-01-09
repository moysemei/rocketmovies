import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";
  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }
  ;
  
  

  > section {
    margin: 0 auto;
    }

  > input {
    width: 630px;
  }

  button {
    width: 207px;

    align-self: end;
  }
`;

export const Content = styled.div`
  max-width: fit-content;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;
