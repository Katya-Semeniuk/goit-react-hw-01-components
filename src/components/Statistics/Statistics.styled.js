import styled from 'styled-components';

export const Container = styled.section`
  max-width: 620px;
  margin: 40px auto;
  box-shadow: 2px 3px 8px rgb(205, 204, 204);
  background-color: white;
  `;

export const Title = styled.h2`
    text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0px;
  font-size: 40px;
  color: rgb(91, 91, 91);
  `;

  export const StatList = styled.ul`
   display: flex;
  `;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatItem = styled.li`
    display: flex;
    flex-basis: calc(100%/5);
    padding: 15px;
  flex-direction: column;
  align-items: center;
  background-color: ${getRandomHexColor};
  `;

export const Label = styled.span`
    font-size: 20px;
  margin-bottom: 5px;
  `;

export const Percentage = styled.span`
  font-size: 35px;
  `;