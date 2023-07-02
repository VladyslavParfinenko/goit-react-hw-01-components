import PropTypes from 'prop-types';
import css from './TransactionItem.module.css'



export const TransactionItem = ({type,amount,currency,id}) =>{
return(
    <tr key={id} className={css.tableRow}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    



);


}

TransactionItem.propTypes = {
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired
}