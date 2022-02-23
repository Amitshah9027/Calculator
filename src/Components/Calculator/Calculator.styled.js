import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Container = styled.div`
  display: flex;
  justify-content: right;
  width: 320px;
  height: 120px;
  background-color: black;
  color: white;
  font-size: 60px;
`;

export const TextArea = styled.div``;

export const Numbers = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 0px 20px;
  justify-content: center;
  height: 380px;
  width: 320px;
  background: black;
  padding-top: 30px;

  .num {
    grid-column-start: 1;
    grid-column-end: 3;
    width: 120px;
    color: #fff;
    font-size: 30px;
    background: #3c3a3a;
    border: none;
    border-radius: 50px;
    padding-top: 15px;
    display: flex;
    justify-content: left;
    align-items: left;
    height: 60px;
    &:active {
      background-color: green;
    }
  }

  .operator {
    background-color: #f1a33c;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 60px;
    font-size: 30px;
    color: white;
    border: none;
    &:active {
      background-color: white;
    }
  }
  .button {
    color: digit;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    font-size: 30px;

    border: none;
    &:active {
      background-color: red;
    }
  }
  .digit {
    background-color: #333;
    color: white;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 60px;
    font-size: 30px;
    border: none;
    &:active {
      background-color: red;
    }
  }
`;
