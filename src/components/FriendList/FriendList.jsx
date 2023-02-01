import PropTypes from 'prop-types';

import {
    FriendCard,
    FriendItem,
    Status,
    FriendImg,
    FriendName,
} from './FriendList.styled'

export default function FriendList({ friends }) {
    return (
        <FriendCard>
            {friends.map(({ avatar, name, isOnline, id }) => ( 
    <FriendItem key= {id}>
    <Status isOnline = {isOnline}>{isOnline}</Status>
    <FriendImg src={avatar} alt={name}/>
    <FriendName>{name}</FriendName>
</FriendItem>
            ))}
           
</FriendCard>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    // isOnline:  PropTypes.bool,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    
  })),
  }