
import styled from 'styled-components';

export const Container = styled.table`
 min-width: 620px;
margin: 40px auto;
border: 1px solid black;
border-collapse: collapse;
border-radius: 3px;
box-shadow: 2px 3px 8px rgb(205, 204, 204)
`;

export const Heading = styled.th`
padding: 20px;
font-size: 30px;
text-align: center;
border: 1px solid rgb(178 184 187);
color: #575353f2;
background-color: rgb(147 201 234);
`;


export const DataType = styled.td`
/* background-color: teal; */
font-size: 25px;
padding: 20px 20px;
text-align: center;
background-color: white;
border: 1px solid rgb(178 184 187);
`;

export const DataAmount = styled.td`
/* background-color: blueviolet; */
font-size: 25px;
padding: 20px 20px;
background-color: white;
border: 1px solid rgb(178 184 187);
text-align: center;
`;

export const DataCurrency = styled.td`
/* background-color: orangered; */
font-size: 25px;
padding: 20px 20px;
background-color: white;
border: 1px solid rgb(178 184 187);
text-align: center;

`;
