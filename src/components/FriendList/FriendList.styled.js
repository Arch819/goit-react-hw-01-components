import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 40px 0;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;

  width: 600px;
  padding: 10px 20px;

  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #000000;

  & > span {
    width: 24px;
    height: 24px;
    margin-right: 16px;

    border-radius: 100px;
    background-color: ${props => (props.isOnline ? '#00ff00' : '#ff0000')};
  }

  & > img {
    width: 80px;
    margin-right: 16px;

    border-radius: 4px;
  }

  & > p {
    font-size: 34px;
    font-weight: 600;
  }
`;
