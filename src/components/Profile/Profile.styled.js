import styled from 'styled-components';

export const Container = styled.div`
  max-width: 620px;
  margin: 40px auto;
  box-shadow: 2px 3px 8px rgb(205, 204, 204)
  `;
  
export const Description = styled.div`
  text-align: center;
  padding-bottom: 30px;
  padding-top: 30px;
  background-color: white;
  `;

  export const UserImg = styled.img`
 border-radius: 50%;
  width: 220px;
  height: 220px;
  margin-left: auto;
  margin-right: auto;
`;

export const UserName = styled.p`
   font-weight: bold;
  padding-top: 35px;
  padding-bottom: 20px;
   `;

export const Tag = styled.p`
  color: grey;
  padding-bottom: 15px;
  font-size: 25px;
  `;

export const Location = styled.p`
  margin-bottom: 0px;
  font-size: 25px;
  color: grey;
  `;

export const Stats = styled.ul`
    display: flex;
  justify-content: center;
  border: solid rgb(226, 225, 225);
  background-color: rgb(242, 241, 246);
  `;

export const StatsItem = styled.li`
   display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  padding: 30px 30px;
  `;

export const Label = styled.span`
  color: grey;
  font-size: 25px;
  `;

export const Quantity = styled.span`
   font-size: 35px;
  font-weight: 500;
  `;