import PropTypes from 'prop-types';
import {
  ProfileStatList,
  ProfileStyle,
  ProfileStyleDescription,
  UserName,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileStyle>
      <ProfileStyleDescription>
        <img src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </ProfileStyleDescription>

      <ProfileStatList>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ProfileStatList>
    </ProfileStyle>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
