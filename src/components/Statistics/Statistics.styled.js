import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  background-color: #eee;
  text-align: center;
  padding: 40px 0;

  & > h2 {
    padding: 40px 0;
    font-size: 36px;
    background-color: #fff;
    width: 600px;
    margin: 0 auto;
    color: #666;
  }
`;

export const StatisticsList = styled.ul`
  display: flex;
  width: 600px;
  margin: 0 auto;

  & > li {
    flex-basis: calc(100% / 5);
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0;

    color: #fff;

    & > span:first-child {
      font-size: 26px;
    }
    & > span:last-child {
      font-size: 32px;
      font-weight: 600;
    }
  }
`;
