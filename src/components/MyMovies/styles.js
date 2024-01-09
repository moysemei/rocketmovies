import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: 223px;

  margin: 0 auto;
  
  margin-bottom: 24px;

  background-color: rgba(255,133,155,0.1);
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 16px;

  padding: 32px;

  box-shadow: 0px 2px 0px 0px black;

  > h1 {
    font-size: 24px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.WHITE};

  }

  > p {
    font-size: 16px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_90};

    margin-bottom: 15px;
  }

  > svg {
    height: 12px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;