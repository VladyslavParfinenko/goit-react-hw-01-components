import PropTypes from 'prop-types'
import css from './EventBoard.module.css'
import { Profile } from 'components/Profile/Profile';

export const EventBoard = ({profile}) => {
    
    return (
        <div className={css.card}>
            <Profile 
            username={profile.username} 
            tag={profile.tag} 
            location={profile.location} 
            avatar={profile.avatar} 
            followers={profile.stats.followers} 
            views={profile.stats.views} 
            likes={profile.stats.likes} 

            />
        </div>
    );
}

EventBoard.propTypes = {
    profile:PropTypes.object.isRequired,
}