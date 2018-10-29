import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  padding: 15px;
  border-radius: 4px;
  background-color: #00f4ad;
  float: right;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 10px 10px transparent;
  outline: none;
  &:hover {
    background-color: #04e1a1;
    transform: translateY(-3px);
    box-shadow: 0px 2px 10px #00f4ad9c;
  }
`;
