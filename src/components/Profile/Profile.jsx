import PropTypes from 'prop-types';
import {
  Container,
  Description,
  UserName,
  UserImg,
  Tag,
  Stats,
  StatsItem,
  Label,
  Quantity,
  Location
} from './Profile.styled';

export default function Profile({ username = 'unknown', tag, location, imageUrl, stats }) {
  return (
    <Container>
      <Description>
        <UserImg
          src={imageUrl}
          alt={username}
        />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Container>)
}
// cтрілочна функція:

// const Profile = () => { };
// export default Profile;
//    

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,

  stats:  PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
  };
  
