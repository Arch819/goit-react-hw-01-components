import styled from 'styled-components';

export const ProfileStyle = styled.div`
  width: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 40px;
  padding-top: 40px;
  overflow: hidden;

  background-color: #00fff0;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px #000000;
`;

export const ProfileStyleDescription = styled.div`
  width: 100%;
  padding-bottom: 40px;

  text-align: center;
  font-size: 26px;
  color: #999;

  & > img {
    background: #fff;
    border-radius: 100px;
    width: 200px;
    margin-bottom: 10px;
  }
  & > p:not(:last-child) {
    margin-bottom: 16px;
  }
`;
export const UserName = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: #000;
`;

export const ProfileStatList = styled.ul`
  display: flex;
  width: 600px;
  justify-content: center;
  background: #00ffff;

  & > li {
    flex-basis: calc(100% / 3);

    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0;

    text-align: center;

    box-shadow: 0 0 2px 0 #000000;

    & > span:first-child {
      font-size: 24px;
      color: #666;
    }
    & > span:last-child {
      font-size: 28px;
      font-weight: 600;
      color: #000;
    }
  }
`;
