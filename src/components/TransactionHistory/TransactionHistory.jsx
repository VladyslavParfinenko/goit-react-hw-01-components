import PropTypes from 'prop-types';
import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.tableName}>Type</th>
          <th className={css.tableName}>Amount</th>
          <th className={css.tableName}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item)=>(<TransactionItem id={item.id} type={item.type} amount={item.amount} currency={item.currency} key={item.id}/>))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
