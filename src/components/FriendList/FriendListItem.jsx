import PropTypes from 'prop-types';
import { FriendsItem } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem isOnline={isOnline}>
      <span></span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </FriendsItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
