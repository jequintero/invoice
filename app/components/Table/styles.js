import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  color: #b1b4c7;
  font-family: 'Open Sans';
  text-align: left;
  border-collapse: separate;
  border-spacing: 0 5px;
`;

export const TableHeader = styled.th`
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 300;
  padding: 20px;
`;

export const TableRow = styled.tr`
  background-color: #fff;
  color: #303863;
  box-shadow: 0 3px 8px #cccccc6e;
  transition: all 0.3s ease;
  td:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  td:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 20px #cccccc6e;
  }
  &:hover img {
    cursor: pointer;
    opacity: 1;
    transform: scale(0.9);
  }
  &.onFocus {
    transform: scale(1.02);
    background-color: #e9fff8;
    img {
      opacity: 1;
      transform: scale(0.9);
    }
  }
`;

export const TableData = styled.td`
  padding: 20px;
  position: relative;
`;

export const SumRow = styled.div`
  width: 30%;
  background-color: #fff;
  color: #303863;
  box-shadow: 0 3px 8px #cccccc6e;
  margin-bottom: 5px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Sum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;
`;

export const SumValue = styled.div`
  width: 45%;
`;

export const Button = styled.img`
  position: absolute;
  right: 20px;
  width: 30px;
  height: 30px;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.3s ease;
`;

export const Input = styled.input`
  outline: none;
  cursor: pointer;
  min-width: 30px;
  &:focus {
    color: #969696;
  }
`;

export const Title = styled.p`
  color: #9699ad;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;

export const Column = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-between;
`;
