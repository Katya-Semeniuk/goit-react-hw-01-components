import styled from 'styled-components';

export const FriendCard = styled.ul`
 width: 620px;
  margin-left: auto;
  margin-right: auto;
  `;

export const FriendItem = styled.li`
display: flex;
  align-items: center;
  height: 70px;
  margin-bottom: 15px;
  padding: 15px 20px;
  background-color: white;
  box-shadow: 2px 4px 6px rgb(186, 185, 185);
  border-radius: 4px;
  `;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
  return isOnline === true ? 'green' : 'red'
}}
  `;

export const FriendImg = styled.img`
  height: 60px;
  width: 60px;
  `;

export const FriendName = styled.p`
  margin-left: 15px;
  `;