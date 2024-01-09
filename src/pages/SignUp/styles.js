import styled from "styled-components";
import backgroundImg from '../../assets/backgroundImg.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: start;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-top: 48px;
    margin-bottom: 48px;
  }

  > p {
    font-size: 14px;
    color: #CAC4CF;
  }

  > a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};

    text-align: center;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  opacity: 0.4;
`;
