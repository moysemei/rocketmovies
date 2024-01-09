import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

  display: flex;
  justify-content: space-between;

  padding: 24px 123px;

`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    font-weight: bold;
    margin-right: 64px;
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    margin-left: 64px;
    margin-right: 16px;
    line-height: 24px;

    a {
    text-decoration: none; 
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  }
`;