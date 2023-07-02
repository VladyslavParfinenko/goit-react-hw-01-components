import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import {generateRandomColor} from '../Utils/randomColor.js';

export const Statistic = ({ title, stats }) => {
    return (
      <section className={css.statistics}>
        {title && <h2>{title}</h2>}
  
        <ul className={css.statlist}>
          {stats.map((stat) => (
            <li className={css.item} key={stat.id} style={{ backgroundColor: generateRandomColor() }}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  };

Statistic.propTypes = {
    title:PropTypes.string,
    stats:PropTypes.arrayOf(PropTypes.exact({
        id:PropTypes.string.isRequired,
        label: PropTypes.string.isRequired, 
        percentage:PropTypes.number.isRequired,
    }))
}