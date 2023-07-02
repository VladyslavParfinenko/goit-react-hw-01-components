import PropTypes from 'prop-types';
import css from './FriendList.module.css';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return(
        <ul className={css.friendList}>
        {friends.map((friend)=>(
            <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id}/>
        ))}
      </ul>
    );
}

FriendList.protoTypes={
    friends:PropTypes.arrayOf(PropTypes.exact({
        avatar:PropTypes.string.isRequired,
        name: PropTypes.string.isRequired, 
        isOnline:PropTypes.bool.isRequired,
        id:PropTypes.number.isRequired,
    }))
}

