import PropTypes from 'prop-types'
import css from './HWTitle.module.css';



export const HWTitle = ({text})=>{
    return <h1 className={css.title}>{text}</h1>
}


HWTitle.propTypes = {
    text:PropTypes.string.isRequired,
}

