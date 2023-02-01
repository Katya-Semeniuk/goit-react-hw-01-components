import PropTypes from 'prop-types';

import {
  Container,
  Heading,
  DataType,
  DataAmount,
  DataCurrency,
} from './TransactionHistory.styled';

export default function TransactionHistory({items}) {
    return (
     <Container>
  <thead>
     <tr>
      <Heading>Type</Heading>
      <Heading>Amount</Heading>
      <Heading>Currency</Heading>
     </tr>
  </thead>

{items.map(({ id, type, amount, currency }) => ( 
<tbody key={id}>
    <tr>
       <DataType>{type}</DataType>
       <DataAmount>{amount}</DataAmount>
       <DataCurrency>{currency}</DataCurrency>
     </tr>
</tbody>
       ))}
 
</Container>
       
    )
};



TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
    id:  PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })),
  }